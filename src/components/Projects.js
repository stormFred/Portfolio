import React from 'react'
import Project from './Project'
export default function Projects({ mainProjects }) {
	return (
		<div className="projects" id="projects">
			{mainProjects.map((project) => {
				return <Project key={project.id} {...project} />
			})}
		</div>
	)
}
