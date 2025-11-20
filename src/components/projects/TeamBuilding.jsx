export default function TeamBuilding() {
	return (
	  <div className="space-y-6">
		
		{/* 팀 성장 여정 (산출물 요약 영역) */}
		<div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
		  <h3 className="text-sm font-semibold text-purple-400 mb-3">🚀 팀 성장 여정</h3>
		  <div className="space-y-3 text-sm">
			<div className="flex items-center gap-2 sm:gap-3">
			  <span className="text-gray-400 min-w-[70px] flex-shrink-0">2023.10</span>
			  <span className="text-white">→</span>
			  <span className="text-gray-300 break-words flex-1">1인 체제에서 CX 역할 시작</span>
			</div>
			<div className="flex items-center gap-2 sm:gap-3">
			  <span className="text-gray-400 min-w-[70px] flex-shrink-0">2024.02</span>
			  <span className="text-white">→</span>
			  <span className="text-gray-300 break-words flex-1">첫 팀원 영입 (2인 체제)</span>
			</div>
			<div className="flex items-center gap-2 sm:gap-3">
			  <span className="text-gray-400 min-w-[70px] flex-shrink-0">2024.10</span>
			  <span className="text-white">→</span>
			  <span className="text-gray-300 break-words flex-1">두 번째 팀원 채용 리드 + 리더 승진 (3인 체제)</span>
			</div>
			<div className="flex items-center gap-2 sm:gap-3">
			  <span className="text-gray-400 min-w-[70px] flex-shrink-0">2025.01</span>
			  <span className="text-white">→</span>
			  <span className="text-gray-300 break-words flex-1">팀원 퇴사 (2인 체제)</span>
			</div>
			<div className="flex items-center gap-2 sm:gap-3">
			  <span className="text-gray-400 min-w-[70px] flex-shrink-0">2025.06</span>
			  <span className="text-white">→</span>
			  <span className="text-gray-300 break-words flex-1">신규 팀원 재채용, 3인 체제 재정착</span>
			</div>
		  </div>
		</div>
  
		{/* 프로젝트 개요 */}
		<div>
		  <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
		  <ul className="space-y-2">
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
			    CX 전담 조직이 없는 상태에서 18개월 동안 CX팀을 구축했습니다.
			  </span>
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
			    채용, 온보딩, 업무 루틴, 자동화까지 CX팀이 독립적으로 운영될 수 있는 구조를 설계했습니다.
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
			  기존에 CX팀이 없었기 때문에 역할 정의, 채용 기준, 온보딩 프로세스, 업무 루틴 등 기본 틀이 전혀 없는 상태였습니다.
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  팀 규모 변화(입·퇴사)에도 유지될 수 있는 구조가 필요해 사람 중심이 아닌 ‘시스템 중심’으로 팀을 설계했습니다.
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
			    <strong className="text-white whitespace-nowrap">18개월</strong> 만에 <strong className="text-white whitespace-nowrap">1명</strong> → <strong className="text-white whitespace-nowrap">3인</strong> 팀을 구축했고, 팀원 퇴사 이후에도 동일한 구조로 빠르게 재정비할 수 있었습니다.
			  </span>
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
			    Culture Deck과 운영 룰을 통해 CX팀의 역할과 기대치가 조직 내에서 명확해졌습니다.
			  </span>
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
			    CX 101 워크북과 온보딩 프로그램으로 신규 구성원이 짧은 시간 안에 실무에 안착할 수 있는 기반을 마련했습니다.
			  </span>
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			  <span className="text-blue-400">•</span>
			  <span className="leading-relaxed">
			    전사 고객 커뮤니케이션이 CX팀을 중심으로 통합 관리되는 흐름이 형성되었습니다.
			  </span>
			</li>
		  </ul>
		</div>
  
		{/* Tags */}
		<div className="flex flex-wrap gap-2 pt-4">
		  {['팀빌딩', '리더십', '채용', '문화구축'].map((tag, i) => (
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
  