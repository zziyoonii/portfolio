import ImageGallery from './ImageGallery'
import note1 from '../../assets/projects/ReleaseNote/note1.png'
import note2 from '../../assets/projects/ReleaseNote/note2.png'

export default function ReleaseNote() {
  const images = [
    { src: note1, alt: '릴리즈 노트 템플릿', caption: '릴리즈 노트 템플릿' },
    { src: note2, alt: '릴리즈 노트 목록', caption: '릴리즈 노트 운영 프로세스' },
  ]

  return (
    <div className="space-y-6">

      {/* 이미지 갤러리 */}
      <ImageGallery images={images} />

      {/* 서비스 링크 (항상 산출물은 상단 배치) */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-blue-400 mb-1">🔗 릴리즈 노트</div>
            <div className="text-sm text-gray-300">실제 운영 중인 릴리즈 노트를 확인해보세요.</div>
          </div>
          <a
            href="https://help.goorm.io/release-notes/goormedu-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            바로가기 →
          </a>
        </div>
      </div>

      {/* 프로젝트 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            약 <strong className="text-white">3년 동안 중단되어 있던 릴리즈 노트 발행을 재개</strong>했습니다.
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            Dev → PM → CX → 고객으로 이어지는 단일 전달 흐름을 다시 설계해,
            출시 정보가 누락되지 않도록 운영 루틴을 재정비했습니다.
          </li>
        </ul>
      </div>

      {/* 문제 상황 & 접근 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">문제 상황 & 접근</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            릴리즈 노트가 장기간 중단되며 기능 출시 사실이 내부·외부에 제대로 전달되지 않았고,
            이로 인해 CX 문의 증가 및 조직 내 정보 비대칭이 심화되는 문제가 있었습니다.
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            요약 → 주요 변경사항 → 적용 방법 → 스크린샷으로 구성된 
            <strong className="text-white ml-1">표준 템플릿</strong>을 설계하고 발행 루틴을 문서화하여,
            누구라도 동일한 방식으로 릴리즈 노트를 작성할 수 있는 기반을 만들었습니다.
          </li>
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            중단된 릴리즈 노트를 <strong className="text-white">3년 만에 재개</strong>하고, 재개 이후
            <strong className="text-white ml-1">발행 누락률 0%</strong>을 유지했습니다.
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            출시된 기능이 고객에게 안정적으로 전달되며 CX 문의가 감소했고,
            전사적으로 제품 변경 사항을 동일하게 공유하는 환경이 정착되었습니다.
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            C-Level 피드백
            <span className="italic text-gray-200 ml-1">“굿입니다. 친절하고 깔끔합니다.”</span>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['프로세스개선', '릴리즈노트', '커뮤니케이션'].map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
            #{tag}
          </span>
        ))}
      </div>

    </div>
  )
}
