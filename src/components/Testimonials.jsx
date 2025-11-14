import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const TESTIMONIALS = [
	{
		quote: '고객의 불편을 누구보다 빠르게 발견하고 해결책을 제시해요',
		author: 'Mari',
		role: '팀원, CX Manager',
	},
	{
		quote: '체계화의 달인. 없던 프로세스도 만들어내죠',
		author: 'Esther',
		role: '동료, Product Owner',
	},
	{
		quote: '쿠를 보면, 업무 본질을 향한 열정이 남다르다고 느껴집니다',
		author: '동료',
		role: '동료, Content Manager',
	},
	{
		quote: '같은 CXM으로써 솔선수범 책임감을 보여주셔서 동기부여 받고 있습니다',
		author: 'CX 팀원',
		role: '',
	},
	{
		quote: '[동료 평가 내용 5]',
		author: '동료 이름',
		role: '직책',
	},
	{
		quote: '[동료 평가 내용 6]',
		author: '동료 이름',
		role: '직책',
	},
]

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const total = TESTIMONIALS.length
	const intervalRef = useRef(null)

	const next = useMemo(
		() => () => setCurrentIndex((prev) => (prev + 1) % total),
		[total],
	)
	const goTo = (idx) => setCurrentIndex(idx)

	useEffect(() => {
		if (isPaused) return
		intervalRef.current = setInterval(() => {
			next()
		}, 4500)
		return () => clearInterval(intervalRef.current)
	}, [isPaused, next])

	const transitionProps = {
		initial: { opacity: 0, x: 40 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -40 },
		transition: { duration: 0.5, ease: 'easeOut' },
	}

	return (
		<section id="testimonials" className="min-h-screen snap-start bg-white pt-20 md:pt-24">
			<div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl flex-col px-8">
				<header className="flex min-h-[30vh] flex-col items-center justify-end text-center">
					<motion.h2
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-20%' }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className="font-serif text-3xl font-bold text-gray-900 md:text-4xl"
					>
						Qoo는 이런 사람입니다
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-20%' }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
						className="mt-2 text-lg text-gray-600 md:mb-16 md:text-xl"
					>
						동료들이 말하는 Qoo
					</motion.p>
				</header>

				<div className="flex flex-1 items-center justify-center">
					<div
						onMouseEnter={() => setIsPaused(true)}
						onMouseLeave={() => setIsPaused(false)}
						className="relative mx-auto w-full select-none text-center"
					>
						<div className="min-h-[220px] md:min-h-[260px] lg:min-h-[300px]">
							<AnimatePresence mode="wait" initial={false}>
								<motion.div key={currentIndex} {...transitionProps}>
									<p className="mb-6 font-serif text-2xl leading-relaxed text-gray-900 md:text-3xl lg:text-4xl">
										&quot;{TESTIMONIALS[currentIndex].quote}
									</p>
									<div className="text-lg text-gray-600 md:text-xl">
										— {TESTIMONIALS[currentIndex].author}
										{TESTIMONIALS[currentIndex].role ? `, ${TESTIMONIALS[currentIndex].role}` : ''}
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center gap-2 pb-10">
					{TESTIMONIALS.map((_, i) => (
						<button
							key={i}
							onClick={() => goTo(i)}
							aria-label={`Go to testimonial ${i + 1}`}
							className={`h-2.5 w-2.5 rounded-full transition-all ${
								currentIndex === i ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}


