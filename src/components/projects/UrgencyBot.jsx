import cardImg from '../../assets/projects/urgency/card.png'

const STATS = [
  { value: '68→90%', label: '판정 일치율', sub: 'Jev · 라벨 30건' },
  { value: '180건', label: '3개월 문의 분류', sub: '처음으로 같은 기준' },
  { value: '2개 모델', label: 'Jev · OpenAI', sub: '비교 중' },
]

const FLOW = ['요청 접수', '결정 모델에 7개 질문', '코드 규칙으로 P1~P4', '슬랙 카드 + 시트 기록']

const ACCURACY = [
  { name: '첫 버전 (영향 + 기한)', rate: 68 },
  { name: '질문 개선 · 기준 완화', rate: 80 },
  { name: '시스템 심각도 기준 (현재)', rate: 90, current: true },
]

const GRADES = [
  { key: 'P1', name: '치명', desc: '되돌리기 어려운 피해 2명↑', count: 2, bar: 'bg-red-400', text: 'text-red-400' },
  { key: 'P2', name: '심각', desc: '핵심 기능 불가 · 정부 데이터 정정', count: 20, bar: 'bg-orange-400', text: 'text-orange-400' },
  { key: 'P3', name: '보통', desc: '부가 기능 불가 · 오동작', count: 52, bar: 'bg-yellow-300', text: 'text-yellow-300' },
  { key: 'P4', name: '낮음', desc: '피해 없는 작업 요청', count: 106, bar: 'bg-gray-400', text: 'text-gray-300' },
]
const TOTAL = GRADES.reduce((a, g) => a + g.count, 0)

const MORE = [
  {
    title: '핵심 설계 결정',
    items: [
      '모델은 확률만 답하고, 등급은 코드 규칙이 정합니다. "하나라도 심각하면"을 평균 내지 않고 조건으로 둬서 심각한 신호가 묻히지 않습니다.',
      '판단을 뒤집으면 등급이 달라지는 애매한 경우에만 "⚠ 확인 필요"를 붙입니다.',
      '질문과 규칙을 모델과 분리해 Jev와 OpenAI를 같은 요청으로 나란히 비교합니다. 베타인 OpenAI는 시트에만 기록하고 카드는 Jev 기준입니다.',
      '기한·다급한 표현·원인은 등급에 쓰지 않습니다. 운영 일정이 시스템 심각도와 섞이지 않게 하기 위해서입니다.',
    ],
  },
  {
    title: '한계',
    items: [
      '정답 라벨은 한 사람이 매겼고, 두 사람 간 일치도 검증은 아직 하지 않았습니다.',
      '판정은 접수 시점 한 번뿐이라 스레드에서 상황이 바뀌어도 자동 갱신되지 않습니다.',
    ],
  },
  {
    title: '성과 단계',
    items: [
      '✓ 1차 구축: 없던 기준·자동 판정·기록 체계가 생김 (완료)',
      '○ 2차 운영 결과: Jev와 OpenAI 중 담당자 확정과 더 잘 맞은 쪽 (운영 1~2주 뒤)',
      '○ 3차 개선 효과: 반복 원인 보완 후 같은 문의가 줄었는지 (운영 1~2달 뒤)',
    ],
  },
]

export default function UrgencyBot() {
  return (
    <div className="space-y-8">
      {/* 한 줄 요약 */}
      <p className="text-gray-200 leading-relaxed">
        요청마다 담당자가 따로 매기던 우선순위를, <strong className="text-white">"사용자가 지금 겪는 피해"</strong> 기준으로 통일해 슬랙에 자동으로 달아 주는 봇입니다.
      </p>

      {/* 핵심 숫자 */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {STATS.map((s) => (
          <div key={s.value} className="rounded-xl bg-slate-800/80 border border-slate-700 p-3 sm:p-4">
            <div className="text-lg sm:text-2xl font-bold text-blue-300 whitespace-nowrap">{s.value}</div>
            <div className="text-xs sm:text-sm text-gray-100 mt-1">{s.label}</div>
            <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* 실제 슬랙 카드 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">실제 슬랙에 달린 시급도 카드</h3>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white max-w-md mx-auto">
          <img src={cardImg} alt="슬랙에 달린 시급도 카드" className="w-full h-auto block" loading="lazy" />
        </div>
        <p className="text-xs text-gray-400 mt-2 leading-relaxed text-center">
          AI 초안은 P4, 담당자가 P2로 변경했습니다. 애매한 판단에는 ⚠ 확인 필요가 함께 표시됩니다.
        </p>
      </div>

      {/* Flow */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Flow</h3>
        <div className="flex flex-wrap items-center gap-2">
          {FLOW.map((f, i) => (
            <span key={f} className="inline-flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-blue-500/15 text-blue-300 text-sm">{f}</span>
              {i < FLOW.length - 1 && <span className="text-gray-500">→</span>}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">모델은 확률만 답하고, 등급은 코드 규칙이 정합니다.</p>
      </div>

      {/* 일치율 차트 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-3">기준을 세 번 고쳐 일치율 68% → 90%</h3>
        <div className="space-y-3">
          {ACCURACY.map((a) => (
            <div key={a.name}>
              <div className="flex justify-between text-xs mb-1">
                <span className={a.current ? 'text-gray-100' : 'text-gray-400'}>{a.name}</span>
                <span className={a.current ? 'text-green-400 font-semibold' : 'text-gray-400'}>{a.rate}%</span>
              </div>
              <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full rounded-full ${a.current ? 'bg-green-400' : 'bg-blue-400/50'}`}
                  style={{ width: `${a.rate}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">P1·P2를 낮게 본 3건은 모두 "확인 필요"로 표시되어 사람이 걸러낼 수 있었습니다.</p>
      </div>

      {/* 등급 분포 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-3">최근 3개월 {TOTAL}건 등급 분포</h3>
        <div className="flex h-5 rounded-full overflow-hidden bg-white/10">
          {GRADES.map((g) => (
            <div key={g.key} className={g.bar} style={{ width: `${(g.count / TOTAL) * 100}%` }} title={`${g.key} ${g.count}건`} />
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {GRADES.map((g) => (
            <div key={g.key} className="flex items-baseline gap-2 text-sm">
              <span className={`font-semibold w-20 flex-shrink-0 ${g.text}`}>{g.key} {g.name}</span>
              <span className="text-gray-300 flex-1">{g.desc}</span>
              <span className="text-gray-400 text-xs whitespace-nowrap">{g.count}건 · {Math.round((g.count / TOTAL) * 100)}%</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 leading-relaxed">
          P1 2건은 모두 같은 유형(진도율 전송·수신 실패)이 한 달 간격으로 반복된 것이었고, P2의 절반 이상은 로그인·본인인증 문제였습니다.
        </p>
      </div>

      {/* 더 보기 */}
      <div className="space-y-2">
        {MORE.map((m) => (
          <details key={m.title} className="group rounded-lg bg-navy-800/50 border border-white/10 px-4 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-gray-300 list-none flex items-center justify-between">
              {m.title}
              <span className="text-gray-500 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <ul className="space-y-2 mt-3">
              {m.items.map((t) => (
                <li key={t} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {['AI활용', '자동화', 'Jev', 'OpenAI Decisions API', 'Slack', 'Apps Script'].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
