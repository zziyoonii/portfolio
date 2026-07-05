import { motion } from 'framer-motion'
import { useState } from 'react'
import { SECTIONS } from '../data/projects'
import ProjectModal from './ProjectModal'

const FILTER_CATEGORIES = ['고객 운영', '데이터 분석', '프로세스 & 자동화', 'AI 활용', '리더십 & 팀']

export default function ScrollKeywords() {
	const [selectedProject, setSelectedProject] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [activeFilter, setActiveFilter] = useState(null)

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

	const renderProjectCard = (project, index) => (
		<motion.div
			key={project.id}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.98 }}
			onClick={() => openModal(project.id)}
			className="bg-navy-800/50 border border-white/10 p-6 rounded-lg cursor-pointer transition-all hover:border-white/30 active:border-white/40 active:bg-navy-800/70 flex flex-col h-full touch-manipulation"
		>
			<h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
			<p className="text-sm text-blue-400 mb-3">{project.subtitle}</p>
			<p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
			<div className="mt-auto">
				<div className="text-xs text-gray-400 mb-4">{project.metrics}</div>
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag, i) => (
						<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
							#{tag}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	)

	const handleNext = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex < allProjects.length - 1) {
				const nextIndex = prevIndex + 1
				setSelectedProject(allProjects[nextIndex])
				return nextIndex
			}
			return prevIndex
		})
	}

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex > 0) {
				const prevIndexNew = prevIndex - 1
				setSelectedProject(allProjects[prevIndexNew])
				return prevIndexNew
			}
			return prevIndex
		})
	}

	return (
		<>
			{/* 역량 필터 바 */}
			<div className="sticky top-[72px] z-40 bg-black/80 backdrop-blur-sm py-3 px-4 border-b border-white/5">
				<div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
					<button
						onClick={() => setActiveFilter(null)}
						className={`px-4 py-1.5 rounded-full text-sm border transition-colors touch-manipulation ${
							activeFilter === null
								? 'bg-white/15 border-white/40 text-white'
								: 'border-white/20 text-white/60 hover:text-white hover:border-white/40'
						}`}
					>
						전체
					</button>
					{FILTER_CATEGORIES.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
							className={`px-4 py-1.5 rounded-full text-sm border transition-colors touch-manipulation ${
								activeFilter === cat
									? 'bg-white/15 border-white/40 text-white'
									: 'border-white/20 text-white/60 hover:text-white hover:border-white/40'
							}`}
						>
							{cat}
						</button>
					))}
				</div>
			</div>

			{SECTIONS.map((section, sectionIndex) => {
				const visibleProjects = activeFilter
					? section.projects.filter((p) => p.filterCategory?.includes(activeFilter))
					: section.projects

				if (visibleProjects.length === 0) return null

				return (
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

							{/* 필터 비활성 시: 기존 그룹핑 렌더링 유지 */}
							{!activeFilter && section.projects.some((p) => p.group) ? (
								<div className="space-y-10">
									{Array.from(new Set(section.projects.map((p) => p.group))).map((groupName) => (
										<div key={groupName}>
											<h3 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
												{groupName}
											</h3>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:w-2/3 lg:mx-auto">
												{section.projects
													.filter((p) => p.group === groupName)
													.map((project, index) => renderProjectCard(project, index))}
											</div>
										</div>
									))}
								</div>
							) : (
								<div className={visibleProjects.length === 4 ? 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:w-2/3 lg:mx-auto' : visibleProjects.length >= 3 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8' : 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:w-2/3 lg:mx-auto'}>
									{visibleProjects.map((project, index) => renderProjectCard(project, index))}
								</div>
							)}
						</motion.div>
					</section>
				)
			})}

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
