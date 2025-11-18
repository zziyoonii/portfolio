import ImageGallery from './ImageGallery'
import dashboard from '../../assets/projects/voc-report/dashboard.png'
import allDashboard from '../../assets/projects/voc-report/all_dashboard.png'
import sprintReport1 from '../../assets/projects/voc-report/sprint-report1.png'
import sprintReport2 from '../../assets/projects/voc-report/sprint-report2.png'

export default function VocReport() {
  const images = [
    { src: allDashboard, alt: '실시간 VoC 대시보드', caption: 'Looker Studio 실시간 대시보드' },
    { src: dashboard, alt: 'Sprint VoC 대시보드', caption: 'Sprint 대시보드 – 정량 데이터' },
    { src: sprintReport1, alt: 'Sprint 리포트', caption: 'Sprint VoC Report – 정성 분석' },
    { src: sprintReport2, alt: '고객 발화 정리', caption: 'Sprint VoC Report – 실제 고객 목소리' },
  ]

  return (
    <div className="space-y-6">

      {/* 이미지 갤러리 */}
      <ImageGallery images={images} />

      {/* 프로젝트 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              제품 전반의 VoC를 <span className="whitespace-nowrap">3주 단위</span>로 정리하는 <span className="whitespace-nowrap">Sprint VoC Report</span> 시스템을 설계했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <span className="whitespace-nowrap">Looker Studio</span> 기반 대시보드와 리포트로 정량 지표와 실제 고객 발화를 함께 다루는 구조를 구축했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 문제 상황 & 접근 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">문제 상황 & 접근</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            고객 피드백이 산발적으로 쌓여 데이터 기반 논의가 어려운 환경이었습니다.
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            Looker Studio로 정량 데이터를 구조화하고, 고객 문의·발화를 일관된 포맷으로 통합해 반복 가능한 리포트 구조를 만들었습니다.
          </li>
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              Sprint VoC Report <strong className="text-white whitespace-nowrap">48개</strong> 발행, 팀의 정기적 고객 리뷰 루틴을 안정적으로 정착시켰습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              Looker Studio 대시보드로 조직 전체가 동일한 고객 데이터를 기반으로 논의하는 환경을 구축했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              실제 고객 발화를 축적해 기능 논의 시 고객 사례가 의사결정 근거로 자연스럽게 활용되는 구조를 만들었습니다.
            </span>
          </li>
		  <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              조직 간 고객 데이터 언어가 통일되고, 제품·운영·콘텐츠 전반의 의사결정 기준이 정렬되는 기반을 마련했습니다.
            </span>
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
