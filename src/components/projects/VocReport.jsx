import ImageGallery from './ImageGallery'
import dashboard from '../../assets/projects/voc-report/dashboard.png'
import allDashboard from '../../assets/projects/voc-report/all_dashboard.png'
import sprintReport1 from '../../assets/projects/voc-report/sprint-report1.png'
import sprintReport2 from '../../assets/projects/voc-report/sprint-report2.png'

export default function VocReport() {
	const images = [
		{ src: allDashboard, alt: '실시간 VoC 대시보드', caption: '루커스튜디오 실시간 대시보드' },
		{ src: dashboard, alt: 'Sprint VoC 대시보드', caption: 'Sprint 대시보드 - 정량 데이터' },
		{ src: sprintReport1, alt: 'Sprint 리포트 1', caption: 'Sprint VoC Report - 데이터 분석' },
		{ src: sprintReport2, alt: 'Sprint 리포트 2', caption: 'Sprint VoC Report - 실제 고객 목소리' },
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
						2주마다 Sprint VoC Report 발행
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						루커스튜디오로 정량 데이터 시각화
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						실제 고객 목소리를 텍스트로 정리하여 팀 전체가 고객 관점을 공유
					</li>
				</ul>
			</div>

			{/* 주요 성과 */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">주요 성과</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						85개 Sprint 리포트 발행
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						2주 단위 루틴화
					</li>
				</ul>
			</div>

			{/* Challenge */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						고객 피드백 취합 시스템 부재
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						팀 간 VoC 데이터 공유 부재
					</li>
				</ul>
			</div>

			{/* Solution */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Solution</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						루커스튜디오 도입으로 VoC 데이터 구조화
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						2주 단위 리포트로 정량·정성 통합 시스템 구축
					</li>
				</ul>
			</div>

			{/* Result */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Result</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						85개 Sprint 리포트 발행
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						루커스튜디오 대시보드로 실시간 VoC 데이터 확인 가능
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						실제 고객 목소리 텍스트화로 팀 전체 고객 관점 공유
					</li>
				</ul>
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-2 pt-4">
				{['VoC', '데이터시각화', '고객중심'].map((tag, i) => (
					<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
						#{tag}
					</span>
				))}
			</div>
		</div>
	)
}