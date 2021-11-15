import React from 'react'

export default function Project(props) {
	const { name, gitLink, liveLink, imgSource } = props

	return (
		<div className="project">
			<div className="project-container">
				<img src={imgSource} alt="img" className="project-image" />
			</div>
			<div className="project-name">
				<h3 className="h3-project">{name}</h3>
			</div>
			<div className="links">
				<div className="github-link link">
					<a href={gitLink} target="_blank" rel="noreferrer">
						Github
					</a>
				</div>
				<div className="live-link link">
					<a href={liveLink} target="_blank" rel="noreferrer">
						Live link
					</a>
				</div>
			</div>
		</div>
	)
}
