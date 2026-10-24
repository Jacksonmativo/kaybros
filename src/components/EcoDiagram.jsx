import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const LEFT = [
  { title: "Understand the ground first", text: "Geotechnical assessment before design means less guesswork and less disturbance." },
  { title: "Use materials wisely", text: "Careful quantities, reuse of suitable material and waste managed on site." },
];

const RIGHT = [
  { title: "Protect slopes and soil", text: "Retaining walls, gabions and drainage control erosion and keep soil in place." },
  { title: "Leave sites better than we found them", text: "Rehabilitation is planned from day one, not added at the end." },
];

const EDGE = {
  left: [[0.04, 0.484], [0.1, 0.453], [0.18, 0.393], [0.28, 0.323], [0.4, 0.262], [0.5, 0.232], [0.6, 0.234], [0.7, 0.255], [0.8, 0.304], [0.9, 0.394]],
  right: [[0.04, 0.518], [0.1, 0.565], [0.18, 0.65], [0.28, 0.728], [0.4, 0.785], [0.5, 0.798], [0.6, 0.797], [0.7, 0.774], [0.8, 0.717], [0.9, 0.62]],
};

const LINES = [
  { side: "left", lift: 0.05, a: 0.5, b: 0 },
  { side: "left", lift: -0.05, a: 0.15, b: 0.25 },
  { side: "right", lift: -0.04, a: 0.35, b: 0.4 },
  { side: "right", lift: -0.22, a: 0.55, b: 0 },
];

const GAP = 18;
const RADIUS = 30;
const f = (n) => Math.round(n * 10) / 10;

function edgeX(side, fy) {
  const points = EDGE[side];
  if (fy <= points[0][0]) return points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (fy <= points[i][0]) {
      const [y0, x0] = points[i - 1];
      const [y1, x1] = points[i];
      return x0 + ((x1 - x0) * (fy - y0)) / (y1 - y0);
    }
  }
  return points[points.length - 1][1];
}

function route(raw) {
  const points = raw.filter((point, i) => i === 0 || Math.hypot(point.x - raw[i - 1].x, point.y - raw[i - 1].y) > 0.5);
  let path = `M${f(points[0].x)} ${f(points[0].y)}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [previous, corner, next] = [points[i - 1], points[i], points[i + 1]];
    const incoming = Math.hypot(previous.x - corner.x, previous.y - corner.y);
    const outgoing = Math.hypot(next.x - corner.x, next.y - corner.y);
    const radius = Math.min(RADIUS, incoming / 2, outgoing / 2);
    path += `L${f(corner.x + ((previous.x - corner.x) * radius) / incoming)} ${f(corner.y + ((previous.y - corner.y) * radius) / incoming)}`;
    path += `Q${f(corner.x)} ${f(corner.y)} ${f(corner.x + ((next.x - corner.x) * radius) / outgoing)} ${f(corner.y + ((next.y - corner.y) * radius) / outgoing)}`;
  }
  const end = points[points.length - 1];
  return `${path}L${f(end.x)} ${f(end.y)}`;
}

function EcoDiagram() {
  const boxRef = useRef(null);
  const [geo, setGeo] = useState(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });

    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  const measure = useCallback(() => {
    const box = boxRef.current;
    const figure = box?.querySelector(".eco-leaf");
    const image = figure?.querySelector("img");
    const cards = box ? [...box.querySelectorAll(".eco-list li")] : [];
    if (!image || !image.offsetWidth || cards.length !== LINES.length) return;

    const width = image.offsetWidth;
    const height = image.offsetHeight;
    const x0 = figure.offsetLeft + (figure.offsetWidth - width) / 2;
    const y0 = figure.offsetTop;

    const lines = LINES.map(({ side, lift, a, b }, i) => {
      const card = cards[i];
      const title = card.querySelector("h3");
      const start = {
        x: side === "left" ? card.offsetLeft + card.offsetWidth + GAP : card.offsetLeft - GAP,
        y: card.offsetTop + card.clientTop + title.offsetTop + title.offsetHeight / 2,
      };
      const fy = Math.min(0.92, Math.max(0.05, (start.y - y0) / height + lift));
      const end = { x: x0 + edgeX(side, fy) * width, y: y0 + fy * height };
      const direction = Math.sign(end.x - start.x) || 1;
      const runLength = Math.abs(end.x - start.x);
      const d = route([
        end,
        { x: end.x - direction * runLength * b, y: end.y },
        { x: start.x + direction * runLength * a, y: start.y },
        start,
      ]);
      return { d, start, end };
    });

    const next = { w: box.clientWidth, h: box.clientHeight, lines };
    setGeo((previous) => (JSON.stringify(previous) === JSON.stringify(next) ? previous : next));
  }, []);

  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return undefined;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(box);
    box.querySelectorAll(".eco-leaf img, .eco-list li").forEach((element) => observer.observe(element));
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, [measure]);

  return (
    <div className={`eco-diagram${hasEntered ? " is-visible" : ""}`} ref={boxRef}>
      {geo && (
        <svg className="eco-connectors" viewBox={`0 0 ${geo.w} ${geo.h}`} aria-hidden="true">
          {geo.lines.map(({ d }, i) => <path key={`line-${i}`} d={d} pathLength="1" />)}
          {geo.lines.map(({ start, end }, i) => (
            <g key={`dots-${i}`}>
              <circle className="eco-dot" cx={start.x} cy={start.y} r="5" />
              <circle className="eco-dot" cx={end.x} cy={end.y} r="6" />
            </g>
          ))}
        </svg>
      )}

      <figure className="eco-leaf">
        <img
          src="/images/leaf.webp"
          alt="A leaf cut into a scene of construction and mining"
          loading="lazy"
          onLoad={measure}
        />
      </figure>

      {[LEFT, RIGHT].map((items, column) => (
        <ul key={column} className={`eco-list ${column === 0 ? "eco-list-left" : "eco-list-right"}`}>
          {items.map(({ title, text }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default EcoDiagram;
