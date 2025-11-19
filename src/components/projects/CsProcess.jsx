export default function CsProcess() {
	return (
	  <div className="space-y-6">
		{/* 주요 성과 - 숫자 카드 유지 */}
		<div>
		  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
			<div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
			  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">61%</div>
			  <div className="text-[11px] sm:text-xs text-gray-400">반복 문의 감소</div>
			</div>
			<div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
			  <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-1 sm:mb-2">43%</div>
			  <div className="text-[11px] sm:text-xs text-gray-400">오류 대응 시간 단축</div>
			</div>
			<div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg border border-purple-500/20">
			  <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">87%</div>
			  <div className="text-[11px] sm:text-xs text-gray-400">문의 응대 시간 단축</div>
			</div>
		  </div>
		  <div className="mt-3 sm:mt-4 text-center">
			<span className="text-xl sm:text-2xl font-bold text-white">3,500+</span>
			<span className="text-gray-400 ml-2 text-sm sm:text-base">건의 고객 문의 대응</span>
		  </div>
		</div>
  
		{/* 프로젝트 개요 */}
		<div>
		  <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
		  <ul className="space-y-2">
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
			    alookso 플랫폼 초기 CS 운영 정책과 프로세스를 <span className="whitespace-nowrap">0→1</span>에서 설계·구축했습니다.
			  </span>
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
			    톤앤매너, 문의 카테고리 기준, 대응 매뉴얼, 이슈 트래킹 협업 흐름까지 CS 전반 구조를 정의했습니다.
			  </span>
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
			    3,500건 이상의 고객 문의를 동일한 기준과 프로세스로 처리하는 체계를 만들었습니다.
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
			  플랫폼 초기에는 CS 대응 체계와 운영 정책이 없어, 문의 급증 상황에서도 케이스 별 대응에 그치고 있었습니다.
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  CS 히스토리를 자산화하기 위해 톤앤매너·카테고리 기준·대응 매뉴얼·이슈 트래킹을 하나의 프로세스로 설계하고,
			  팀이 그대로 사용할 수 있도록 문서화했습니다.
			</li>
		  </ul>
		</div>
  
{/* Impact */}
<div>
  <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
  <ul className="space-y-2">

    {/* 반복 문의 61% 감소 */}
    <li className="text-gray-300 flex items-start gap-2">
		<span className="text-blue-400 mt-[2px]">•</span>
		<p className="leading-relaxed">
			FAQ를 설계·운영해 자주 묻는 질문을 사전에 안내하며 반복 문의를
			<span className="whitespace-nowrap text-white font-bold ml-1">
			61%
			</span>
			{' '}줄였습니다.
		</p>
	</li>

    {/* 오류 대응 시간 43% 단축 */}
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400 mt-[2px]">•</span>
      <p className="leading-relaxed">
        이슈 트래킹 프로세스를 구축해 전달·처리 흐름을 단순화하고 오류 대응 시간을
        <span className="whitespace-nowrap text-white font-bold ml-1">
          43%
        </span>
        {' '}단축했습니다.
      </p>
    </li>

    {/* 문의 응대 시간 87% 단축 */}
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400 mt-[2px]">•</span>
      <p className="leading-relaxed">
        카테고리 별 매뉴얼과 템플릿을 정비해 즉각 대응 가능한 상태를 만들고 문의 응대 시간을
        <span className="whitespace-nowrap text-white font-bold ml-1">
          87%
        </span>
        {' '}단축했습니다.
      </p>
    </li>

    {/* 프로세스 기반 운영 전환 */}
    <li className="text-gray-300 flex items-start gap-2">
      <span className="text-blue-400 mt-[2px]">•</span>
      <p className="leading-relaxed">
        VoC 수집·정리 체계를 마련해 Sprint 단위 VoC 기반 서비스 개선 논의가 가능해졌고,
        CS 운영이 개인 역량 의존에서 프로세스 기반 운영으로 전환되는 기반을 만들었습니다.
      </p>
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
  