import { motion } from 'framer-motion'

const TIMELINE = [
	{ range: '2023 - Present', role: 'CX Manager', company: 'goorm' },
	{ range: '2021 - 2023', role: 'Platform Manager', company: 'alookso' },
	{ range: '2020 - 2021', role: 'Service Planning', company: 'Pickket' },
]



export default function About() {
	return (
		<section
			id="about"
			className="min-h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-b from-black to-navy-900 px-8 pt-20 md:pt-24 pb-12"
		>
			<div className="mx-auto w-full max-w-4xl text-center">
				<motion.h2
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-20%' }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className="text-4xl md:text-5xl font-serif text-center text-white mb-12 md:mb-16"
				>
					About
				</motion.h2>

				<motion.ul
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: '-15%' }}
					variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
					className="mx-auto mb-12 max-w-3xl text-left text-gray-300 md:mb-16"
				>
					{TIMELINE.map((t) => (
						<motion.li
							key={t.range}
							variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
							className="py-1 text-sm md:text-base"
						>
							<span className="text-white/90">{t.range}</span>
							<span className="px-2 text-white/40">•</span>
							<span className="text-white/80">{t.role}</span>
							<span className="px-1 text-white/40">@</span>
							<span className="text-white/80">{t.company}</span>
						</motion.li>
					))}
				</motion.ul>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-15%' }}
					transition={{ duration: 0.6 }}
					className="mx-auto mb-6 max-w-3xl md:mb-8"
				>
					<p className="mb-3 font-serif text-xl text-white md:text-2xl">
						&ldquo;작은 벽돌부터 옮겨야 거대한 도시를 만들 수 있어요&rdquo;
					</p>
					<p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base px-2">
						고객과 프로덕트, 고객과 조직을 잇는 커뮤니케이션 허브.{' '}
						<span className="hidden md:inline"><br /></span>
						문의 응대를 넘어 고객 관점에서 프로덕트를 개선하고,{' '}
						<span className="hidden md:inline"><br /></span>
						고객의 목소리를 기반으로 진화의 방향을 잡습니다.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-15%' }}
					transition={{ duration: 0.6, delay: 0.05 }}
					className="mx-auto w-full max-w-2xl"
				>
					<div className="rounded-xl border border-white/20 bg-gradient-to-br from-navy-800/50 to-navy-900/50 p-4 transition-transform duration-300 hover:scale-105 md:p-6">
						<h3 className="text-lg font-bold text-white md:text-xl">고객의 목소리로 프로덕트를 개선하는 CX 매니저</h3>
						<p className="">goorm Blog Interview</p>
						<div className="mt-4">
							<a
								href="https://blog.goorm.io/goormeeinterview_cxmanager/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center rounded-lg bg-white/90 px-4 py-2 text-xs font-semibold text-navy-900 transition-colors hover:bg-white md:text-sm"
							>
								인터뷰 읽기 →
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}