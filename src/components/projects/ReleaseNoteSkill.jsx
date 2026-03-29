export default function ReleaseNoteSkill() {
  const SkillFlow = () => (
    <div className="bg-slate-900/60 border border-slate-700/80 rounded-2xl px-1.5 pt-1.5 pb-1 md:px-3 md:pt-3 md:pb-3 w-full max-h-full flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col w-full">
        <h3 className="text-xs md:text-base font-semibold text-gray-300 mb-1 md:mb-2">스킬 작동 흐름</h3>

        <div className="mb-1 md:mb-2.5">
          <span className="px-1.5 md:px-3 py-0.5 md:py-1.5 rounded-full bg-blue-500/15 text-blue-300 text-[9px] md:text-sm whitespace-nowrap">
            Task DB 조회 → 노션/PR 분석 → 판단 → 초안 생성 → 노션 반영
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1 md:gap-2.5">
          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">1</span>
              <span className="text-[10px] md:text-sm font-semibold text-gray-100">태스크 조회</span>
            </div>
            <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
              마지막 스프린트 완료 태스크 중 학습유닛 담당·GitHub PR 연결 조건으로 자동 필터링
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">2</span>
              <span className="text-[10px] md:text-sm font-semibold text-gray-100">노션 & PR 분석</span>
            </div>
            <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
              각 태스크의 노션 페이지와 노션에 동기화된 PR Description을 함께 읽어 개발 맥락 파악
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">3</span>
              <span className="text-[10px] md:text-sm font-semibold text-gray-100">포함 여부 판단</span>
            </div>
            <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
              신규 기능 / 수정 사항 / 버그 픽스 / 제외로 분류 후 CS 매니저와 먼저 확인
            </p>
          </div>

          <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">4</span>
              <span className="text-[10px] md:text-sm font-semibold text-gray-100">초안 → 노션 반영</span>
            </div>
            <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">
              CX 톤 앤 매너가 적용된 초안 생성 후 "노션에 옮겨줘" 한 마디로 자동 반영
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* 스킬 플로우 */}
      <SkillFlow />

      {/* 프로젝트 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              매 스프린트마다 반복되는 릴리즈 노트 초안 작성 중 가장 번거로운 구간인 <span className="whitespace-nowrap">'개발 히스토리 파악'</span>을 AI로 자동화했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              팀 워크스페이스에 연결된 <span className="whitespace-nowrap">Notion MCP</span>를 활용해 추가 권한 없이 노션 데이터에 접근하고, Claude Skills로 조회 → 분석 → 초안 생성 → 노션 반영까지 하나의 플로우로 구현했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              팀 내 Claude Team 요금제를 통해 팀 Skills로 배포해 CX 매니저 외 타 직군도 사용 가능하도록 공유했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 자동화를 고민하게 된 계기 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">자동화를 고민하게 된 계기</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              릴리즈 노트 작성은 노션 접속 → 개발 히스토리 파악 → 초안 취합 → 검토 → GitBook 업로드의 5단계 수기 작업이 매 스프린트 반복되는 구조였습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              그중 <strong className="text-white">2단계(개발 히스토리 파악)</strong>가 핵심 병목이었습니다. 직접 개발에 참여하지 않은 입장에서 흩어진 노션 문서를 일일이 열어보고, 불명확한 내용은 개발자에게 별도로 확인을 요청해야 했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              각 태스크에 GitHub PR이 연결된 경우가 많아 PR Description까지 함께 읽으면 더 정확한 히스토리 파악이 가능하다는 점에 착안해 자동화를 검토하게 됐습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 시도 과정 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">시도 과정</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              처음엔 n8n 워크플로우로 구현을 시도했으나, 회사 노션 워크스페이스에서 외부 웹훅이 허용되지 않아 별도 권한 요청이 필요한 상황에 막혔습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              대안을 찾다가 팀 워크스페이스에 이미 <span className="whitespace-nowrap">Notion MCP</span>가 연결되어 있다는 걸 발견했습니다. 웹훅 없이도 Claude가 노션 데이터를 직접 읽고 쓸 수 있어, 추가 권한 없이 동일한 자동화가 가능했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              Claude Skills를 선택한 이유는 자동화 코드 없이도 데이터 조회 → 분석 → 문서 작성을 하나의 플로우로 처리할 수 있고, CS 매니저가 별도 설정 없이 바로 사용 가능하기 때문입니다.
            </span>
          </li>
        </ul>
      </div>

      {/* CX 톤 앤 매너 정립 */}
      <div className="bg-navy-800/50 border border-white/10 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">✍️ CX 톤 앤 매너 정립 — 스킬에 통합</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              CX팀의 톤 앤 매너는 그동안 명문화된 기준 없이 감각적으로만 유지되어 왔습니다. 팀원 개개인의 경험치에 의존하다 보니 일관성을 보장하기 어려운 상태였습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              AI와 함께 기존 응대 패턴과 작성 사례들을 분석해 공통된 원칙을 추출하고, 이를 하나의 톤 앤 매너 가이드로 정리했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              정립된 톤 앤 매너를 릴리즈 노트 자동화 스킬의 프롬프트에 반영해, 생성되는 초안이 처음부터 CX 기준에 맞는 문체로 출력되도록 했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>

        <div className="text-blue-300 text-sm font-semibold mb-3">
          💡 초안 작성 소요 시간 평균 4시간 → 30분
        </div>

        <p className="text-gray-400 text-xs mb-3">(기획 배경·개발 배경·디자인 팔로업 포함 기준)</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left text-gray-400 font-semibold py-2 pr-4 border-b border-white/10 w-1/3"></th>
                <th className="text-left text-gray-400 font-semibold py-2 pr-4 border-b border-white/10">기존</th>
                <th className="text-left text-gray-400 font-semibold py-2 border-b border-white/10">스킬 도입 후</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr>
                <td className="py-2 pr-4 border-b border-white/5 text-gray-400 text-xs">태스크 내용 파악</td>
                <td className="py-2 pr-4 border-b border-white/5">노션 문서를 하나씩 직접 열어 확인</td>
                <td className="py-2 border-b border-white/5 text-green-400">자동 조회 및 요약</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 border-b border-white/5 text-gray-400 text-xs">개발자 확인 요청</td>
                <td className="py-2 pr-4 border-b border-white/5">불명확한 내용마다 별도 문의</td>
                <td className="py-2 border-b border-white/5 text-green-400">PR 자동 분석으로 최소화</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 border-b border-white/5 text-gray-400 text-xs">초안 작성</td>
                <td className="py-2 pr-4 border-b border-white/5">수기 작성</td>
                <td className="py-2 border-b border-white/5 text-green-400">AI 초안 생성 후 검토·수정</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-400 text-xs">노션 반영</td>
                <td className="py-2 pr-4">직접 복붙</td>
                <td className="py-2 text-green-400">"노션에 옮겨줘" 한 마디로 자동 반영</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['AI활용', '자동화', 'Claude Skills', '프로세스개선'].map((tag, i) => (
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
