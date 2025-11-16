import { useCallback, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
	{ id: 'hero', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'projects', label: 'Project' },
	{ id: 'side-projects', label: 'More' },
	{ id: 'testimonials', label: 'Who Qoo Is' },
	{ id: 'contact', label: 'Contact' },
]

export default function Nav() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const onClick = useCallback((e, id) => {
		e.preventDefault()
		const el = document.getElementById(id)
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' })
			setIsMobileMenuOpen(false) // 모바일 메뉴 닫기
		}
	}, [])

	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			{/* 상단 그라데이션 배경 - 뒤 텍스트 가리기 */}
			<div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/95 via-black/80 to-transparent pointer-events-none" />
			
			<nav className="mx-auto max-w-6xl relative pt-4">
				<div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
					<div className="flex h-16 items-center justify-between px-4 sm:px-6">
						<a 
							href="#hero" 
							onClick={(e) => onClick(e, 'hero')}
							className="text-xs sm:text-sm font-semibold tracking-wider text-white/90"
						>
							경험을 읽고, 기술로 구현합니다.
						</a>
						
						{/* 데스크톱 메뉴 */}
						<ul className="hidden gap-4 sm:flex">
							{sections.map((s) => (
								<li key={s.id}>
									<a
										href={`#${s.id}`}
										onClick={(e) => onClick(e, s.id)}
										className="rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors touch-manipulation"
									>
										{s.label}
									</a>
								</li>
							))}
						</ul>

						{/* 모바일 햄버거 메뉴 버튼 */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="sm:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors touch-manipulation"
							aria-label="메뉴 열기/닫기"
							aria-expanded={isMobileMenuOpen}
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>

					{/* 모바일 메뉴 */}
					{isMobileMenuOpen && (
						<div className="sm:hidden border-t border-white/10 px-4 py-3">
							<ul className="flex flex-col gap-2">
								{sections.map((s) => (
									<li key={s.id}>
										<a
											href={`#${s.id}`}
											onClick={(e) => onClick(e, s.id)}
											className="block rounded-md px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors touch-manipulation"
										>
											{s.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</nav>
		</header>
	)
}



