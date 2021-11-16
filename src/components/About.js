import React, { useContext } from 'react'
import { PortfolioContext } from './App'

export default function About() {
	const { fields } = useContext(PortfolioContext)

	return (
		<div className="about" id="about">
			<p className="about-par">
				My name is <strong>Fredrick Gichuhi</strong>. I am a self-taught
				developer.
			</p>
			<p className="about-par">
				My aim to become a full-stack web developer, so I have started with
				learning the front-end.
			</p>
			<p className="about-par">I have proficiency in the following fields:</p>
			<ul className="list-continer" style={{ textAlign: 'center' }}>
				{fields.map((field) => (
					<li
						className="list"
						style={{
							background: 'none',
							fontSize: '16px',
							textAlign: 'center',
							listStyleType: 'none',
							padding: '.7rem 0',
							fontWeight: 'bold',
							minWidth: '1rem',
							color: 'greenyellow',
						}}>
						{field}
					</li>
				))}
			</ul>
		</div>
	)
}
