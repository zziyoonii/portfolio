import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageGallery({ images }) {
	const scrollRef = useRef(null)
	const [activePage, setActivePage] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(2)

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

	const handleScroll = () => {
		if (!scrollRef.current) return
		const scrollLeft = scrollRef.current.scrollLeft
		const containerWidth = scrollRef.current.offsetWidth
		const page = Math.round(scrollLeft / containerWidth)
		setActivePage(Math.min(page, totalPages - 1))
	}

	const scrollToPage = (page) => {
		if (!scrollRef.current) return
		const containerWidth = scrollRef.current.offsetWidth
		scrollRef.current.scrollTo({
			left: containerWidth * page,
			behavior: 'smooth',
		})
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
					onScroll={handleScroll}
					className="overflow-x-auto scrollbar-hide -mx-2 px-2 snap-x snap-mandatory"
				>
					<div className="flex gap-3 pb-2">
						{images.map((image, index) => (
							<div 
								key={index} 
								className="flex-shrink-0 w-full md:w-[calc(50%-6px)] snap-start"
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
						))}
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