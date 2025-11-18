import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageGallery({ images, customItems = [], onButtonClick }) {
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

	const allItems = [...customItems, ...images]
	// 커스텀 아이템은 각각 하나의 페이지, 이미지는 itemsPerPage 개씩 묶어서 페이지
	const customCount = customItems.length
	const imagePages = Math.ceil(images.length / itemsPerPage)
	const totalPages = customCount + imagePages

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
			const elements = scrollRef.current.querySelectorAll('[data-page]')
			
			// 각 페이지의 첫 번째 요소 위치를 확인하여 현재 페이지 찾기
			let closestPage = 0
			let minDistance = Infinity
			
			// 각 페이지 번호에 대해 해당 페이지의 첫 번째 요소 찾기
			for (let pageNum = 0; pageNum < totalPages; pageNum++) {
				// 해당 페이지 번호를 가진 첫 번째 요소 찾기
				for (let i = 0; i < elements.length; i++) {
					const elementPage = parseInt(elements[i].getAttribute('data-page'))
					if (elementPage === pageNum) {
						const elementRect = elements[i].getBoundingClientRect()
						// 컨테이너 왼쪽 가장자리와 요소 왼쪽 가장자리 사이의 거리
						const distance = Math.abs(elementRect.left - containerRect.left)
						
						// 더 가까운 페이지로 업데이트
						if (distance < minDistance) {
							minDistance = distance
							closestPage = pageNum
						}
						break // 해당 페이지의 첫 번째 요소만 확인
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
	}, [totalPages, itemsPerPage, allItems.length])

	const scrollToPage = (page) => {
		if (!scrollRef.current) return
		
		// 해당 페이지의 첫 번째 요소 찾기 (커스텀 아이템 또는 이미지)
		const elements = scrollRef.current.querySelectorAll('[data-page]')
		let targetElement = null
		
		// data-page 속성이 page와 일치하는 첫 번째 요소 찾기
		for (let i = 0; i < elements.length; i++) {
			const elementPage = parseInt(elements[i].getAttribute('data-page'))
			if (elementPage === page) {
				targetElement = elements[i]
				break
			}
		}
		
		if (targetElement) {
			const container = scrollRef.current
			if (!container) return
			
			// 타겟 요소의 부모 컨테이너 내에서의 상대 위치 계산
			const targetRect = targetElement.getBoundingClientRect()
			const containerRect = container.getBoundingClientRect()
			
			// 스크롤할 위치 = 현재 스크롤 위치 + (타겟 요소의 왼쪽 위치 - 컨테이너의 왼쪽 위치)
			const currentScroll = container.scrollLeft
			const targetScroll = currentScroll + (targetRect.left - containerRect.left)
			
			// requestAnimationFrame을 사용하여 스크롤이 확실히 실행되도록 함
			requestAnimationFrame(() => {
				container.scrollTo({
					left: targetScroll,
					behavior: 'smooth',
				})
			})
		} else {
			// 폴백: 컨테이너 너비 기반 계산
			const containerWidth = scrollRef.current.offsetWidth
			const targetScroll = containerWidth * page
			requestAnimationFrame(() => {
				scrollRef.current.scrollTo({
					left: targetScroll,
					behavior: 'smooth',
				})
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
						onClick={(e) => {
							e.stopPropagation()
							goToPrev()
							// 모달의 플로팅 버튼 표시를 위한 콜백 호출
							if (onButtonClick) {
								onButtonClick()
							}
							// 커스텀 이벤트 발생 (모달에서 감지)
							window.dispatchEvent(new CustomEvent('imageGalleryButtonClick'))
						}}
						onMouseDown={(e) => {
							e.stopPropagation()
							// preventDefault 제거 - 클릭 이벤트가 정상 작동하도록
						}}
						onTouchStart={(e) => {
							e.stopPropagation()
						}}
						className="absolute left-2 top-1/2 -translate-y-1/2 z-[50] p-2 bg-navy-900/80 hover:bg-navy-900 rounded-full text-white/70 hover:text-white transition-colors pointer-events-auto cursor-pointer"
						style={{ pointerEvents: 'auto', zIndex: 50 }}
						aria-label="이전 페이지"
					>
						<ChevronLeft className="w-5 h-5 pointer-events-none" />
					</button>
				)}

				{/* 오른쪽 화살표 */}
				{activePage < totalPages - 1 && (
					<button
						onClick={(e) => {
							e.stopPropagation()
							goToNext()
							// 모달의 플로팅 버튼 표시를 위한 콜백 호출
							if (onButtonClick) {
								onButtonClick()
							}
							// 커스텀 이벤트 발생 (모달에서 감지)
							window.dispatchEvent(new CustomEvent('imageGalleryButtonClick'))
						}}
						onMouseDown={(e) => {
							e.stopPropagation()
							// preventDefault 제거 - 클릭 이벤트가 정상 작동하도록
						}}
						onTouchStart={(e) => {
							e.stopPropagation()
						}}
						className="absolute right-2 top-1/2 -translate-y-1/2 z-[50] p-2 bg-navy-900/80 hover:bg-navy-900 rounded-full text-white/70 hover:text-white transition-colors pointer-events-auto cursor-pointer"
						style={{ pointerEvents: 'auto', zIndex: 50 }}
						aria-label="다음 페이지"
					>
						<ChevronRight className="w-5 h-5 pointer-events-none" />
					</button>
				)}

				<div
					ref={scrollRef}
					className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
				>
					<div className="flex pb-2">
						{allItems.map((item, index) => {
							// 커스텀 컴포넌트인지 이미지인지 확인
							const isCustom = item.component || typeof item === 'function'
							
							// 커스텀 아이템은 전체 너비를 차지하므로 하나의 페이지로 처리
							// 이미지는 기존대로 itemsPerPage 개씩 묶어서 처리
							let pageIndex
							let isPageStart
							
							if (isCustom) {
								// 커스텀 아이템: 이전 커스텀 아이템 수 + 이전 이미지 페이지 수
								const prevCustomCount = allItems.slice(0, index).filter(i => i.component || typeof i === 'function').length
								const prevImages = allItems.slice(0, index).filter(i => !(i.component || typeof i === 'function'))
								const prevImagePages = Math.ceil(prevImages.length / itemsPerPage)
								pageIndex = prevCustomCount + prevImagePages
								isPageStart = true
							} else {
								// 이미지: 이전 커스텀 아이템 수 + 현재 이미지의 페이지 인덱스
								const prevCustomCount = allItems.slice(0, index).filter(i => i.component || typeof i === 'function').length
								const prevImages = allItems.slice(0, index).filter(i => !(i.component || typeof i === 'function'))
								const currentImageIndex = prevImages.length
								pageIndex = prevCustomCount + Math.floor(currentImageIndex / itemsPerPage)
								isPageStart = currentImageIndex % itemsPerPage === 0
							}
							
							// 페이지 시작점에 ref 할당
							const pageRef = isPageStart ? (el) => {
								if (el) {
									pageRefs.current[pageIndex] = el
								}
							} : null
							
							// 이미지들 사이에만 gap 적용 (커스텀 아이템은 gap 없음)
							const prevItem = index > 0 ? allItems[index - 1] : null
							const prevIsCustom = prevItem && (prevItem.component || typeof prevItem === 'function')
							const shouldAddMargin = !isCustom && index > 0 // 커스텀 아이템 다음 이미지에도 마진 추가
							
							return (
								<div 
									key={index} 
									ref={pageRef}
									className={`flex-shrink-0 flex flex-col ${isCustom ? 'w-full' : 'w-full md:w-[calc(50%-6px)]'} ${isPageStart ? 'snap-start' : ''} ${shouldAddMargin ? 'ml-3' : ''}`}
									data-page={pageIndex}
								>
									{isCustom ? (
										// 커스텀 컴포넌트 렌더링
										<div className="relative rounded-lg overflow-hidden w-full flex items-center justify-center box-border h-[200px] md:h-[300px]">
											<div className="w-full h-full box-border flex items-center justify-center" style={{ width: '100%' }}>
												{item.component ? <item.component /> : item()}
											</div>
										</div>
									) : (
										// 이미지 렌더링
										<>
											<div className={`relative bg-navy-900/50 rounded-lg flex items-center justify-center ${item.allowFullHeight ? 'overflow-visible h-[200px] md:h-[300px] py-2 px-2 md:px-0' : 'overflow-hidden h-[200px] md:h-[300px]'}`}>
												<img
													src={item.src}
													alt={item.alt}
													className={item.allowFullHeight 
														? "w-full max-w-full max-h-full object-contain object-center opacity-80 hover:opacity-100 transition-opacity"
														: "max-w-full max-h-full object-contain object-center opacity-80 hover:opacity-100 transition-opacity"
													}
													style={item.allowFullHeight ? { width: '100%' } : {}}
												/>
											</div>
											<p className="text-xs text-gray-500 mt-2 text-center">{item.caption}</p>
										</>
									)}
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