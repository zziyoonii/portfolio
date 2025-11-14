import { motion } from 'framer-motion'
import { useState } from 'react'
import { SECTIONS } from '../data/projects'
import ProjectModal from './ProjectModal'


export default function ScrollKeywords() {
	const [selectedProject, setSelectedProject] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(0)

	// 전체 프로젝트를 1차원 배열로 평탄화
	const allProjects = SECTIONS.flatMap((section) =>
		section.projects.map((project) => ({
			...project,
			sectionId: section.id,
			sectionTitle: Array.isArray(section.title) ? section.title.join(' ') : section.title,
		}))
	)

	const openModal = (projectId) => {
		const index = allProjects.findIndex((p) => p.id === projectId)
		setCurrentIndex(index)
		setSelectedProject(allProjects[index])
	}

	const closeModal = () => {
		setSelectedProject(null)
	}

	const totalProjects = allProjects.length

	const handleNext = () => {
		if (currentIndex < allProjects.length - 1) {
			const nextIndex = currentIndex + 1
			setCurrentIndex(nextIndex)
			setSelectedProject(allProjects[nextIndex])
		}
	}

	const handlePrev = () => {
		if (currentIndex > 0) {
			const prevIndex = currentIndex - 1
			setCurrentIndex(prevIndex)
			setSelectedProject(allProjects[prevIndex])
		}
	}

	return (
		<>
			{SECTIONS.map((section, sectionIndex) => (
				<section
					id={sectionIndex === 0 ? "projects" : undefined}
					key={section.id}
					className="min-h-screen snap-start flex flex-col justify-center items-center py-20 px-4 bg-gradient-to-b from-navy-900 to-black"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="w-full max-w-6xl"
					>
						<h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-12 md:mb-16">
							{Array.isArray(section.title) ? (
								<>
									<div className="mb-2">{section.title[0]}</div>
									<div>{section.title[1]}</div>
								</>
							) : (
								section.title
							)}
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
							{section.projects.map((project, index) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ scale: 1.05 }}
									onClick={() => openModal(project.id)}
									className="bg-navy-800/50 border border-white/10 p-6 rounded-lg cursor-pointer transition-all hover:border-white/30"
								>
									<h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
									<p className="text-sm text-blue-400 mb-3">{project.subtitle}</p>
									<p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
									<div className="text-xs text-gray-400 mb-4">{project.metrics}</div>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, i) => (
											<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
												#{tag}
											</span>
										))}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>
			))}

			{selectedProject && (
				<ProjectModal
					selectedProject={selectedProject}
					currentIndex={currentIndex}
					totalProjects={totalProjects}
					onClose={closeModal}
					onNext={handleNext}
					onPrev={handlePrev}
				/>
			)}
		</>
	)
}