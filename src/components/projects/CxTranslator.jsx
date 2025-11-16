import ImageGallery from './ImageGallery'
import cxTranslator1 from '../../assets/projects/cxtranslator/cxteamclone.png'

export default function CxTranslator() {
  // 서비스 플로우 컴포넌트
  const ServiceFlow = () => (
    <div className="bg-slate-900/60 border border-slate-700/80 rounded-2xl p-4 sm:p-5 h-full flex flex-col w-full box-border max-w-full">
      <h3 className="text-sm font-semibold text-gray-300 mb-3 whitespace-nowrap">서비스 플로우</h3>

      {/* 상단 라벨 */}
      <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs mb-3">
        <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 whitespace-nowrap">
          개발자 입력 → AI 변환 → 고객 응답
        </span>
        <span className="px-2.5 py-1 rounded-full bg-white/5 text-gray-300 whitespace-nowrap">
          톤 선택 (기본형 · 간결형 · 정중형)
        </span>
      </div>

      {/* 스텝 플로우 */}
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-4">
        {/* Step 1 */}
        <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">
              1
            </span>
            <span className="text-xs font-semibold text-gray-100 whitespace-nowrap">
              개발자 입력
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
            이슈 설명·로그 등 기술적인 답변 초안을 그대로 붙여넣습니다.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">
              2
            </span>
            <span className="text-xs font-semibold text-gray-100 whitespace-nowrap">
              톤 선택 & 변환
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
            기본형 · 간결형 · 정중형 중 톤을 고르면 CX 톤앤매너에 맞춰 자동 변환됩니다.
          </p>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">
              3
            </span>
            <span className="text-xs font-semibold text-gray-100 whitespace-nowrap">
              문장 다듬기
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
            필요한 경우 개발자가 문장을 조금 수정해 팀 상황에 맞게 조정합니다.
          </p>
        </div>

        {/* Step 4 */}
        <div className="rounded-xl bg-slate-800/80 border border-slate-700 px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">
              4
            </span>
            <span className="text-xs font-semibold text-gray-100 whitespace-nowrap">
              고객에게 발송
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
            완성된 문구를 CS 도구(채널톡 등)에 붙여넣어 고객에게 발송합니다.
          </p>
        </div>
      </div>

      {/* 모바일용 간단 플로우 라인 */}
      <div className="mt-3 flex sm:hidden items-center justify-center gap-1 text-[11px] text-gray-400">
        <span>개발자 입력</span>
        <span>→</span>
        <span>톤 선택</span>
        <span>→</span>
        <span>문장 다듬기</span>
        <span>→</span>
        <span>고객 발송</span>
      </div>
    </div>
  )

  const customItems = [
    { component: ServiceFlow }
  ]

  const images = [
    { src: cxTranslator1, alt: 'CX Translator', caption: '서비스 화면' },
  ]

  return (
    <div className="space-y-6">
      {/* 이미지 갤러리 - 최상단 (서비스 플로우 포함) */}
      <ImageGallery images={images} customItems={customItems} />

      {/* 서비스 링크 */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-blue-400 mb-1">
              🔗 실제 서비스
            </div>
            <div className="text-sm text-gray-300">
              현재 운영 중인 도구를 직접 확인해보세요
            </div>
          </div>
          <a
            href="https://cxtranslator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            서비스 바로가기 →
          </a>
        </div>
      </div>

      {/* 프로젝트 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>
              개발자가 작성한 기술 중심 답변을, 고객이 이해하기 쉬운 언어로 자동 변환하는 AI 기반 CX 도구를 설계했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>
              ChatGPT API에 구름 CX팀의 톤앤매너를 학습시켜, 기본형·간결형·정중형 3가지 톤을 제공하는 웹 서비스로 구현했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 변환 예시 */}
      <div className="bg-navy-800/50 border border-white/10 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">💬 변환 예시</h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div>
            <div className="text-xs text-red-400 font-semibold mb-1">개발자 입력 (Before)</div>
            <p>
              "API 호출 시 authentication token이 만료되어 401 에러가 발생했습니다. 토큰을 refresh 하시거나 다시
              로그인해주세요."
            </p>
          </div>

          <div className="flex justify-center text-blue-400 text-base">↓</div>

          <div>
            <div className="text-xs text-green-400 font-semibold mb-1">고객 친화적 표현 (After)</div>
            <p>
              "로그인 정보의 유효기간이 지나 접속이 원활하지 않은 상태입니다. 다시 로그인하시거나 앱을 껐다 켜시면
              대부분 해결됩니다."
            </p>
          </div>
        </div>
      </div>

      {/* 문제 상황 & 접근 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">문제 상황 & 접근</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>
              기술 용어와 에러 코드 중심의 답변이 많아, 고객이 내용을 이해하지 못하거나 추가 문의가 반복되는 문제가
              있었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>
              고객 응대 경험이 적은 개발자는 답변 작성에 부담을 느꼈고, CX팀은 매번 내용을 재해석해 전달해야 하는
              비효율이 존재했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>
              개발자 입력 → AI 변환 → 고객용 답변 초안 생성까지의 플로우를 정의하고, CX 톤앤매너 가이드를 프롬프트에
              녹여 일관된 응답을 만들도록 설계했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact */}
<div>
  <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>

  {/* 최상단 강조 문장 – 불렛 없음 */}
  <div className="text-blue-300 text-sm font-semibold mb-3">
    💡 사내 아이디어톤에서 ‘업무 효율성 개선’ 주제 솔루션으로 선정
  </div>

  <ul className="space-y-2">
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span>
        개발자가 고객 친화적 메시지를 직접 작성해야 하는 부담이 줄어들어,
        CX팀과 개발팀 간의 소통 사이클이 더 매끄럽게 정착되었습니다.
      </span>
    </li>

    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span>
        고객에게 전달되는 메시지의 톤앤매너가 일관되게 유지되어,
        서비스 품질과 고객 신뢰도가 향상되었습니다.
      </span>
    </li>

    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span>
        CX팀이 ‘번역/해석’ 단계에서 반복적으로 수행하던 작업이 줄고,
        검수·품질 관리에 더 집중할 수 있는 구조가 생겼습니다.
      </span>
    </li>

    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span>
        “기술 언어 → 고객 언어”로의 일관된 변환이 가능해지면서
        메시지 전달 오류나 오해 가능성이 줄었습니다.
      </span>
    </li>
  </ul>
</div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['AI활용', '커뮤니케이션', 'CX디자인', '개발자도구'].map((tag, i) => (
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