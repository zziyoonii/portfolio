import { useCallback } from 'react'

const sections = [
	{ id: 'hero', label: 'Home' },
	{ id: 'about', label: 'About' },  // ← 수정!
	{ id: 'projects', label: 'Project' },  // ← ScrollKeywords 섹션
	{ id: 'testimonials', label: '동료들이 말하는 Qoo' },
	{ id: 'contact', label: 'Contact' },
]

export default function Nav() {
	const onClick = useCallback((e, id) => {
		e.preventDefault()
		const el = document.getElementById(id)
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}, [])

	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			{/* 상단 그라데이션 배경 - 뒤 텍스트 가리기 */}
			<div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/95 via-black/80 to-transparent pointer-events-none" />
			
			<nav className="mx-auto max-w-6xl relative pt-4">
				<div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
					<div className="flex h-16 items-center justify-between px-4 sm:px-6">
						<a href="#hero" className="text-sm font-semibold tracking-wider text-white/90">
						고객 경험을 설계하고 기술로 구현합니다.
						</a>
						<ul className="hidden gap-4 sm:flex">
							{sections.map((s) => (
								<li key={s.id}>
									<a
										href={`#${s.id}`}
										onClick={(e) => onClick(e, s.id)}
										className="rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
									>
										{s.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}



