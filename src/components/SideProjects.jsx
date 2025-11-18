import { motion } from 'framer-motion'

export default function SideProjects() {
	return (
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
									<p className="text-purple-400 font-medium mt-3">수료증 취득</p>
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
									<a
										href="https://www.inviastory.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-emerald-400 font-medium mt-3 hover:text-emerald-300 transition-colors inline-block"
									>
										프로젝트 보기 →
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

