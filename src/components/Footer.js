import React from 'react'

export default function Footer({ handleShowMenu }) {
	return (
		<div className="footer" id="footer">
			<div className="footer-home foot">
				<a href="#home" className="anchor" onClick={handleShowMenu}>
					Home
				</a>
			</div>
			<div className="footer-about foot">
				<a href="#about" className="anchor" onClick={handleShowMenu}>
					About
				</a>
			</div>
			<div className="footer-projects foot">
				<a href="#projects" className="anchor" onClick={handleShowMenu}>
					Projects
				</a>
			</div>
			<div className="footer-projects foot">
				<a href="#contacts" className="anchor" onClick={handleShowMenu}>
					Contacts
				</a>
			</div>
		</div>
	)
}
