import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageGallery({ images }) {
	const scrollRef = useRef(null)
	const [activePage, setActivePage] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(2)
	const pageRefs = useRef([])

	// 모바일에서는 1개씩, 데스크톱에서는 2개씩 표시
	useEffect(() => {
		const updateItemsPerPage = () => {
			setItemsPerPage(window.innerWidth < 768 ? 1 : 2)
		}
		
		updateItemsPerPage()
		window.addEventListener('resize', updateItemsPerPage)
		return () => window.removeEventListener('resize', updateItemsPerPage)
	}, [])

	const totalPages = Math.ceil(images.length / itemsPerPage)

	// pageRefs 초기화
	useEffect(() => {
		pageRefs.current = Array(totalPages).fill(null)
	}, [totalPages, itemsPerPage])

	// 스크롤 이벤트 핸들러 - 각 이미지 요소의 실제 위치 기반으로 페이지 감지
	const handleScroll = useRef(null)
	
	useEffect(() => {
		if (!scrollRef.current) return
		
		let ticking = false
		
		const updateActivePage = () => {
			if (!scrollRef.current) return
			
			const scrollLeft = scrollRef.current.scrollLeft
			const containerRect = scrollRef.current.getBoundingClientRect()
			const imageElements = scrollRef.current.querySelectorAll('[data-page]')
			
			// 각 페이지의 첫 번째 이미지 위치를 확인하여 현재 페이지 찾기
			let closestPage = 0
			let minDistance = Infinity
			
			for (let i = 0; i < totalPages; i++) {
				const firstImageIndex = i * itemsPerPage
				if (imageElements[firstImageIndex]) {
					const imageRect = imageElements[firstImageIndex].getBoundingClientRect()
					// 컨테이너 왼쪽 가장자리와 이미지 왼쪽 가장자리 사이의 거리
					const distance = Math.abs(imageRect.left - containerRect.left)
					
					// 더 가까운 페이지로 업데이트
					if (distance < minDistance) {
						minDistance = distance
						closestPage = i
					}
				}
			}
			
			// 마지막 페이지 체크: 스크롤이 끝에 가까우면 마지막 페이지로 설정
			const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.offsetWidth
			if (maxScroll > 0 && scrollLeft >= maxScroll - 20) { // 20px 여유
				closestPage = totalPages - 1
			}
			
			const clampedPage = Math.max(0, Math.min(closestPage, totalPages - 1))
			setActivePage(clampedPage)
			ticking = false
		}
		
		handleScroll.current = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateActivePage)
				ticking = true
			}
		}
		
		const scrollElement = scrollRef.current
		scrollElement.addEventListener('scroll', handleScroll.current, { passive: true })
		
		return () => {
			if (handleScroll.current) {
				scrollElement.removeEventListener('scroll', handleScroll.current)
			}
		}
	}, [totalPages, itemsPerPage])

	// IntersectionObserver를 사용하여 페이지 감지 (보조)
	useEffect(() => {
		if (!scrollRef.current) return
		
		let observers = []
		
		// refs가 모두 설정될 때까지 약간의 지연
		const timeoutId = setTimeout(() => {
			const validRefs = pageRefs.current.filter(ref => ref !== null)
			if (validRefs.length === 0) return

			const observerOptions = {
				root: scrollRef.current,
				rootMargin: '-10% 0px -10% 0px', // 더 넓은 영역에서 감지
				threshold: [0, 0.1, 0.5, 1.0], // 여러 threshold로 더 정확한 감지
			}

			observers = pageRefs.current.map((pageRef, pageIndex) => {
				if (!pageRef) return null

				const observer = new IntersectionObserver((entries) => {
					entries.forEach((entry) => {
						// intersectionRatio가 높을수록 더 확실하게 보이는 페이지
						if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
							setActivePage(pageIndex)
						}
					})
				}, observerOptions)

				observer.observe(pageRef)
				return observer
			})
		}, 150)

		return () => {
			clearTimeout(timeoutId)
			observers.forEach((observer) => {
				if (observer) observer.disconnect()
			})
		}
	}, [totalPages, itemsPerPage, images.length])

	const scrollToPage = (page) => {
		if (!scrollRef.current) return
		
		// 해당 페이지의 첫 번째 이미지 요소 찾기
		const firstImageIndex = page * itemsPerPage
		const imageElements = scrollRef.current.querySelectorAll('[data-page]')
		
		if (imageElements[firstImageIndex]) {
			const targetElement = imageElements[firstImageIndex]
			// 부모 컨테이너 내에서의 상대 위치 계산
			const container = scrollRef.current
			const containerScrollLeft = container.scrollLeft
			const containerOffsetLeft = container.offsetLeft
			const targetOffsetLeft = targetElement.offsetLeft
			
			// 스크롤할 위치 = 타겟 요소의 offsetLeft - 컨테이너의 padding
			const targetScroll = targetOffsetLeft - containerOffsetLeft + containerScrollLeft
			
			container.scrollTo({
				left: targetScroll,
				behavior: 'smooth',
			})
		} else {
			// 폴백: 컨테이너 너비 기반 계산
			const containerWidth = scrollRef.current.offsetWidth
			const targetScroll = containerWidth * page
			scrollRef.current.scrollTo({
				left: targetScroll,
				behavior: 'smooth',
			})
		}
		
		// activePage 즉시 업데이트
		setActivePage(page)
	}

	const goToPrev = () => {
		if (activePage > 0) {
			scrollToPage(activePage - 1)
		}
	}

	const goToNext = () => {
		if (activePage < totalPages - 1) {
			scrollToPage(activePage + 1)
		}
	}

	return (
		<div className="space-y-3 mb-6">
			<div className="relative">
				{/* 왼쪽 화살표 */}
				{activePage > 0 && (
					<button
						onClick={goToPrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-navy-900/80 hover:bg-navy-900 rounded-full text-white/70 hover:text-white transition-colors"
						aria-label="이전 페이지"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
				)}

				{/* 오른쪽 화살표 */}
				{activePage < totalPages - 1 && (
					<button
						onClick={goToNext}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-navy-900/80 hover:bg-navy-900 rounded-full text-white/70 hover:text-white transition-colors"
						aria-label="다음 페이지"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				)}

				<div
					ref={scrollRef}
					className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
				>
					<div className="flex gap-3 pb-2 px-1">
						{images.map((image, index) => {
							// 페이지 그룹 계산: 2개씩 묶어서 페이지 단위로 처리
							const pageIndex = Math.floor(index / itemsPerPage)
							const isPageStart = index % itemsPerPage === 0
							
							// 페이지 시작점에 ref 할당
							const pageRef = isPageStart ? (el) => {
								if (el) {
									pageRefs.current[pageIndex] = el
								}
							} : null
							
							return (
								<div 
									key={index} 
									ref={pageRef}
									className={`flex-shrink-0 w-full md:w-[calc(50%-6px)] ${isPageStart ? 'snap-start' : ''}`}
									data-page={pageIndex}
								>
									<div className="relative bg-navy-900/50 rounded-lg overflow-hidden" style={{ height: '300px' }}>
										<img
											src={image.src}
											alt={image.alt}
											className="w-full h-full object-contain object-center opacity-80 hover:opacity-100 transition-opacity"
										/>
									</div>
									<p className="text-xs text-gray-500 mt-2 text-center">{image.caption}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>

			{/* Dot 인디케이터 */}
			<div className="flex justify-center gap-2">
				{Array.from({ length: totalPages }).map((_, index) => (
					<button
						key={index}
						onClick={() => scrollToPage(index)}
						className={`transition-all duration-300 rounded-full ${
							index === activePage ? 'w-6 h-2 bg-blue-500' : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
						}`}
						aria-label={`페이지 ${index + 1}로 이동`}
					/>
				))}
			</div>
		</div>
	)
}