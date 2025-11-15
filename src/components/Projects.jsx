import { useState } from 'react'
import ProjectModal from './ProjectModal'
import { SECTIONS } from '../data/projects'

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState(null)
	const [showModal, setShowModal] = useState(false)

	const allProjects = SECTIONS.flatMap((section) =>
		section.projects.map((project) => ({
			...project,
			sectionTitle: Array.isArray(section.title) ? section.title.join(' ') : section.title,
		}))
	)

	const handleProjectClick = (project) => {
		setSelectedProject(project)
		setShowModal(true)
	}

	const currentIndex = allProjects.findIndex((p) => p.id === selectedProject?.id)
	const totalProjects = allProjects.length

	const handleNext = () => {
		const index = allProjects.findIndex((p) => p.id === selectedProject?.id)
		if (index < allProjects.length - 1) {
			setSelectedProject(allProjects[index + 1])
		}
	}

	const handlePrev = () => {
		const index = allProjects.findIndex((p) => p.id === selectedProject?.id)
		if (index > 0) {
			setSelectedProject(allProjects[index - 1])
		}
	}

	return (
		<section
			id="projects"
			className="min-h-screen snap-start bg-gradient-to-b from-navy-900 to-black px-6 py-20"
		>
			<div className="mx-auto max-w-6xl">
				<h2 className="text-4xl md:text-5xl font-serif text-center text-white mb-16">Projects</h2>

				{SECTIONS.map((section) => (
					<div key={section.id} className="mb-16">
						<h3 className="text-2xl md:text-3xl font-serif text-white mb-8 text-center">
							{Array.isArray(section.title) ? (
								<>
									{section.title[0]}
									<span className="hidden md:inline"><br /></span>
									<span className="md:hidden"> </span>
									{section.title[1]}
								</>
							) : (
								section.title
							)}
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{section.projects.map((project) => {
								const fullProject = allProjects.find((p) => p.id === project.id)
								return (
								<div
									key={project.id}
									onClick={() => handleProjectClick(fullProject)}
									className="bg-navy-800/50 border border-white/10 rounded-xl p-6 hover:bg-navy-800 hover:border-white/20 transition-all cursor-pointer flex flex-col h-full"
								>
									<h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
									<p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
									<p className="text-sm text-gray-300 mb-4 flex-grow">{project.description}</p>
									<div className="mt-auto">
										<p className="text-xs text-blue-400 mb-4">{project.metrics}</p>
										<div className="flex flex-wrap gap-2">
											{project.tags?.map((tag, i) => (
												<span
													key={i}
													className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full"
												>
													#{tag}
												</span>
											))}
										</div>
									</div>
								</div>
								)
							})}
						</div>
					</div>
				))}
			</div>

			{showModal && selectedProject && (
				<ProjectModal
					selectedProject={selectedProject}
					currentIndex={currentIndex}
					totalProjects={totalProjects}
					onClose={() => {
						setShowModal(false)
						setSelectedProject(null)
					}}
					onNext={handleNext}
					onPrev={handlePrev}
				/>
			)}
		</section>
	)
}