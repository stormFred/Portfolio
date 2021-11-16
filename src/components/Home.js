import React from 'react'
import road from '../Images/road7.jpeg'

export default function About() {
	return (
		<div className="home" id="home">
			<img src={road} alt="Fred" className="image"></img>
			<div className="heading-container">
				<h1 className="heading">WELCOME. I'M FREDRICK</h1>
			</div>
			<p className="heading-desc">
				I Am A Front-End Web Developer
				<br /> Ready To Work, Learn, and Grow.
			</p>
		</div>
	)
}
