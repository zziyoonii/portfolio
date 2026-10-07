export default function UrgencyBot() {
  const steps = [
    { title: '요청 접수', desc: '슬랙 워크플로우로 올라온 EDU CS 요청을 1분마다 감지합니다. 정형 작업은 기존 자동 처리 봇이 먼저 처리합니다.' },
    { title: 'AI 질문 7개', desc: '요청 본문(개인정보 마스킹)을 읽고 피해 여부·핵심 기능 불가·정부 보고 데이터 등 7개 질문에 확률로 답하게 합니다.' },
    { title: '규칙으로 등급 결정', desc: 'AI가 등급을 직접 정하지 않고, 확률을 코드 규칙에 넣어 P1~P4를 결정합니다. 애매하면 "확인 필요"를 붙입니다.' },
    { title: '카드 + 기록', desc: '스레드에 시급도 카드를 게시하고, 담당자가 확정·수정한 결과를 시트에 쌓아 기준 개선에 씁니다.' },
  ]

  const grades = [
    { label: 'P1 치명', cond: '되돌리기 어려운 피해가 2명 이상에게 이미 발생', color: 'text-red-400' },
    { label: 'P2 심각', cond: '피해 1명 / 핵심 기능(로그인·본인인증·수강 등) 불가 / 정부 보고 데이터 정정', color: 'text-orange-400' },
    { label: 'P3 보통', cond: '핵심 기능은 되지만 부가 기능 불가·오동작', color: 'text-yellow-300' },
    { label: 'P4 낮음', cond: '피해 없는 작업 요청 (세팅·데이터 추출·문의)', color: 'text-gray-300' },
  ]

  const versions = [
    { name: '첫 버전 (영향 + 기한)', rate: '68%', note: '사람 확인 요청 81%' },
    { name: '질문 문구 개선 · 기준 완화', rate: '80%', note: '사람 확인 요청 20%' },
    { name: '시스템 심각도 기준 (현재)', rate: '90%', note: '사람 확인 요청 23%' },
  ]

  const beforeAfter = [
    { area: '시급도 기준', before: '공통 기준 없이 담당자 판단', after: 'P1~P4 정의를 문서로 정리' },
    { area: '요청 접수 시', before: '시급도 표시 없음', after: '요청 후 1~4분 안에 스레드에 시급도 카드와 등급 이모지 자동 게시' },
    { area: '판단 기록', before: '남지 않음', after: 'AI 판정과 담당자 확정 등급이 요청별로 시트에 누적' },
    { area: '원인 기록', before: '요약(문의/논의/해결)만 존재', after: '요약에 원인 분류 6종 추가' },
    { area: '과거 문의 분석', before: '같은 기준으로 분류해 본 적 없음', after: '3개월 180건을 처음으로 같은 기준으로 분류' },
    { area: '운영 방식', before: '-', after: '서버 없이 Apps Script로 상시 동작, 요청당 AI 호출 1회' },
  ]

  const stages = [
    { name: '1차 · 구축', desc: '없던 기준·자동 판정·기록 체계가 생김', when: '2026-10-06 완료', done: true },
    { name: '2차 · 운영 결과', desc: 'AI·사람 판정 일치율, 버튼 응답률, 등급별 처리 시간', when: '운영 1~2주 뒤', done: false },
    { name: '3차 · 개선 효과', desc: '반복 원인 보완 후 같은 문의가 줄었는지', when: '운영 1~2달 뒤', done: false },
  ]

  return (
    <div className="space-y-6">
      {/* Flow */}
      <div className="bg-slate-900/60 border border-slate-700/80 rounded-2xl px-1.5 pt-1.5 pb-1 md:px-3 md:pt-3 md:pb-3">
        <h3 className="text-xs md:text-base font-semibold text-gray-300 mb-1 md:mb-2">Flow</h3>
        <div className="grid grid-cols-2 gap-1 md:gap-2.5">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">{i + 1}</span>
                <span className="text-[10px] md:text-sm font-semibold text-gray-100">{s.title}</span>
              </div>
              <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              EDU CS 요청 시급도를 <strong className="text-white">일관된 기준으로 자동 판정</strong>하는 슬랙 봇입니다. 최종 우선순위는 사람이 정하고, 봇의 판정은 초안입니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              서버 없이 Google Apps Script와 TypeSafe API로 구성했고, 담당자가 확정·수정한 기록이 시트에 쌓여 기준을 계속 다듬을 수 있습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 문제 상황 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">문제 상황</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              요청이 하루 2~3건(최근 3개월 180건) 들어오는데, <strong className="text-white">"얼마나 급한가"를 담당자가 매번 따로 판단</strong>해 같은 성격의 건도 사람마다 우선순위가 달랐습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 시급도 기준 */}
      <div className="bg-navy-800/50 border border-white/10 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">🎯 시급도 = 지금 시스템 상태 때문에 사용자가 실제로 겪고 있는 피해의 크기</h3>
        <div className="space-y-2 mb-4">
          {grades.map((g) => (
            <div key={g.label} className="flex items-start gap-3 text-sm">
              <span className={`font-semibold whitespace-nowrap ${g.color}`}>{g.label}</span>
              <span className="text-gray-300 leading-relaxed">{g.cond}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-xs leading-relaxed">
          기한·다급한 표현·원인·폼의 요청 종류는 등급에 쓰지 않습니다. 기한은 같은 등급 안의 처리 순서에만 반영해, 운영 일정이 시스템 심각도와 섞이지 않게 했습니다.
        </p>
      </div>

      {/* 설계 결정 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">핵심 설계 결정</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <strong className="text-white">AI는 확률만, 등급은 코드가.</strong> "하나라도 심각하면"은 평균 내지 않고 조건으로 둬서 심각한 신호가 묻히지 않게 했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <strong className="text-white">애매하면 사람에게 넘깁니다.</strong> 판단을 반대로 뒤집었을 때 등급이 달라지는 경우에만 "⚠ 확인 필요"를 붙여, 과하게 알리지 않으면서 오판을 걸러냅니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <strong className="text-white">원인은 접수 때가 아니라 처리 후에 기록합니다.</strong> 요약봇이 절차·시스템·안내를 주어로 6개 분류를 남겨, 누구의 잘못이 아니라 무엇을 보완할지를 쌓습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <strong className="text-white">서버 없는 운영 제약 대응.</strong> 슬랙 버튼 3초 제한은 카드만 먼저 바꾸고 시트 쓰기를 다음 실행으로 넘겨 해결했고, 큰 시트의 시간 초과는 대기열에 모았다가 필요할 때만 여는 방식으로 풀었습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 검증 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">검증 — 정답 라벨 30건 기준 일치율</h3>

        <div className="text-blue-300 text-sm font-semibold mb-3">
          💡 기준을 세 번 고쳐 68% → 90%
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left text-gray-400 font-semibold py-2 pr-4 border-b border-white/10">버전</th>
                <th className="text-left text-gray-400 font-semibold py-2 pr-4 border-b border-white/10">일치율</th>
                <th className="text-left text-gray-400 font-semibold py-2 border-b border-white/10">비고</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {versions.map((v, i) => (
                <tr key={v.name}>
                  <td className="py-2 pr-4 border-b border-white/5">{v.name}</td>
                  <td className={`py-2 pr-4 border-b border-white/5 ${i === versions.length - 1 ? 'text-green-400 font-semibold' : ''}`}>{v.rate}</td>
                  <td className="py-2 border-b border-white/5 text-gray-400 text-xs">{v.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="space-y-2 mt-3">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              P1·P2를 낮게 본 3건은 <strong className="text-white">모두 "확인 필요"로 표시</strong>되어 사람이 걸러낼 수 있었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              애매한 답 하나로 등급이 바뀌는 건이 6건 → 2건으로 줄어, 시스템 심각도 기준이 더 안정적임을 확인했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact — 1차 성과: 없던 것이 생겼다</h3>

        <div className="text-blue-300 text-sm font-semibold mb-3">
          💡 운영 데이터가 쌓이기 전이라, 새로 생긴 기준·자동화·기록 체계로 정리했습니다
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left text-gray-400 font-semibold py-2 pr-4 border-b border-white/10 w-1/4"></th>
                <th className="text-left text-gray-400 font-semibold py-2 pr-4 border-b border-white/10">Before</th>
                <th className="text-left text-gray-400 font-semibold py-2 border-b border-white/10">After</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {beforeAfter.map((r) => (
                <tr key={r.area}>
                  <td className="py-2 pr-4 border-b border-white/5 text-gray-400 text-xs">{r.area}</td>
                  <td className="py-2 pr-4 border-b border-white/5">{r.before}</td>
                  <td className="py-2 border-b border-white/5 text-green-400">{r.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="text-xs font-semibold text-gray-400 mt-5 mb-2">처음 드러난 패턴 (최근 3개월 180건: P1 1% · P2 11% · P3 29% · P4 59%)</h4>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              P1 2건이 <strong className="text-white">모두 같은 유형(진도율 전송·수신 실패)</strong>이었고 한 달 간격으로 반복됐습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              P2의 절반 이상이 로그인·본인인증 문제였고, <strong className="text-white">폼에서 "단순 요청"으로 올라온 건 중 6건이 실제로는 P2</strong>였습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              요청 1건당 AI 호출 1회(약 0.6초), 1분마다 하는 확인은 슬랙 API만 써서 운영 비용이 거의 들지 않습니다.
            </span>
          </li>
        </ul>

        <h4 className="text-xs font-semibold text-gray-400 mt-5 mb-2">성과 단계</h4>
        <div className="space-y-2">
          {stages.map((st) => (
            <div key={st.name} className="flex items-start gap-3 text-sm">
              <span className={`whitespace-nowrap font-semibold ${st.done ? 'text-green-400' : 'text-gray-500'}`}>{st.done ? '✓' : '○'} {st.name}</span>
              <span className="text-gray-300 leading-relaxed">
                {st.desc} <span className="text-gray-500 text-xs whitespace-nowrap">({st.when})</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 한계 */}
      <div className="bg-navy-800/50 border border-white/10 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">⚠️ 한계와 다음 단계</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              정답 라벨은 한 사람이 매겼고, 두 사람이 같은 건을 각자 매겨 일치도를 보는 검증은 아직 하지 않았습니다. 판정은 접수 시점 한 번뿐이라 스레드에서 상황이 바뀌어도 자동 갱신되지 않습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              1~2주 운영 후 AI 시급도와 담당자 확정 시급도를 비교해 기준값과 질문 문구를 조정할 예정입니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['AI활용', '자동화', 'Slack', 'Apps Script', '프로세스개선'].map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
