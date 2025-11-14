import ImageGallery from './ImageGallery'
import note1 from '../../assets/projects/ReleaseNote/note1.png'
import note2 from '../../assets/projects/ReleaseNote/note2.png'

export default function ReleaseNote() {
	const images = [
		{ src: note1, alt: '릴리즈 노트 템플릿', caption: '릴리즈 노트' },
		{ src: note2, alt: '릴리즈 노트 목록', caption: '릴리즈 노트 운영 프로세스' },
	]

	return (
		<div className="space-y-6">
			{/* 이미지 갤러리 - 최상단 */}
			<ImageGallery images={images} />

			{/* 프로젝트 개요 */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						8개월 동안 중단되어 있던 릴리즈 노트를 재개하고, VoC → 백로그 → 출시 → 공지로 이어지는 명확한 사이클을 구축
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						전사 구성원 모두가 고객 관점에서 제품의 변화 흐름을 공유할 수 있도록, 릴리즈 노트 템플릿과 운영 루틴을 설계
					</li>
				</ul>
			</div>

			{/* 주요 성과 */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">주요 성과</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						중단된 릴리즈 노트 발행 재개
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						릴리즈 노트 발행 누락률 0%
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						C-Level feedback: "굿입니다. 친절하고 깔끔합니다."
					</li>
				</ul>
			</div>

			{/* Challenge */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						릴리즈 노트가 중단되어 정보 비대칭 발생
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						출시된 기능을 사용자가 모르는 상황 반복 → CX 문의 증가
					</li>
				</ul>
			</div>


			{/* Solution */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Solution</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						릴리즈 노트 구조 표준화 (요약 → 주요 기능 → 적용 방법 → 스크린샷)
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						Dev → PM → CX → 고객으로 이어지는 단일 프로세스 구축
					</li>
				</ul>
			</div>


			{/* Result */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Result</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						기능 출시 → 고객 전달까지의 흐름 정착
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						전사 구성원이 고객 관점에서 제품 변화를 공유할 수 있는 체계 구축
					</li>
				</ul>
			</div>




			{/* Tags */}
			<div className="flex flex-wrap gap-2 pt-4">
				{['프로세스개선', '릴리즈노트', '커뮤니케이션'].map((tag, i) => (
					<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
						#{tag}
					</span>
				))}
			</div>
		</div>
	)
}
