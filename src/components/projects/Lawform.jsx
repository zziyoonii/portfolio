export default function Lawform() {
  const ServiceFlow = () => (
    <div className="bg-slate-900/60 border border-slate-700/80 rounded-2xl px-1.5 pt-1.5 pb-1 md:px-3 md:pt-3 md:pb-3 w-full max-h-full flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col w-full">
        <h3 className="text-xs md:text-base font-semibold text-gray-300 mb-1 md:mb-2">Flow</h3>

        <div className="mb-1 md:mb-2.5">
          <span className="px-1.5 md:px-3 py-0.5 md:py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[9px] md:text-sm whitespace-nowrap">
            문서 입력 → AI 준법 검토 → 개정 초안 생성
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1 md:gap-2.5">
          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-emerald-500/20 text-emerald-300 flex-shrink-0">1</span>
              <span className="text-[10px] md:text-sm font-semibold text-gray-100">문서 입력</span>
            </div>
            <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
              이용약관·개인정보처리방침·서비스 기획서를 URL 또는 직접 입력합니다.
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-emerald-500/20 text-emerald-300 flex-shrink-0">2</span>
              <span className="text-[10px] md:text-sm font-semibold text-gray-100">준법 검토</span>
            </div>
            <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
              AI가 즉시 개정 필요 / 개정 권고 / 문제 없음으로 항목을 분류합니다.
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-emerald-500/20 text-emerald-300 flex-shrink-0">3</span>
              <span className="text-[10px] md:text-sm font-semibold text-gray-100">개정안 확인</span>
            </div>
            <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
              각 항목별 위반 조항·조치 방법·공지 기간 기준을 상세히 제공합니다.
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-emerald-500/20 text-emerald-300 flex-shrink-0">4</span>
              <span className="text-[10px] md:text-sm font-semibold text-gray-100">공지 초안 생성</span>
            </div>
            <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
              이메일·사내 공지·매체 채널별 공지 초안을 즉시 생성해 복사합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* 플로우 */}
      <ServiceFlow />

      {/* 서비스 링크 */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-emerald-400 mb-1">
              🔗 실제 서비스
            </div>
            <div className="text-sm text-gray-300">
              직접 문서를 넣고 준법 검토를 해보세요
            </div>
          </div>
          <a
            href="https://lawform-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 md:px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-lg md:text-sm font-semibold rounded-lg transition-colors flex-shrink-0 flex items-center justify-center min-w-[44px] h-[36px]"
          >
            <span className="hidden md:inline">바로가기 </span>→
          </a>
        </div>
      </div>

      {/* 프로젝트 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            <span className="leading-relaxed">
              서비스 운영 중 반복적으로 마주치는 이용약관·개인정보처리방침의 법적 리스크를 AI로 자동 검토하는 도구를 직접 만들었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            <span className="leading-relaxed">
              Gemini 2.5 Flash API를 활용해 준법 검토 → 개정 조치 안내 → 채널별 공지 초안 생성까지 원스톱으로 처리합니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            <span className="leading-relaxed">
              바이브코딩 방식으로 기획·개발·배포를 직접 수행했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 문제 상황 & 접근 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">문제 상황 & 접근</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            <span>
              서비스 운영 중 약관 개정 이슈가 생길 때마다 법무 검토 의뢰까지 시간이 걸리고, 어느 조항이 문제인지 운영자가 빠르게 파악하기 어려웠습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            <span>
              문서를 넣으면 즉시 위반 여부·관련 법조항·조치 우선순위·공지 기한까지 한눈에 보여주는 구조를 설계했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            <span>
              이메일·사내 공지·매체 채널별 공지 초안 자동 생성으로, 검토 후 바로 실행까지 이어지도록 플로우를 완결했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
        <div className="text-emerald-300 text-sm font-semibold mb-3">
          💡 운영자의 시각으로 설계한 법무 지원 도구
        </div>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            <span className="leading-relaxed">
              법적 지식 없이도 준법 리스크를 빠르게 파악하고 즉시 대응할 수 있는 구조를 만들었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            <span className="leading-relaxed">
              공지 초안 자동 생성으로 검토에서 실행까지의 리드타임을 대폭 단축했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['AI활용', '바이브코딩', '서비스운영', '법무지원', '자동화'].map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
