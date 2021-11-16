import React, { useContext } from 'react'
import { PortfolioContext } from './App'

export default function About() {
	const { fields } = useContext(PortfolioContext)

	return (
		<div className="about" id="about">
			<p className="about-par">
				My name is <strong>Fredrick Gichuhi</strong>. I am a self-taught
				developer. I have proficiency in the following fields:
			</p>
			<p className="about-par"></p>
			<ul className="list-continer">
				{fields.map((field) => (
					<li
						className="list"
						style={{
							background: 'none',
							fontSize: '14px',
							textAlign: 'left',
							listStyleType: 'none',
							padding: '.7rem 50rem',
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
