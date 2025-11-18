import ImageGallery from './ImageGallery'
import activation1 from '../../assets/projects/eduactivation/activation1.png'
import activation2 from '../../assets/projects/eduactivation/activation2.png'
import activation3 from '../../assets/projects/eduactivation/activation3.png'
import activation4 from '../../assets/projects/eduactivation/activation4.png'
import activation5 from '../../assets/projects/eduactivation/activation5.png'

export default function EduActivation() {
  const images = [
    { src: activation1, alt: '공지사항', caption: 'EDU 채널 공지 운영' },
    { src: activation2, alt: '장기 미로그인 대상 메일 템플릿', caption: '장기 미로그인 User 대상 리텐션 메일' },
    { src: activation3, alt: '유료 결제 대상 메일 템플릿', caption: '최근 30일 활성 User 대상 리텐션 메일' },
    { src: activation4, alt: '지표 설계1', caption: '매출·과금 지표 설계' },
    { src: activation5, alt: '지표 설계2', caption: 'MAU·WAU·DAU 지표 설계' },
  ]

  const openRate = 16
  const reloginRate = 1.6
  const monthlyUsers = 1500

  return (
    <div className="space-y-6">
      {/* 이미지 갤러리 - 최상단 */}
      <ImageGallery images={images} />

      {/* 주요 성과 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
        <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
          <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">
            {openRate}%
          </div>
          <div className="text-[11px] sm:text-xs text-gray-400">메일 오픈율</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
          <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
            {reloginRate}%
          </div>
          <div className="text-[11px] sm:text-xs text-gray-400">메일 통한 재로그인율</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg border border-purple-500/20">
          <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">
            {monthlyUsers.toLocaleString()}+
          </div>
          <div className="text-[11px] sm:text-xs text-gray-400">월 평균 타깃 유저와의 소통</div>
        </div>
      </div>

      {/* 프로젝트 개요 */}
<div>
  <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
  <ul className="space-y-2">
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span className="leading-relaxed">
        EDU 사용 데이터를 기반으로 월간 리텐션 액션플랜을 설계하고 2024.01부터 운영하고 있습니다.
      </span>
    </li>
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span className="leading-relaxed">
        메일·공지·쿠폰 등 멀티채널을 조합하여 휴면·이탈 위험 유저와의 접점을 만들고 채널 활성화를 목표로 했습니다.
      </span>
    </li>
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span className="leading-relaxed">
        데이터 → 가설 → 실행 → 회고의 월 단위 운영 사이클을 정착시켰습니다.
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
        EDU 채널에 재방문을 유도하는 리텐션 구조가 부재해 신규 유입 이후 “돌아오는 흐름”을 만들기 어려운 상태였습니다.
      </span>
    </li>
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span className="leading-relaxed">
        핵심 지표가 산발적으로 관리되어 타깃·메시지 기준을 설정하기 어려웠기 때문에 리텐션 지표를 재정의하고 대시보드를 설계했습니다.
      </span>
    </li>
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span className="leading-relaxed">
      장기 미로그인 유저와 유료 결제 이력 유저를 타깃으로 세분화하고,
      각 그룹에 맞는 메시지 전략과 메일·공지 카피를 직접 작성했습니다.
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
        외부 마케팅 없이 내부 운영만으로 메일 오픈율 <strong className="text-white whitespace-nowrap">{openRate}%</strong>, 재로그인율 <strong className="text-white whitespace-nowrap">{reloginRate}%</strong> 수준의 리텐션 성과를 확보했습니다.
      </span>
    </li>
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span className="leading-relaxed">
        월 평균 <strong className="text-white whitespace-nowrap">{monthlyUsers.toLocaleString()}명+</strong> 대상 소통 루틴이 구축되었고, EDU 공지는 <strong className="text-white whitespace-nowrap">1,700회+</strong> 조회되며 채널 효과가 강화되었습니다.
      </span>
    </li>
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span className="leading-relaxed">
        “무료 이용 → 쿠폰 → 유료 결제”의 전환 흐름이 완성되었고, 리텐션 논의가 경험이 아닌 데이터 기반으로 전환되었습니다.
      </span>
    </li>
  </ul>
</div>

{/* 월별 개선 사례 */}
<div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
  <h3 className="text-sm font-semibold text-blue-400 mb-3">💡 지속적 개선 사례</h3>
  <ul className="space-y-2 text-sm text-gray-300">

    <li className="flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span>
        <strong className="text-white">메일 제목 개선 & 발송 타이밍 최적화:</strong>{' '}
        브랜드 아이덴티티 반영 및 DAU 기반 월요일 발송 전략으로 오픈율을 높였습니다.
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span>
        <strong className="text-white">강의자 안내 + SNS 공유 유도:</strong>{' '}
        강의자 메시지와 SNS 공유 흐름을 추가해 쿠폰 사용률을 개선했습니다.
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-blue-400">•</span>
      <span>
        <strong className="text-white">타깃 세분화:</strong>{' '}
        최근 30일 활성 유저 타깃팅을 통해 후기 이벤트 첫 참여자가 등장했습니다.
      </span>
    </li>

  </ul>
</div>



      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4">
        {['데이터분석', '리텐션', '그로스', '액션플랜', 'A/B테스트'].map((tag, i) => (
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
