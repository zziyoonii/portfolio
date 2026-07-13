import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { SECTIONS } from '../data/projects'
import ProjectModal from './ProjectModal'

// 모든 카드가 동일한 크기를 갖도록 공통 2열 그리드를 사용한다. (칸을 꽉 채우는 원래 크기)
const GRID_CLASS = 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto'

export default function ScrollKeywords() {
	const [selectedProject, setSelectedProject] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [activeTag, setActiveTag] = useState(null)

	// 전체 프로젝트를 1차원 배열로 평탄화
	const allProjects = useMemo(
		() =>
			SECTIONS.flatMap((section) =>
				section.projects.map((project) => ({
					...project,
					sectionId: section.id,
					sectionTitle: Array.isArray(section.title) ? section.title.join(' ') : section.title,
				}))
			),
		[]
	)

	// 태그별 프로젝트 개수 (등장 순서 유지)
	const tagCounts = useMemo(() => {
		const counts = new Map()
		allProjects.forEach((p) => {
			p.tags.forEach((tag) => {
				counts.set(tag, (counts.get(tag) || 0) + 1)
			})
		})
		return counts
	}, [allProjects])

	const allTags = useMemo(() => Array.from(tagCounts.keys()), [tagCounts])

	// 현재 필터가 적용된 프로젝트 목록 (모달 내비게이션도 이 목록을 따른다)
	const visibleProjects = useMemo(
		() => (activeTag ? allProjects.filter((p) => p.tags.includes(activeTag)) : allProjects),
		[activeTag, allProjects]
	)

	const openModal = (projectId) => {
		const index = visibleProjects.findIndex((p) => p.id === projectId)
		if (index === -1) return
		setCurrentIndex(index)
		setSelectedProject(visibleProjects[index])
	}

	const closeModal = () => {
		setSelectedProject(null)
	}

	// 필터 바(#projects) 상단으로 스크롤해 결과와 필터를 함께 보여준다
	const scrollToFilter = () => {
		const el = document.getElementById('projects')
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	const selectTag = (tag) => {
		setActiveTag((prev) => (prev === tag ? null : tag))
		scrollToFilter()
	}

	const resetFilter = () => {
		setActiveTag(null)
		scrollToFilter()
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex < visibleProjects.length - 1) {
				const nextIndex = prevIndex + 1
				setSelectedProject(visibleProjects[nextIndex])
				return nextIndex
			}
			return prevIndex
		})
	}

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex > 0) {
				const prevIndexNew = prevIndex - 1
				setSelectedProject(visibleProjects[prevIndexNew])
				return prevIndexNew
			}
			return prevIndex
		})
	}

	const renderProjectCard = (project, index) => (
		<motion.div
			key={project.id}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.08 }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.98 }}
			onClick={() => openModal(project.id)}
			className="bg-navy-800/50 border border-white/10 p-6 rounded-lg cursor-pointer transition-all hover:border-white/30 active:border-white/40 active:bg-navy-800/70 flex flex-col h-full min-h-[240px] touch-manipulation"
		>
			<h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
			<p className="text-sm text-blue-400 mb-3">{project.subtitle}</p>
			<p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
			<div className="mt-auto">
				<div className="text-xs text-gray-400 mb-4">{project.metrics}</div>
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => {
						const isActive = tag === activeTag
						return (
							<button
								key={tag}
								type="button"
								onClick={(e) => {
									e.stopPropagation()
									selectTag(tag)
								}}
								className={`px-3 py-1 text-xs rounded-full transition-colors touch-manipulation ${
									isActive
										? 'bg-blue-500 text-white'
										: 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
								}`}
							>
								#{tag}
							</button>
						)
					})}
				</div>
			</div>
		</motion.div>
	)

	// 카드 목록을 공통 2열 그리드로 렌더링 (칸을 꽉 채우는 원래 크기)
	const renderGrid = (list) => (
		<div className={GRID_CLASS}>
			{list.map((project, index) => renderProjectCard(project, index))}
		</div>
	)

	// 필터 바: 프로젝트 영역 상단. 태그 선택 시 이 위치로 스크롤된다.
	// (조상의 overflow-x:hidden 때문에 position:sticky가 동작하지 않아 in-flow로 배치)
	const filterBar = (
		<div id="projects" className="scroll-mt-[96px] px-4 py-6 border-b border-white/10 bg-navy-900/60">
			<p className="text-center text-sm text-gray-400 mb-3">어떤 경험이 궁금하세요?</p>
			<div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
				<button
					type="button"
					onClick={resetFilter}
					className={`px-3.5 py-1.5 text-xs md:text-sm rounded-full border transition-colors touch-manipulation ${
						activeTag === null
							? 'bg-white text-navy-900 border-white font-semibold'
							: 'bg-white/5 text-gray-300 border-white/15 hover:bg-white/10 hover:text-white'
					}`}
				>
					전체 {allProjects.length}
				</button>
				{allTags.map((tag) => {
					const isActive = tag === activeTag
					return (
						<button
							key={tag}
							type="button"
							onClick={() => selectTag(tag)}
							className={`px-3.5 py-1.5 text-xs md:text-sm rounded-full border transition-colors touch-manipulation ${
								isActive
									? 'bg-blue-500 text-white border-blue-500 font-semibold'
									: 'bg-white/5 text-gray-300 border-white/15 hover:bg-white/10 hover:text-white'
							}`}
						>
							#{tag} {tagCounts.get(tag)}
						</button>
					)
				})}
			</div>
		</div>
	)

	return (
		<div className="relative">
			{filterBar}

			{activeTag ? (
				// 필터가 적용된 상태: 조건에 맞는 카드만 단일 그리드로, 모두 동일한 크기로 표시
				<section
					className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-gradient-to-b from-navy-900 to-black"
				>
					<motion.div
						key={activeTag}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="w-full max-w-6xl"
					>
						<h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-3">#{activeTag}</h2>
						<p className="text-sm text-gray-400 text-center mb-10 md:mb-12">
							{visibleProjects.length}개의 프로젝트
						</p>
						{renderGrid(visibleProjects)}
					</motion.div>
				</section>
			) : (
				// 전체 보기: 기존 섹션(시적 제목)·그룹 구조 유지, 카드 규격만 통일
				SECTIONS.map((section) => (
					<section
						key={section.id}
						className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-gradient-to-b from-navy-900 to-black"
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

							{section.projects.some((p) => p.group) ? (
								<div className="space-y-10">
									{Array.from(new Set(section.projects.map((p) => p.group))).map((groupName) => (
										<div key={groupName}>
											<h3 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
												{groupName}
											</h3>
											{renderGrid(section.projects.filter((p) => p.group === groupName))}
										</div>
									))}
								</div>
							) : (
								renderGrid(section.projects)
							)}
						</motion.div>
					</section>
				))
			)}

			{selectedProject && (
				<ProjectModal
					selectedProject={selectedProject}
					currentIndex={currentIndex}
					totalProjects={visibleProjects.length}
					onClose={closeModal}
					onNext={handleNext}
					onPrev={handlePrev}
				/>
			)}
		</div>
	)
}
