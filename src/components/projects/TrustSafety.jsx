export default function TrustSafety() {
	return (
	  <div className="space-y-6">
		{/* 주요 성과 */}
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
		  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
			<div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">60%</div>
			<div className="text-[11px] sm:text-xs text-gray-400">비매너 문의 감소</div>
		  </div>
		  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-lg border border-red-500/20">
			<div className="text-3xl sm:text-4xl font-bold text-red-400 mb-1 sm:mb-2">97.9%</div>
			<div className="text-[11px] sm:text-xs text-gray-400">어뷰저 차단 감소</div>
		  </div>
		</div>

		{/* 프로젝트 개요 */}
		<div>
		  <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
		  <ul className="space-y-2">
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
				법적·정책적 근거가 없던 커뮤니티 비매너 행위에 제재 기준을 직접 세우고, 어뷰징을 판단할 탐지 기준 수립을 주도했습니다.
			  </span>
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
				정책 설계부터 개발팀·Cyber Security팀과의 협업, 모니터링 운영까지 플랫폼 Trust & Safety 체계를 0에서부터 구축했습니다.
			  </span>
			</li>
		  </ul>
		</div>

		{/* Sub-project 1 */}
		<div className="pt-4 border-t border-white/10">
		  <h3 className="text-base font-bold text-white mb-3">커뮤니티 비매너 행위 정책 및 제재 시스템 구축</h3>
		  <div className="space-y-3">
			<div>
			  <h4 className="text-xs font-semibold text-gray-400 mb-1.5">Challenge</h4>
			  <p className="text-gray-300 leading-relaxed">
				초·중·고등학생이 사용하는 플랫폼에서 욕설·비방 등 비매너 문의가 지속 유입됐지만, 제재할 법적·정책적 근거가 없었습니다.
			  </p>
			</div>
			<div>
			  <h4 className="text-xs font-semibold text-gray-400 mb-1.5">Solution</h4>
			  <ul className="space-y-1.5">
				<li className="text-gray-300 flex items-start gap-2">
				  <span className="text-blue-400">•</span>
				  <span className="leading-relaxed">이용약관에서 비매너 행위 금지 조항을 직접 발굴했습니다.</span>
				</li>
				<li className="text-gray-300 flex items-start gap-2">
				  <span className="text-blue-400">•</span>
				  <span className="leading-relaxed">1차 경고 → 2차 경고 → 3차 경고+상담 종료 → 차단으로 이어지는 단계별 경고·차단 프로세스를 설계했습니다.</span>
				</li>
				<li className="text-gray-300 flex items-start gap-2">
				  <span className="text-blue-400">•</span>
				  <span className="leading-relaxed">단계별 경고 메시지 템플릿을 작성하고, 채널 관리자에게 자동 알림이 가는 체계를 설계했습니다.</span>
				</li>
				<li className="text-gray-300 flex items-start gap-2">
				  <span className="text-blue-400">•</span>
				  <span className="leading-relaxed">권한별로 채널톡 노출을 on/off 할 수 있는 기능을 개발팀과 협업해 구현했습니다.</span>
				</li>
			  </ul>
			</div>
			<div>
			  <h4 className="text-xs font-semibold text-gray-400 mb-1.5">Impact</h4>
			  <p className="text-gray-300 leading-relaxed">
				월평균 비매너 문의를 21.7건에서 8.7건으로
				<span className="whitespace-nowrap text-white font-bold ml-1">60% 감소</span>
				{' '}시켰습니다.
			  </p>
			</div>
		  </div>
		</div>

		{/* Sub-project 2 */}
		<div className="pt-4 border-t border-white/10">
		  <h3 className="text-base font-bold text-white mb-3">어뷰징 탐지 기준 수립 및 운영 모니터링</h3>
		  <div className="space-y-3">
			<div>
			  <h4 className="text-xs font-semibold text-gray-400 mb-1.5">Challenge</h4>
			  <p className="text-gray-300 leading-relaxed">
				어뷰저가 서버 자원을 채굴 목적으로 악용하면서 실사용자의 서비스 품질이 저하됐지만, "무엇을 어뷰징으로 볼 것인가" 기준 자체가 없었습니다.
			  </p>
			</div>
			<div>
			  <h4 className="text-xs font-semibold text-gray-400 mb-1.5">Solution</h4>
			  <ul className="space-y-1.5">
				<li className="text-gray-300 flex items-start gap-2">
				  <span className="text-blue-400">•</span>
				  <span className="leading-relaxed">"무엇을 어뷰징으로 볼 것인가"를 이슈라이징해 Cyber Security팀의 탐지 기준 수립을 촉발했습니다.</span>
				</li>
				<li className="text-gray-300 flex items-start gap-2">
				  <span className="text-blue-400">•</span>
				  <span className="leading-relaxed">SMS 인증 도입 후 모니터링 지표를 매일 직접 추적하며 신규 가입 48% 감소 데이터를 발견했습니다.</span>
				</li>
				<li className="text-gray-300 flex items-start gap-2">
				  <span className="text-blue-400">•</span>
				  <span className="leading-relaxed">"수는 줄었지만 질은?"이라는 분석 방향을 제시했습니다.</span>
				</li>
				<li className="text-gray-300 flex items-start gap-2">
				  <span className="text-blue-400">•</span>
				  <span className="leading-relaxed">Case A/B/C 시나리오 프레임워크를 직접 설계해 기술팀이 의사결정할 수 있는 맥락을 만들었습니다.</span>
				</li>
			  </ul>
			</div>
			<div>
			  <h4 className="text-xs font-semibold text-gray-400 mb-1.5">Impact</h4>
			  <p className="text-gray-300 leading-relaxed">
				SMS 인증 도입 전후 동일 기간(7일) 비교 결과, 어뷰저 차단이 190건에서 4건으로
				<span className="whitespace-nowrap text-white font-bold ml-1">97.9% 감소</span>
				{' '}했습니다.
			  </p>
			</div>
		  </div>
		</div>

		{/* Tags */}
		<div className="flex flex-wrap gap-2 pt-4">
		  {['TrustAndSafety', '정책수립', '콘텐츠모니터링'].map((tag, i) => (
			<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
			  #{tag}
			</span>
		  ))}
		</div>
	  </div>
	)
}
