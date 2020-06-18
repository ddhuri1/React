import React from 'react'
//import moment from 'moment'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content cyan-text text-darken-4">
        <span className="card-title ">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
