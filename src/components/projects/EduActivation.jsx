import ImageGallery from './ImageGallery'
import activation1 from '../../assets/projects/eduactivation/activation1.png'
import activation2 from '../../assets/projects/eduactivation/activation2.png'   
import activation3 from '../../assets/projects/eduactivation/activation3.png'
import activation4 from '../../assets/projects/eduactivation/activation4.png'
import activation5 from '../../assets/projects/eduactivation/activation5.png'

export default function EduActivation() {
	const images = [
		{ src: activation1, alt: '공지사항', caption: '공지사항' },
		{ src: activation2, alt: '장기 미로그인 대상 메일 템플릿', caption: '장기 미로그인 대상 리텐션 메일' },
		{ src: activation3, alt: '유료 결제 대상 메일 템플릿', caption: '유료 결제 대상 리텐션 메일' },
		{ src: activation4, alt: '지표 설계1', caption: '매출 지표 설계' },
		{ src: activation5, alt: '지표 설계2', caption: 'MAU, WAU, DAU 지표 설계' },
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
						사용 데이터 분석 기반 월간 액션플랜 수립 및 실행
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						메일 발송, 공지사항, 쿠폰 전략으로 리텐션 확보
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						6개월간 지속적인 개선 사이클 운영 (2024.01~06)
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						데이터 → 가설 → 실행 → 측정 → 개선의 반복
					</li>
				</ul>
			</div>

			{/* 주요 성과 */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">주요 성과</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						메일 오픈율 평균 16% 유지
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						메일 통한 재로그인율 1.6% 확보
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						월 평균 1,500명 대상 소통
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						매월 1건 이상 쿠폰 사용 → 유료 결제 전환
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						4월 공지 조회수 1,700+건
					</li>
				</ul>
			</div>

			{/* Challenge */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						EDU 채널 사용률 저조 및 리텐션 채널 부재
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						신규 유입 대비 활성 전환율 낮음
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						데이터가 산발적으로 관리되어 매번 수동으로 확인
					</li>
				</ul>
			</div>

			{/* Solution */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Solution</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">월간 액션플랜 수립:</strong> 데이터 분석 → 가설 수립 → 실행 → 성과 측정 →
							개선의 반복 사이클
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">멀티채널 접근:</strong> 메일(매월 9일 발송), 공지사항(NEW 뱃지, 시즌성
							제목), 쿠폰(전용 쿠폰 발급)
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">타깃 세분화:</strong> 최근 30일 활성 유저 대상 맞춤 커뮤니케이션
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">지속적 개선:</strong> 월별 성과 분석 기반 메일 제목, 발송 타이밍, 콘텐츠
							최적화
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">대시보드 설계:</strong> Tableau 기반 EDU 리텐션 대시보드 설계로 실시간 지표
							모니터링 체계 구축
						</span>
					</li>
				</ul>
			</div>

			{/* Result */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Result</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						외부 홍보 없이 내부 운영만으로 실질적 결과 도출
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						월간 루틴으로 정착하여 지속 가능한 운영 체계 확립
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						메일 오픈율 16% 유지, 재로그인율 1.6% 확보로 리텐션 채널 확대
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						쿠폰 사용 → 유료 결제 전환 흐름 구축 (매월 1건 이상)
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						데이터 기반 의사결정 문화 정착 및 실시간 모니터링 체계 구축
					</li>
				</ul>
			</div>

			{/* 월별 개선 사례 */}
			<div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
				<h3 className="text-sm font-semibold text-blue-400 mb-3">💡 지속적 개선 사례</h3>
				<div className="space-y-3 text-sm">
					<div>
						<div className="text-white font-semibold mb-1">2월: 메일 제목 개선</div>
						<div className="text-gray-300">브랜드 아이덴티티 반영 → 오픈율 상승</div>
					</div>
					<div>
						<div className="text-white font-semibold mb-1">3월: 강의자 대상 메일 추가</div>
						<div className="text-gray-300">SNS 공유 유도 → 쿠폰 사용률 증가</div>
					</div>
					<div>
						<div className="text-white font-semibold mb-1">4월: 타깃 세분화</div>
						<div className="text-gray-300">최근 30일 활성 유저 대상 → 후기 이벤트 첫 참여자 등장</div>
					</div>
					<div>
						<div className="text-white font-semibold mb-1">5월: 발송 타이밍 최적화</div>
						<div className="text-gray-300">평일 DAU 분석 → 월요일 발송으로 개선</div>
					</div>
				</div>
			</div>
			{/* Tags */}
			<div className="flex flex-wrap gap-2 pt-4">
				{['데이터분석', '리텐션', '그로스', '액션플랜', 'A/B테스트'].map((tag, i) => (
					<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
						#{tag}
					</span>
				))}
			</div>
		</div>
	)
}