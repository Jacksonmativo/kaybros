import { ArrowUpRight } from "lucide-react";

function ServiceCard({ image, number, title, description }) {
  return (
    <article className="service-card">

      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-content">

        <span className="service-number">
          {number}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <button className="card-arrow">
          <ArrowUpRight size={20} />
        </button>

      </div>

    </article>
  );
}

export default ServiceCard;