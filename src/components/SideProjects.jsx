import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import creviceImage from '../assets/sideproject/crevice.png'
import tableauImage from '../assets/sideproject/tableau.png'

export default function SideProjects() {
	const [showCreviceModal, setShowCreviceModal] = useState(false)
	const [showTableauModal, setShowTableauModal] = useState(false)

	// 모달이 열릴 때 body 스크롤 잠금
	useEffect(() => {
		if (showCreviceModal || showTableauModal) {
			const prevOverflow = document.body.style.overflow
			const prevTouch = document.body.style.touchAction
			const prevPaddingRight = document.body.style.paddingRight

			document.body.style.overflow = 'hidden'
			document.body.style.touchAction = 'none'

			const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
			if (scrollBarWidth > 0) {
				document.body.style.paddingRight = `${scrollBarWidth}px`
			}

			return () => {
				document.body.style.overflow = prevOverflow || ''
				document.body.style.touchAction = prevTouch || ''
				document.body.style.paddingRight = prevPaddingRight || ''
			}
		}
	}, [showCreviceModal, showTableauModal])

	return (
		<>
			<section
				id="side-projects"
				className="min-h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-b from-black to-navy-900 px-8 pt-20 md:pt-24 pb-12"
			>
				<div className="mx-auto w-full max-w-4xl">
					<motion.h2
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-20%' }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className="text-4xl md:text-5xl font-serif text-center text-white mb-12 md:mb-16"
					>
						More
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* 태블로 부트캠프 */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-lg p-6"
						>
							<div className="flex items-start gap-4">
								<span className="text-purple-400 text-2xl flex-shrink-0">📊</span>
								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-3 flex-wrap">
										<h3 className="text-base font-semibold text-purple-400">Tableau Bootcamp 28기</h3>
										<span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
											Learning
										</span>
									</div>
									<div className="space-y-2 text-sm text-gray-300">
										<p className="leading-relaxed">
											<span className="text-gray-400">커리큘럼:</span> 데이터 시각화, Tableau 대시보드 제작, 데이터 분석 기초/고급, Tableau Prep
										</p>
										<p className="leading-relaxed">
											<span className="text-gray-400">진행:</span> 2주간 10회차 · Slack 기반 자율 학습 · 퀘스트 인증
										</p>
										<button
											onClick={() => setShowTableauModal(true)}
											className="text-purple-400 font-medium mt-3 hover:text-purple-300 transition-colors inline-block cursor-pointer"
										>
											수료증 취득 →
										</button>
									</div>
								</div>
							</div>
						</motion.div>

						{/* 성남여성인력개발센터 */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-lg p-6"
						>
							<div className="flex items-start gap-4">
								<span className="text-emerald-400 text-2xl flex-shrink-0">🎓</span>
								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-3 flex-wrap">
										<h3 className="text-base font-semibold text-emerald-400">직장 내 학습동아리, Crevice</h3>
										<span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
											Activity
										</span>
									</div>
									<div className="space-y-2 text-sm text-gray-300">
										<p className="leading-relaxed break-words">
											<span className="text-gray-400">역할:</span> 동아리장 · Project Manager
										</p>
										<p className="leading-relaxed break-words">
											<span className="text-gray-400">선정:</span> 성남여성인력개발센터 '지원 동아리' 프로그램 선정 (5팀 중 1팀)
										</p>
										<p className="leading-relaxed break-words">
											<span className="text-gray-400">활동:</span> 6개월간 AI활용 프로젝트 기획·개발·협업
										</p>
										<button
											onClick={() => setShowCreviceModal(true)}
											className="text-emerald-400 font-medium mt-3 hover:text-emerald-300 transition-colors inline-block cursor-pointer"
										>
											프로젝트 보기 →
										</button>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* 이미지 갤러리 모달 컴포넌트 */}
			<ImageModal 
				isOpen={showCreviceModal} 
				onClose={() => setShowCreviceModal(false)}
				title="직장 내 학습동아리, Crevice"
				color="emerald"
				images={[
					{ src: creviceImage, alt: '직장 내 학습동아리, Crevice', caption: 'Crevice 프로젝트' },
				]}
			/>

			<ImageModal 
				isOpen={showTableauModal} 
				onClose={() => setShowTableauModal(false)}
				title="Tableau Bootcamp 28기"
				color="purple"
				images={[
					{ src: tableauImage, alt: 'Tableau Bootcamp 28기', caption: 'Tableau Bootcamp 수료증' },
				]}
			/>
		</>
	)
}

// 이미지 갤러리 모달 컴포넌트
function ImageModal({ isOpen, onClose, title, color, images }) {
	const colorClasses = {
		emerald: {
			bg: 'bg-emerald-500/10',
			border: 'border-emerald-500/30',
			text: 'text-emerald-400',
			badge: 'bg-emerald-400/10 text-emerald-400'
		},
		purple: {
			bg: 'bg-purple-500/10',
			border: 'border-purple-500/30',
			text: 'text-purple-400',
			badge: 'bg-purple-400/10 text-purple-400'
		}
	}

	const colors = colorClasses[color] || colorClasses.emerald

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
					className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-4"
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="relative bg-navy-900 border border-white/20 rounded-xl p-4 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-hide mx-0 md:mx-20"
						style={{
							WebkitOverflowScrolling: 'touch',
							overscrollBehavior: 'contain',
							wordBreak: 'keep-all',
							overflowWrap: 'break-word',
						}}
					>
						{/* X 닫기 버튼 */}
						<button
							onClick={onClose}
							className="absolute top-2 right-2 md:top-4 md:right-4 z-10 p-2 rounded-full bg-navy-900/80 hover:bg-navy-900 active:bg-navy-800 text-white/70 hover:text-white active:text-white transition-colors touch-manipulation"
							aria-label="모달 닫기"
						>
							<X className="w-5 h-5" />
						</button>

						{/* Header */}
						<div className="flex justify-center items-center mb-4 md:mb-6 pb-3 md:pb-4 border-b border-white/10">
							<div className="text-center w-full px-2">
								<div className="text-xs md:text-sm text-gray-400 mb-1">Side Project</div>
								<div className={`text-[10px] md:text-sm font-semibold ${colors.badge} px-1.5 md:px-3 py-0.5 md:py-1 rounded-full inline-block max-w-full break-words`}>
									{title}
								</div>
							</div>
						</div>

						{/* 이미지 정가운데 배치 */}
						{images.length > 0 ? (
							<div className="flex items-center justify-center min-h-[400px] py-8">
								{images.map((image, index) => {
									const isPdf = typeof image.src === 'string' && (image.src.toLowerCase().endsWith('.pdf') || image.src.toLowerCase().includes('.pdf'))
									return isPdf ? (
										<iframe
											key={index}
											src={image.src}
											title={image.alt}
											className="w-full max-w-4xl border-0 rounded-lg"
											style={{ minHeight: '600px', height: '70vh' }}
										/>
									) : (
										<img
											key={index}
											src={image.src}
											alt={image.alt}
											className="max-w-full max-h-[70vh] object-contain object-center rounded-lg"
										/>
									)
								})}
							</div>
						) : (
							<div className={`${colors.bg} ${colors.border} rounded-lg p-8 text-center`}>
								<p className="text-gray-400 text-sm">이미지 준비 중입니다.</p>
							</div>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

