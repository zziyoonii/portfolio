import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import ScrollKeywords from './components/ScrollKeywords'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
	const [currentSection, setCurrentSection] = useState('hero')

	useEffect(() => {
		const handleScroll = () => {
			const contactEl = document.getElementById('contact')
			if (contactEl) {
				const rect = contactEl.getBoundingClientRect()
				const windowHeight = window.innerHeight
				
				if (rect.top < windowHeight / 2) {
					setCurrentSection('contact')
				} else {
					setCurrentSection('other')
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<Nav />
			<Hero showArrow={currentSection !== 'contact'} />
			<About />
			<ScrollKeywords />
			<Testimonials />
			<Contact />
		</>
	)
}

export default App