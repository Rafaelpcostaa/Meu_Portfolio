import ProjectPreview from './projectPeview';

function ProjectCard({ project, index, total }) {
  return (
    <article className="project-card">
      <a
        className="project-link"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver projeto ${project.title} no GitHub`}
      >
        <ProjectPreview project={project} />
        <span className="project-arrow" aria-hidden="true">↗</span>
      </a>
      <div className="project-info">
        <div className="project-heading">
          <div>
            <p className="project-category">
              <span>{String(index + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
              &nbsp;·&nbsp; {project.type}
            </p>
            <h3>{project.title}</h3>
          </div>
          <a
            className="project-open"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${project.title} no GitHub`}
          >
            ↗
          </a>
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label="Tecnologias utilizadas">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard;