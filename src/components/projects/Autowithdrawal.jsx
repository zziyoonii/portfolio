import ImageGallery from './ImageGallery'
import withdrawal1 from '../../assets/projects/autowithdrawal/withdrawal1.png'
import withdrawal2 from '../../assets/projects/autowithdrawal/withdrawal2.png'
import withdrawal3 from '../../assets/projects/autowithdrawal/withdrawal3.png'

export default function Autowithdrawal() {
  const images = [
    { src: withdrawal1, alt: 'figma 설계 1', caption: 'User 탈퇴 신청 화면 설계' },
    { src: withdrawal2, alt: 'figma 설계 2', caption: 'Admin 탈퇴 처리 화면 설계' },
    { src: withdrawal3, alt: '자동 메일', caption: '탈퇴 자동 메일 기획' },
  ]

  return (
    <div className="space-y-6">
      {/* 이미지 갤러리 - 최상단 */}
      <ImageGallery images={images} />

      {/* 프로젝트 개요 */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              사용자·관리자 양측의 탈퇴 흐름을 Figma로 설계하고,
              전체 처리 과정을 자동화하는 프로세스를 기획했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              수동 처리 과정에서 반복되던 휴먼 에러를 줄이고,
              모든 요청이 동일한 기준으로 처리되도록 탈퇴 정책을 재정립했습니다.
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
              기존 수동 탈퇴 처리에는 영업일 기준 5일 이상이 소요되었고,
              담당자마다 처리 기준과 방식이 달라 휴먼 에러가 반복되는 환경이었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              사용자 흐름·관리자 흐름·자동 메일 발송·내부 로그 기록을
              단일 자동 프로세스로 재구성해, 모든 케이스가 동일한 방식으로 처리되도록 설계했습니다.
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
              전체 프로세스 자동화로 <strong className="text-white">처리 효율이 80% 개선</strong>되었고,
              운영 비용이 자연스럽게 절감되는 구조가 마련되었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              사용자가 요청을 보낸 순간부터 완료까지의 흐름이 투명해졌으며,
              사용자 대기 시간이 <strong className="text-white">95% 단축</strong>되었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              모든 단계가 자동화되면서 <strong className="text-white">휴먼 에러는 0건</strong>으로 제거되었고,
              운영자가 개입하지 않아도 되는 일관된 프로세스가 정착되었습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['자동화', 'UX흐름설계', '프로세스', '정책설계'].map((tag, i) => (
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
