import { useEffect, useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const TESTIMONIALS = [
	{
		quote: '지금 회사에 가장 필요하고, 누군가는 해야 하는 중요한 역할을 맡아주고 있어요',
		role: 'Communication Group Leader'
	},
	{
		quote: '고객의 불편을 누구보다 빠르게 발견하고 해결책을 제시해요',
		role: 'CX Manager'
	},
	{
		quote: '체계화의 달인. 없던 프로세스도 만들어내죠',
		role: 'Product Owner'
	},
	{
		quote: '쿠를 보면, 업무 본질을 향한 열정이 남다르다고 느껴집니다',
		role: 'Content Manager'
	},
	{
		quote: '같은 CXM으로서 솔선수범 책임감을 보여주셔서 동기부여 받고 있습니다',
		role: 'CX Manager'
	},
	{
		quote: '기술·운영·사용자를 동시에 이해하는 CXM',
		role: 'Full Stack Developer'
	},
]

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const total = TESTIMONIALS.length
	const intervalRef = useRef(null)
	const sectionRef = useRef(null)
	const swipeStartX = useRef(null)
	const swipeThreshold = 50 // 최소 스와이프 거리
	const isScrollingRef = useRef(false) // 스크롤 중 플래그

	const pauseAndResume = useCallback(() => {
		setIsPaused(true)
		// 3초 후 자동 슬라이드 재개
		setTimeout(() => setIsPaused(false), 3000)
	}, [])

	const next = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % total)
		pauseAndResume()
	}, [total, pauseAndResume])

	const prev = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + total) % total)
		pauseAndResume()
	}, [total, pauseAndResume])

	const goTo = (idx) => {
		setCurrentIndex(idx)
		pauseAndResume()
	}

	useEffect(() => {
		if (isPaused) return
		intervalRef.current = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % total)
		}, 4500)
		return () => clearInterval(intervalRef.current)
	}, [isPaused, total])

	// 좌우 스크롤/스와이프로 슬라이드 전환
	useEffect(() => {
		const handleWheel = (e) => {
			// 좌우 스크롤만 감지 (상하 스크롤은 무시)
			if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
				// 이미 스크롤 중이면 무시 (한 번의 제스처에 한 번만 전환)
				if (isScrollingRef.current) {
					return
				}

				if (e.deltaX > 0) {
					// 오른쪽 스크롤: 다음
					e.preventDefault()
					isScrollingRef.current = true
					next()
					setTimeout(() => {
						isScrollingRef.current = false
					}, 500)
				} else if (e.deltaX < 0) {
					// 왼쪽 스크롤: 이전
					e.preventDefault()
					isScrollingRef.current = true
					prev()
					setTimeout(() => {
						isScrollingRef.current = false
					}, 500)
				}
			}
		}

		const handleTouchStart = (e) => {
			swipeStartX.current = e.touches[0].clientX
		}

		const handleTouchMove = (e) => {
			// 터치 이동 중에는 아무것도 하지 않음
		}

		const handleTouchEnd = (e) => {
			if (swipeStartX.current === null) return

			const swipeEndX = e.changedTouches[0].clientX
			const swipeDistance = swipeStartX.current - swipeEndX

			if (Math.abs(swipeDistance) > swipeThreshold) {
				if (swipeDistance > 0) {
					// 오른쪽 스와이프: 다음
					next()
				} else {
					// 왼쪽 스와이프: 이전
					prev()
				}
			}

			swipeStartX.current = null
		}

		const section = sectionRef.current
		if (section) {
			section.addEventListener('wheel', handleWheel, { passive: false })
			section.addEventListener('touchstart', handleTouchStart, { passive: true })
			section.addEventListener('touchmove', handleTouchMove, { passive: true })
			section.addEventListener('touchend', handleTouchEnd, { passive: true })
		}

		return () => {
			if (section) {
				section.removeEventListener('wheel', handleWheel)
				section.removeEventListener('touchstart', handleTouchStart)
				section.removeEventListener('touchmove', handleTouchMove)
				section.removeEventListener('touchend', handleTouchEnd)
			}
		}
	}, [next, prev])

	const transitionProps = {
		initial: { opacity: 0, x: 40 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -40 },
		transition: { duration: 0.5, ease: 'easeOut' },
	}

	return (
		<section ref={sectionRef} id="testimonials" className="min-h-screen snap-start bg-white pt-20 md:pt-24">
			<div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl flex-col px-8">
				<header className="flex min-h-[30vh] flex-col items-center justify-end text-center">
					<motion.h2
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-20%' }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className="font-serif text-3xl font-bold text-gray-900 md:text-4xl"
					>
						Who Qoo Is
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-20%' }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
						className="mt-2 text-lg text-gray-600 md:mb-16 md:text-xl"
					>
						함께 일한 사람들이 말하는 Qoo
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
										&quot;{TESTIMONIALS[currentIndex].quote}&quot;
									</p>
									<div className="text-lg text-gray-600 md:text-xl">
										— 
										{TESTIMONIALS[currentIndex].role ? ` ${TESTIMONIALS[currentIndex].role}` : ''}
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


