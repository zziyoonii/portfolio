import ImageGallery from './ImageGallery'
import note1 from '../../assets/projects/ReleaseNote/note1.png'
import note2 from '../../assets/projects/ReleaseNote/note2.png'

export default function ReleaseNote() {
  const images = [
    { src: note1, alt: '릴리즈 노트 템플릿', caption: '릴리즈 노트 템플릿' },
    { src: note2, alt: '릴리즈 노트 목록', caption: '릴리즈 노트 운영 설계' },
  ]

  return (
    <div className="space-y-6">
      {/* 이미지 갤러리 - 최상단 */}
      <ImageGallery images={images} />

      {/* 서비스 링크 (산출물은 항상 상단) */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-blue-400 mb-1">🔗 릴리즈 노트</div>
            <div className="text-sm text-gray-300">
              현재 운영 중인 릴리즈 노트를 확인할 수 있습니다.
            </div>
          </div>
          <a
            href="https://help.goorm.io/release-notes/goormedu-channel"
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
              약 3년간 중단되어 있던 릴리즈 노트 발행을 재개하고, <span className="whitespace-nowrap">출시 → 공지 → 피드백</span>으로 이어지는 흐름을 다시 정리했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <span className="whitespace-nowrap">Dev → PM → CX → 고객</span>으로 이어지는 전달 구조를 재정비해, 기능 출시 정보가 누락되지 않고 전달되도록 발행 기준과 루틴을 설계했습니다.
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
              릴리즈 노트가 장기간 중단되면서 기능 출시 사실이 내부·외부에 충분히 공유되지 않았고, 그 결과 CX 문의 증가와 팀 간 정보 비대칭이 발생하고 있었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <span className="whitespace-nowrap">요약 → 주요 변경사항 → 적용 방법 → 스크린샷</span>으로 이어지는 구조의 템플릿을 설계하고, <span className="whitespace-nowrap">발행 주체·검수 단계·채널</span>을 문서화하여 누구나 같은 형식으로 릴리즈 노트를 작성할 수 있는 기반을 만들었습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Impact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              중단되었던 릴리즈 노트를 <strong className="text-white whitespace-nowrap">3년</strong> 만에 재개했고, 재개 이후 발행 누락 없이 안정적으로 운영하고 있습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              기능 출시 정보가 고객과 내부 구성원에게 일관되게 전달되면서, 제품 변경 사항에 대한 이해도와 대응 속도가 전반적으로 향상되었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="whitespace-nowrap">
              C-Level 피드백 <span className="italic text-gray-200">"굿입니다. 친절하고 깔끔합니다."</span>
            </span>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['프로세스개선', '릴리즈노트', '커뮤니케이션'].map((tag, i) => (
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
