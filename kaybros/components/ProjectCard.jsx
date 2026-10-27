import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ title, category, description, accent }) {
  return (
    <article className="project-card" style={{ '--project-accent': accent }}>
      <div className="project-visual">
        <div className="project-badge">{category}</div>
      </div>
      <div className="project-body">
        <div className="project-head">
          <h3>{title}</h3>
          <ArrowUpRight size={18} />
        </div>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
