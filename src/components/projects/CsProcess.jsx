export default function CsProcess() {
	return (
		<div className="space-y-6">
			{/* 프로젝트 개요 */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						alookso 플랫폼 초기 CS 운영 정책과 프로세스 0→1 구축
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						톤앤매너 수립, 카테고리별 분류 기준 설계
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						대응 매뉴얼 기획, 이슈 트래킹 협업 프로세스 구축
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						3,500건 이상의 고객 문의를 효율적으로 처리
					</li>
				</ul>
			</div>

			{/* 주요 성과 - 숫자 카드 유지 */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-3">주요 성과</h3>
				<div className="grid grid-cols-3 gap-3">
					<div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
						<div className="text-4xl font-bold text-blue-400 mb-2">61%</div>
						<div className="text-xs text-gray-400">반복 문의 감소</div>
					</div>
					<div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
						<div className="text-4xl font-bold text-green-400 mb-2">43%</div>
						<div className="text-xs text-gray-400">오류 대응 시간 단축</div>
					</div>
					<div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg border border-purple-500/20">
						<div className="text-4xl font-bold text-purple-400 mb-2">87%</div>
						<div className="text-xs text-gray-400">문의 응대 시간 단축</div>
					</div>
				</div>
				<div className="mt-4 text-center">
					<span className="text-2xl font-bold text-white">3,500+</span>
					<span className="text-gray-400 ml-2">건의 고객 문의 대응</span>
				</div>
			</div>

			{/* Challenge */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						플랫폼 초기 CS 대응 체계 전무
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						운영 정책, 대응 기준, 협업 프로세스 부재
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						고객 문의 폭증에도 체계적 대응 불가
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
							<strong className="text-white">톤앤매너 수립:</strong> 플랫폼 고유의 CS 커뮤니케이션 스타일 정립
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">카테고리 분류 기준 설계:</strong> 문의 유형별 체계적 분류 기준 수립
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">대응 매뉴얼 작성:</strong> 카테고리별 대응 프로세스 문서화
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">이슈 트래킹 시스템:</strong> 내부 조직과의 협업 프로세스 구축
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
						반복 문의 61% 감소 - FAQ 기획 및 관리로 자주 묻는 질문 사전 해결
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						오류 대응 시간 43% 단축 - 이슈 트래킹 프로세스로 빠른 내부 협업
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						문의 응대 시간 87% 단축 - 체계적 매뉴얼로 즉각 대응 가능
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						VoC 데이터 수집 체계 확립 - Sprint 단위 VoC 기반 서비스 개선안 도출
					</li>
				</ul>
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-2 pt-4">
				{['CS', '프로세스', '효율화'].map((tag, i) => (
					<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
						#{tag}
					</span>
				))}
			</div>
		</div>
	)
}