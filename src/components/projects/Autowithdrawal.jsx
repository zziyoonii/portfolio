import ImageGallery from './ImageGallery'
import withdrawal1 from '../../assets/projects/autowithdrawal/withdrawal1.png'
import withdrawal2 from '../../assets/projects/autowithdrawal/withdrawal2.png'
import withdrawal3 from '../../assets/projects/autowithdrawal/withdrawal3.png'

export default function Autowithdrawal() {
	const images = [
		{ src: withdrawal1, alt: 'figma 설계 1', caption: 'User 탈퇴 신청 화면 설계' },
		{ src: withdrawal2, alt: 'figma 설계 2', caption: 'Admin 탈퇴 신청 화면 설계' },
		{ src: withdrawal3, alt: '자동 메일', caption: '자동 메일 기획' },
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
						Figma 프로토타입 제작
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						톤앤매너 수립, 카테고리별 분류 기준 설계
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						탈퇴 정책 수립
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						업무 효율 80%↑
					</li>
                    <li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
                        휴먼에러 0건					
                    </li>
				</ul>
			</div>

			{/* 주요 성과 */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">주요 성과</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						효율 80% 개선 
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						대기시간 95%↓
					</li>
				</ul>
			</div>

			{/* Challenge */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
                        수동 탈퇴 처리 (영업일 5일 소요, 휴먼 에러 발생)
					</li>
				</ul>
			</div>

			{/* Solution */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Solution</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						Figma 화면 설계
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						자동 메일 시스템 기획
					</li>
				</ul>
			</div>

			{/* Result */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Result</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						탈퇴 1건 처리 효율 80% 개선
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						대기 시간 95% 단축
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						휴먼 에러 0건
					</li>
				</ul>
			</div>



			{/* Tags */}
			<div className="flex flex-wrap gap-2 pt-4">
				{['CS', '프로세스', '효율화', '0→1'].map((tag, i) => (
					<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
						#{tag}
					</span>
				))}
			</div>
		</div>
	)
}