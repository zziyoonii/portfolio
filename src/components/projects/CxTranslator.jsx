import ImageGallery from './ImageGallery'
import cxTranslator1 from '../../assets/projects/cxtranslator/cxteamclone.png'

export default function CxTranslator() {
	const images = [
		{ src: cxTranslator1, alt: 'CX Translator', caption: '서비스 화면' },
	]

	return (
		<div className="space-y-6">
			{/* 이미지 갤러리 - 최상단 */}
			<ImageGallery images={images} />

			{/* 주요 성과 */}
			<div>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						🏆 사내 아이디어톤 선정 (2024.07 주제 : 업무 효율성 개선)
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						Claude, Cursor, ChatGPT 등 AI 도구를 조합하여 2-3일 만에 MVP 개발 및 배포
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						개발자의 답변 작성 시간 50% 단축
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						일관된 고객 커뮤니케이션 톤 유지
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						개발자-고객 간 소통 장벽 해소
					</li>
				</ul>
			</div>

			{/* 서비스 링크 */}
			<div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
				<div className="flex items-center justify-between">
					<div>
						<div className="text-sm font-semibold text-blue-400 mb-1">🔗 실제 서비스</div>
						<div className="text-sm text-gray-300">현재 운영 중인 도구를 직접 확인해보세요</div>
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
						개발자가 사용하는 기술 용어를 고객이 이해하기 쉬운 언어로 자동 변환하는 AI 기반 도구를 개발
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						Claude API를 활용하여 구름 CX팀의 톤앤매너를 학습시키고, 3가지 톤 옵션(기본형, 간결형, 정중형)을 제공
					</li>
				</ul>
			</div>

			{/* 변환 예시 */}
			<div className="bg-navy-800/50 border border-white/10 rounded-lg p-4">
				<h3 className="text-sm font-semibold text-gray-400 mb-3">💬 변환 예시</h3>
				<div className="space-y-3">
					<div className="text-sm text-gray-300">
						<div className="text-xs text-red-400 font-semibold mb-1">개발자 입력 (Before)</div>
						"API 호출 시 authentication token이 만료되어 401 에러가 발생했습니다. 토큰을 refresh 하시거나 다시 로그인해주세요."
					</div>

					<div className="flex justify-center text-blue-400 text-base">↓</div>

					<div className="text-sm text-gray-300">
						<div className="text-xs text-green-400 font-semibold mb-1">고객 친화적 표현 (After)</div>
						"로그인 정보의 유효기간이 지나서 접속이 안 되고 있어요. 다시 로그인하시거나 앱을 껐다 켜시면 해결됩니다."
					</div>
				</div>
			</div>

			{/* Challenge */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						개발자의 기술적 설명을 고객이 이해하지 못하는 문제가 반복적으로 발생했고, 고객 응대에 익숙하지 않은 개발자는 소통에 스트레스를 받았습니다.
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						일관성 없는 커뮤니케이션 톤도 문제였습니다.
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
							<strong className="text-white">AI 기반 번역 엔진:</strong> Claude API로 기술 용어를 고객 친화적 표현으로
							자동 변환
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">3가지 톤 옵션:</strong> 기본형(친근), 간결형(핵심만), 정중형(공식적)
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">CX 톤앤매너 학습:</strong> 구름 CX팀의 커뮤니케이션 가이드라인 반영
						</span>
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						<span>
							<strong className="text-white">웹 기반 도구:</strong> React + Vercel로 배포하여 언제 어디서나 접근 가능
						</span>
					</li>
				</ul>
			</div>

			{/* 주요 기능 */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">주요 기능</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						기술 용어 자동 변환 (API, 토큰, 캐시, HTTP 에러 등)
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						톤앤매너 최적화 (공감 표현, 존댓말, 정중한 어투)
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						답변 완성도 체크 (인사, 공감, 해결책, 마무리)
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						변환 히스토리 저장 (LocalStorage)
					</li>
				</ul>
			</div>

			{/* Result */}
			<div>
				<h3 className="text-sm font-semibold text-gray-400 mb-2">Result</h3>
				<ul className="space-y-2">
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						2-3일 만에 MVP 개발 및 배포 완료
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						답변 작성 시간 50% 단축
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						일관된 고객 커뮤니케이션 톤 유지
					</li>
					<li className="text-gray-300 flex items-start gap-2">
						<span className="text-blue-400">•</span>
						개발자-고객 간 소통 장벽 해소
					</li>
				</ul>
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-2 pt-4">
				{['AI활용', '커뮤니케이션', 'CX디자인', '개발자도구'].map((tag, i) => (
					<span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
						#{tag}
					</span>
				))}
			</div>
		</div>
	)
}