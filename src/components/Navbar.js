import React, { useContext } from 'react'
import { PortfolioContext } from './App'
import Footer from './Footer'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
	const { isPortrait, handleShowMenu, displayMenu } =
		useContext(PortfolioContext)
	return (
		<div className="navbar">
			<div className="header-menu">
				<div className="menu-icon">
					<FaBars onClick={handleShowMenu} />
				</div>
			</div>
			{isPortrait ? (
				displayMenu && <Footer handleShowMenu={handleShowMenu} />
			) : (
				<Footer handleShowMenu={handleShowMenu} />
			)}
		</div>
	)
}
