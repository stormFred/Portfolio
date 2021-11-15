import React from 'react'
import '../styles.css'
import Navbar from './Navbar'

export default function Header() {
	return (
		<div className="header" id="home">
			<div className="header-name">
				<h1>Fredrick.</h1>
			</div>
			<Navbar />
		</div>
	)
}
