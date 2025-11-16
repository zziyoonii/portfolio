import ImageGallery from './ImageGallery'
import backlog1 from '../../assets/projects/vocbacklog/backlog1.png'
import backlog2 from '../../assets/projects/vocbacklog/backlog2.png'

export default function VocBacklog() {
  const images = [
    { src: backlog1, alt: 'voc backlog 1', caption: 'VoC 기반 백로그 흐름도 설계' },
    { src: backlog2, alt: 'voc backlog 2', caption: '내부 VoC 수집 시스템 설계' },
  ]

  const prevCreated = 90
  const prevSolved = 18
  const prevSolvedPct = Math.round((prevSolved / prevCreated) * 100) // 20

  const created = 92
  const solved = 36
  const solvedPct = Math.round((solved / created) * 100) // 39

  return (
    <div className="space-y-6">
      {/* 이미지 갤러리 - 최상단 */}
      <ImageGallery images={images} />

      {/* 주요 성과 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
        <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
          <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">{created}건</div>
          <div className="text-[11px] sm:text-xs text-gray-400">VoC 기반 백로그 생성</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
          <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">{prevSolvedPct}% → {solvedPct}%</div>
          <div className="text-[11px] sm:text-xs text-gray-400">해결율 향상</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg border border-purple-500/20">
          <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">{solved}건</div>
          <div className="text-[11px] sm:text-xs text-gray-400">실제 제품 개선으로 연결</div>
        </div>
      </div>

      {/* 프로젝트 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            고객의 VoC(Voice of Customer)를 체계적으로 백로그화하고, 스크럼 기반으로 우선순위를 실행하는 제품 개선 사이클을 구축했습니다.
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            수집 → 분류 → 스프린트 투입 → 실행/검증의 루프를 만들고, 팀 단위로 개선 결과를 가시화했습니다.
          </li>
        </ul>
      </div>

      {/* 문제 상황 & 접근 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">문제 상황 & 접근</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            2022년 12월부터 2023년 12월까지 VoC 기반 백로그는 {prevCreated}건이 생성되었지만,
            이 중 {prevSolved}건({prevSolvedPct}%)만 해결되는 등 개선 요청이 실행으로 이어지지 않는 문제가 있었습니다.
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            VoC 수집 파이프라인과 표준 분류(카테고리·우선순위·영향도)를 정의하고, 스프린트 단위로 백로그를 운용하는 구조를 설계했습니다.
          </li>
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            이후 운영 기간 동안 VoC 기반 백로그 {created}건을 생성했고, 이 중 {solved}건을 해결하며
            해결율을 {prevSolvedPct}% → {solvedPct}%로 끌어올렸습니다.
          </li>

          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            산발적으로 쌓이던 요청 리스트가 스크럼 기반의 실행 루틴으로 전환되면서,
            “요청만 쌓이는 백로그”에서 “실제로 해결되는 개선 목록”으로 변화했습니다.
          </li>

          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            백로그 정기 스크럼을 도입해 개선 항목을 투명하게 공유하고,
            각 기능팀이 고객 관점의 우선순위로 정렬되는 협업 환경을 만들었습니다.
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
