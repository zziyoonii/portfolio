export default function Beforestatus() {
  const MonitorFlow = () => (
    <div className="bg-slate-900/60 border border-slate-700/80 rounded-2xl px-1.5 pt-1.5 pb-1 md:px-3 md:pt-3 md:pb-3 w-full max-h-full flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col w-full">
        <h3 className="text-xs md:text-base font-semibold text-gray-300 mb-1 md:mb-2">모니터링 대상</h3>

        <div className="mb-1 md:mb-2.5">
          <span className="px-1.5 md:px-3 py-0.5 md:py-1.5 rounded-full bg-blue-500/15 text-blue-300 text-[9px] md:text-sm whitespace-nowrap">
            Status API 폴링 → 오류 분류 → Slack 알림
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1 md:gap-2.5">
          {[
            { name: 'OpenAI', desc: 'GPT 시리즈 서비스 상태 감지' },
            { name: 'Claude', desc: 'Anthropic API 가용성 모니터링' },
            { name: 'Gemini', desc: 'Google AI 서비스 상태 추적' },
            { name: 'AWS', desc: '클라우드 인프라 장애 감지' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0 font-bold">
                  {i + 1}
                </span>
                <span className="text-[10px] md:text-sm font-semibold text-gray-100">{item.name}</span>
              </div>
              <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const AlertLevels = () => (
    <div className="bg-slate-900/60 border border-slate-700/80 rounded-2xl px-1.5 pt-1.5 pb-1 md:px-3 md:pt-3 md:pb-3 w-full flex flex-col justify-center overflow-hidden">
      <h3 className="text-xs md:text-base font-semibold text-gray-300 mb-1 md:mb-2">오류 수준 분류</h3>
      <div className="flex flex-col gap-1 md:gap-2">
        {[
          { level: 'INFO', color: 'text-blue-300 bg-blue-500/15', desc: '정상 범위 내 경미한 이슈' },
          { level: 'WARNING', color: 'text-yellow-300 bg-yellow-500/15', desc: '주의가 필요한 상태 변화' },
          { level: 'ERROR', color: 'text-orange-300 bg-orange-500/15', desc: '서비스 일부 기능 장애' },
          { level: 'CRITICAL', color: 'text-red-300 bg-red-500/15', desc: '5분 이상 지속 → Slack 자동 알림' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-1.5 md:gap-3">
            <span className={`px-1.5 md:px-2.5 py-0.5 rounded-full text-[9px] md:text-xs font-bold flex-shrink-0 ${item.color}`}>
              {item.level}
            </span>
            <span className="text-[9px] md:text-sm text-gray-300 leading-tight">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* 플로우 + 알림 레벨 */}
      <div className="grid grid-cols-1 gap-4">
        <MonitorFlow />
        <AlertLevels />
      </div>

      {/* 서비스 링크 */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-blue-400 mb-1">
              🔗 실제 서비스
            </div>
            <div className="text-sm text-gray-300">
              지금 주요 LLM 서비스 상태를 확인해보세요
            </div>
          </div>
          <a
            href="https://beforestatus.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 md:px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-lg md:text-sm font-semibold rounded-lg transition-colors flex-shrink-0 flex items-center justify-center min-w-[44px] h-[36px]"
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
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              OpenAI·Claude·Gemini·AWS 등 서비스 운영에 필수적인 LLM API의 장애를 실시간으로 감지하는 모니터링 대시보드를 직접 만들었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              각 서비스의 공식 Status API를 주기적으로 폴링해 INFO / WARNING / ERROR / CRITICAL 4단계로 오류 수준을 분류합니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              장애가 5분 이상 지속되면 Slack으로 자동 알림을 발송해 즉각 대응이 가능하도록 설계했습니다.
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
            <span>
              AI 기반 서비스를 운영하다 보면 외부 LLM API 장애가 서비스 품질에 직접 영향을 미치는데, 각 서비스 상태 페이지를 일일이 확인하는 것은 비효율적이었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>
              주요 LLM 서비스의 공식 Status API를 한 곳에서 통합 모니터링하고, 심각도에 따라 알림 수준을 차등 적용하는 구조를 설계했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>
              바이브코딩 방식으로 기획·개발·배포를 직접 수행해 Railway에 배포했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
        <div className="text-blue-300 text-sm font-semibold mb-3">
          💡 운영자의 시각으로 만든 외부 의존성 관리 도구
        </div>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              여러 서비스 상태 페이지를 직접 확인하는 수동 작업을 자동화해 장애 인지 시간을 단축했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              Slack 알림 연동으로 팀 전체가 외부 API 장애를 즉시 인지하고 대응할 수 있는 체계를 만들었습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['바이브코딩', '모니터링', '자동화', 'Slack연동', '서비스운영'].map((tag, i) => (
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
