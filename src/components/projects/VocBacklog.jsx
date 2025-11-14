import ImageGallery from './ImageGallery'
import backlog1 from '../../assets/projects/vocbacklog/backlog1.png'

export default function VocBacklog() {
  const images = [
    { src: backlog1, alt: 'voc backlog 1', caption: '백로그 흐름도 설계' },
  ]

  const created = 92
  const solved = 36
  const solvedPct = Math.round((solved / created) * 100) // 39

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
            고객의 VoC(Voice of Customer)를 체계적으로 백로그화하고, 스크럼 기반으로 우선순위를 실행해 제품 개선 사이클을 구축
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            수집 → 분류 → 스프린트 투입 → 실행/검증의 루프를 만들고, 팀 단위로 개선 결과를 가시화
          </li>
        </ul>
      </div>


      {/* 주요 성과 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">주요 성과</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            VoC 기반 백로그 92건 생성 — 고객 피드백을 체계적 데이터로 전환
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            36건 해결(해결율 {solvedPct}%) — 스크럼 적용으로 실행력 강화
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            제품 개선 사이클(수집 → 우선순위 → 실행 → 검증) 정립
          </li>
        </ul>
      </div>

      {/* Challenge */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            VoC가 흩어져 있어 우선순위가 불명확했고, 개선 요청이 누락되거나 실행으로 이어지지 않는 문제가 있었습니다.
          </li>
        </ul>
      </div>

      {/* Solution */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Solution</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            VoC 수집 파이프라인과 표준 분류(카테고리·우선순위·영향도) 정의
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            백로그를 스프린트 단위로 스케줄링하여 책임자 배정 및 실행 추적
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            결과를 루커/대시보드로 시각화해 각 팀이 개선 효과를 확인하도록 함
          </li>
        </ul>
      </div>

      {/* Result */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Result</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            백로그 92건 생성 및 36건 해결 (해결율 {solvedPct}%)
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            제품 개선 요청의 실행 전환율 증가 — 조직 내 실행 루틴 정착
          </li>
        </ul>
      </div>


      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['제품개선', '백로그', '프로젝트관리'].map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
