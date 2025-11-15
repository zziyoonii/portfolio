import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function Hero({ showArrow = true }) {
	const { focusX, focusY, zoom } = useMemo(() => {
		try {
			const params = new URLSearchParams(window.location.search)
			const x = Math.min(100, Math.max(0, Number(params.get('x') ?? 50)))
			const y = Math.min(100, Math.max(0, Number(params.get('y') ?? 50)))
			const z = Math.min(2, Math.max(1, Number(params.get('zoom') ?? 1)))
			return { focusX: x, focusY: y, zoom: z }
		} catch {
			return { focusX: 50, focusY: 50, zoom: 1 }
		}
	}, [])

	return (
		<section
			id="hero"
			className="min-h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-b from-navy-900 to-black"
		>
			<div className="container mx-auto max-w-6xl px-4 text-center">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className="flex flex-col items-center"
				>
					<motion.img
						src="/profile2.jpg?v=2"
						srcSet="/profile2.jpg?v=2 1x, /profile2.jpg?v=2 2x"
						loading="eager"
						decoding="async"
						referrerPolicy="no-referrer"
						onError={(e) => {
							e.currentTarget.src = null
						}}
						alt="김지윤 프로필"
						width={256}
						height={256}
						sizes="(min-width: 768px) 320px, 256px"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
						className="h-64 w-64 rounded-full object-cover shadow-2xl ring-4 ring-white/10 transition-all duration-300 hover:ring-white/20 md:h-80 md:w-80"
						style={{
							objectPosition: `${focusX}% ${focusY}%`,
							transform: `translateZ(0) scale(${zoom})`,
							willChange: 'transform',
						}}
					/>

					<motion.h1
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
						className="mt-8 text-5xl font-bold text-white md:text-6xl"
					>
						김지윤
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: 0.16 }}
						className="mt-3 text-xl text-gray-300 md:text-2xl"
					>
						경험을 읽고, 기술로 구현합니다.
					</motion.p>
				</motion.div>
			</div>

			{showArrow && (
				<motion.a
					href="#keywords"
					aria-label="다음 섹션으로 스크롤"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white"
				>
					<motion.svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-7 w-7"
						animate={{ y: [0, 6, 0] }}
						transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
					>
						<path d="M12 16a1 1 0 0 1-.707-.293l-6-6a1 1 0 1 1 1.414-1.414L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6A1 1 0 0 1 12 16z" />
					</motion.svg>
				</motion.a>
			)}
		</section>
	)
}


