import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import Header from './Header'
import About from './About'
import ProjectsHeading from './ProjectsHeading'
import Projects from './Projects'
import Connect from './Connect'
import Footer from './Footer'
import '../styles.css'
import blogr from '../Images/desktop-preview.jpg'

export const PortfolioContext = React.createContext()

export default function App() {
	const mainProjects = MYPROJECTS
	const isPortrait = useMediaQuery({ query: '(max-width: 750px)' })

	const [displayMenu, setDisplayMenu] = useState(false)
	function handleShowMenu() {
		setDisplayMenu(!displayMenu)
	}

	return (
		<div className="app">
			<PortfolioContext.Provider
				value={{ isPortrait, handleShowMenu, displayMenu }}>
				<Header />
				<About />
				<Projects mainProjects={mainProjects} />
				<ProjectsHeading />
				<Connect />
				<Footer />
			</PortfolioContext.Provider>
		</div>
	)
}

const MYPROJECTS = [
	{
		id: 1,
		name: 'Blogr Landing Page',
		gitLink: 'https://github.com/stormFred/Blogr-Landing-Page',
		liveLink: 'https://stormfred.github.io/Blogr-Landing-Page/',
		imgSource: `${blogr}`,
	},
]
