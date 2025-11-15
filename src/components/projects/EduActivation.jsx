import ImageGallery from './ImageGallery'
import activation1 from '../../assets/projects/eduactivation/activation1.png'
import activation2 from '../../assets/projects/eduactivation/activation2.png'
import activation3 from '../../assets/projects/eduactivation/activation3.png'
import activation4 from '../../assets/projects/eduactivation/activation4.png'
import activation5 from '../../assets/projects/eduactivation/activation5.png'

export default function EduActivation() {
  const images = [
    { src: activation1, alt: '공지사항', caption: 'EDU 채널 공지 운영' },
    { src: activation2, alt: '장기 미로그인 대상 메일 템플릿', caption: '장기 미로그인 대상 리텐션 메일' },
    { src: activation3, alt: '유료 결제 대상 메일 템플릿', caption: '유료 결제 유저 대상 리텐션 메일' },
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
          <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">{openRate}%</div>
          <div className="text-[11px] sm:text-xs text-gray-400">메일 오픈율 평균 유지</div>
        </div>
        <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
          <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">{reloginRate}%</div>
          <div className="text-[11px] sm:text-xs text-gray-400">메일 통한 재로그인율 확보</div>
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
              EDU 채널 사용 데이터를 분석해 월간 리텐션 액션플랜을 수립하고,
              6개월간(2024.01~06) 실행·운영했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              메일, 공지사항, 쿠폰을 조합해 휴면·이탈 위험 유저와의 접점을 만들고,
              EDU 채널의 활성도를 높이는 것을 목표로 했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              데이터 → 가설 → 실행 → 측정 → 개선의 루프를 월 단위로 반복하는
              운영 구조를 정착시켰습니다.
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
              EDU 채널의 사용률이 낮고, 신규 유입 이후 재방문과 활성화를 전담하는
              리텐션 채널이 없는 상태였습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              주요 지표가 산발적으로 관리되어, 어떤 유저를 어떤 메시지로
              설득해야 하는지 일관된 기준을 세우기 어려웠습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              이를 해결하기 위해 리텐션 관련 지표 체계를 정리하고,
              Tableau 기반 EDU 리텐션 대시보드를 설계해 운영 지표를 한 곳에서
              모니터링할 수 있도록 했습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* Solution */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Solution</h3>
        <ul className="space-y-2">
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <strong className="text-white">월간 액션플랜 수립:</strong>{' '}
              DAU·WAU·결제 데이터를 분석해 타깃·메시지·채널을 정의하고,
              가설 설정 → 실행 → 성과 측정 → 개선의 사이클을 월 단위로 운영했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <strong className="text-white">멀티채널 접근:</strong>{' '}
              장기 미로그인 유저 대상 메일, EDU 채널 공지(NEW 뱃지·시즌성 제목),
              EDU 전용 쿠폰 발급 등을 조합해 접점을 확장했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <strong className="text-white">타깃 세분화:</strong>{' '}
              최근 30일 활성 유저, 장기 미로그인 유저, 유료 결제 이력 유저 등
              상태별 타깃을 구분해 메시지와 오퍼를 달리했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              <strong className="text-white">지표·대시보드 설계:</strong>{' '}
              MAU·WAU·DAU, 매출, 결제 전환 등 핵심 지표를 정리하고,
              Tableau 기반 리텐션 대시보드를 설계해 실시간으로 추적할 수 있도록 했습니다.
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
              외부 마케팅 없이 내부 운영만으로 메일 오픈율{' '}
              <strong className="text-white">{openRate}%</strong>, 재로그인율{' '}
              <strong className="text-white">{reloginRate}%</strong> 수준의
              리텐션 채널을 확보했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              월 평균{' '}
              <strong className="text-white">
                {monthlyUsers.toLocaleString()}명+
              </strong>{' '}
              을 대상으로 EDU 채널에서 지속적으로 소통하는 루틴이 만들어졌고,
              4월 EDU 공지는 1,700회 이상 조회되는 등 공지 채널의 효과가
              가시화되었습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              EDU 전용 쿠폰 발급과 메일·공지 연계를 통해
              “무료 이용 → 쿠폰 사용 → 유료 결제”로 이어지는 전환 흐름을 구축했습니다.
            </span>
          </li>
          <li className="text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span className="leading-relaxed">
              리텐션 관련 의사결정이 담당자 경험이 아니라
              데이터와 월간 리포트에 기반해 이뤄지는 구조가 정착되었습니다.
            </span>
          </li>
        </ul>
      </div>

      {/* 월별 개선 사례 */}
		<div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
		<h3 className="text-sm font-semibold text-blue-400 mb-3">💡 지속적 개선 사례</h3>
		<div className="space-y-3 text-sm text-gray-300">

			<div>
			<div className="text-white font-semibold mb-1">2월 · 메일 제목 개선</div>
			<div>브랜드 아이덴티티 반영 → <strong className="text-white">오픈율 상승</strong></div>
			</div>

			<div>
			<div className="text-white font-semibold mb-1">3월 · 강의자 대상 안내 추가</div>
			<div>SNS 공유 유도 → <strong className="text-white">쿠폰 사용률 증가</strong></div>
			</div>

			<div>
			<div className="text-white font-semibold mb-1">4월 · 타깃 세분화</div>
			<div>최근 30일 활성 유저 타깃팅 → <strong className="text-white">후기 이벤트 첫 참여자 등장</strong></div>
			</div>

			<div>
			<div className="text-white font-semibold mb-1">5월 · 발송 타이밍 최적화</div>
			<div>평일 DAU 분석 → <strong className="text-white">월요일 발송으로 개선</strong></div>
			</div>

		</div>
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
