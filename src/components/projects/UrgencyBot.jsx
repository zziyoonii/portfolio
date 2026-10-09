import ImageGallery from './ImageGallery'
import cardImg from '../../assets/projects/urgency/card.png'

export default function UrgencyBot() {
  const steps = [
    { title: '요청 접수', desc: '슬랙 워크플로우로 올라온 EDU CS 요청을 1분마다 감지합니다.' },
    { title: '7개 질문', desc: '요청 본문을 Jev와 OpenAI Decisions API에 보내 피해 여부 등을 확률로 답하게 합니다.' },
    { title: '등급 결정', desc: '모델이 아닌 코드 규칙이 P1~P4를 정하고, 애매하면 "확인 필요"를 붙입니다.' },
    { title: '카드 + 기록', desc: '스레드에 시급도 카드를 달고, 두 모델 판정과 담당자 확정 등급을 시트에 쌓습니다.' },
  ]

  const ServiceFlow = () => (
    <div className="bg-slate-900/60 border border-slate-700/80 rounded-2xl px-1.5 pt-1.5 pb-1 md:px-3 md:pt-3 md:pb-3 w-full max-h-full flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col w-full">
        <h3 className="text-xs md:text-base font-semibold text-gray-300 mb-1 md:mb-2">Flow</h3>

        <div className="mb-1 md:mb-2.5">
          <span className="px-1.5 md:px-3 py-0.5 md:py-1.5 rounded-full bg-blue-500/15 text-blue-300 text-[9px] md:text-sm whitespace-nowrap">
            요청 접수 → 결정 모델 질문 → 규칙으로 등급 → 카드 게시
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1 md:gap-2.5">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl bg-slate-800/80 border border-slate-700 p-1.5 md:p-2.5 flex flex-col h-full">
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-shrink-0">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-[9px] md:text-sm rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">{i + 1}</span>
                <span className="text-[10px] md:text-sm font-semibold text-gray-100">{s.title}</span>
              </div>
              <p className="text-[9px] md:text-sm text-gray-300 leading-tight md:leading-relaxed flex-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const customItems = [
    { component: ServiceFlow, allowFullHeight: false, needsCenterAlignment: true }
  ]

  const images = [
    { src: cardImg, alt: '슬랙에 달린 시급도 카드', caption: '실제 슬랙 시급도 카드 (AI 초안 P4 → 담당자 P2 변경)' },
  ]

  return (
    <div className="space-y-6">
      {/* 이미지 갤러리 - Flow 포함 */}
      <ImageGallery images={images} customItems={customItems} />

      {/* 프로젝트 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              EDU CS 요청이 올라오면 <strong className="text-white">"사용자가 지금 겪는 피해"</strong> 기준으로 시급도(P1~P4) 초안을 슬랙 스레드에 자동으로 달아 주는 봇입니다. 최종 우선순위는 사람이 정합니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              확률로 답하는 결정 모델 <strong className="text-white">Jev(TypeSafe)</strong>를 기준으로 쓰고, 새로 나온 <strong className="text-white">OpenAI Decisions API</strong>(베타)를 같은 질문으로 붙여 두 모델을 비교하고 있습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              서버 없이 Google Apps Script로 구성해 상시 동작하고, 요청 1건당 AI 호출은 1번입니다.
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
            <span className="leading-relaxed">
              요청이 하루 2~3건(최근 3개월 180건) 들어오는데, <strong className="text-white">"얼마나 급한가"를 담당자가 매번 따로 판단</strong>해 같은 성격의 건도 사람마다 우선순위가 달랐습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              기한·다급한 표현·원인은 등급에 쓰지 않고 시스템 심각도만 기준으로 삼아, 운영 일정이 심각도와 섞이지 않게 했습니다. 모델은 확률만 답하고 등급은 코드 규칙이 정합니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              판단을 뒤집으면 등급이 달라지는 애매한 건에만 <strong className="text-white">"⚠ 확인 필요"</strong>를 붙여 사람이 걸러내게 했고, 담당자가 확정·수정한 값을 시트에 쌓아 기준을 다듬습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 시급도 기준 */}
      <div className="bg-navy-800/50 border border-white/10 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">🎯 시급도 = 지금 사용자가 실제로 겪고 있는 피해의 크기</h3>
        <div className="space-y-2">
          {[
            { k: 'P1 치명', c: 'text-red-400', d: '되돌리기 어려운 피해가 2명 이상에게 이미 발생' },
            { k: 'P2 심각', c: 'text-orange-400', d: '핵심 기능(로그인·본인인증·수강 등) 불가 / 정부 보고 데이터 정정' },
            { k: 'P3 보통', c: 'text-yellow-300', d: '핵심 기능은 되지만 부가 기능 불가·오동작' },
            { k: 'P4 낮음', c: 'text-gray-300', d: '피해 없는 작업 요청 (세팅·데이터 추출·문의)' },
          ].map((g) => (
            <div key={g.k} className="flex items-start gap-3 text-sm">
              <span className={`font-semibold whitespace-nowrap ${g.c}`}>{g.k}</span>
              <span className="text-gray-300 leading-relaxed">{g.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
        <div className="text-blue-300 text-sm font-semibold mb-3">
          💡 없던 시급도 기준과 판단 기록이 생겼습니다 (1차 구축 완료)
        </div>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              정답 라벨 30건 기준 판정 일치율을 <strong className="text-white">68% → 80% → 90%</strong>로 끌어올렸고, P1·P2를 낮게 본 3건은 모두 "확인 필요"로 표시됐습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              최근 3개월 180건을 처음으로 같은 기준으로 분류해 P1 1% · P2 11% · P3 29% · P4 59% 분포를 확인했습니다. P1 2건은 같은 유형(진도율 전송·수신 실패)이 한 달 간격으로 반복된 건이었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              Jev와 OpenAI 판정을 시트에 함께 쌓고 있어, 1~2주 뒤 담당자 확정값으로 어느 모델이 더 잘 맞히는지 채점할 예정입니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['AI활용', '자동화', 'Jev', 'OpenAI Decisions API', '프로세스개선'].map((tag, i) => (
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
