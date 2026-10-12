function ProjectPreview({ project }) {
  return (
    <div className="project-preview" aria-hidden="true">
      {project.image ? (
        <img className="project-image" src={project.image} alt="" />
      ) : (
        <span className="project-image-placeholder">
          Adicione uma imagem em public/images
        </span>
      )}
    </div>
  )
}

export default ProjectPreview;