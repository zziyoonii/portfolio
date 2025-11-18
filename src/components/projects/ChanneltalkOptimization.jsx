import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
  } from 'recharts'
  
  export default function ChanneltalkOptimization() {
	// 제품별 구독료 Before / After
	const productCostData = [
	  { name: 'EDU', before: 675147, after: 105600 },
	  { name: 'Channel', before: 1795448, after: 487190 },
	  { name: 'IDE', before: 1369770, after: 265870 },
	]
  
	return (
	  <div 
		className="space-y-6"
		onClick={() => {
			// 플로팅 버튼 표시를 위한 커스텀 이벤트 발생
			window.dispatchEvent(new CustomEvent('imageGalleryButtonClick'))
		}}
		onTouchStart={() => {
			// 모바일 터치 시에도 플로팅 버튼 표시
			window.dispatchEvent(new CustomEvent('imageGalleryButtonClick'))
		}}
	  >
		{/* 상단 산출물: 제품별 구독료 Before / After 그래프 */}
		<div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
		  <h3 className="text-sm font-semibold text-green-400 mb-1">
			💰 제품별 채널톡 구독료 Before / After
		  </h3>
		  <p className="text-xs text-gray-400 mb-3">
			EDU · Channel · IDE 기준, 비용 최적화 전/후 월 구독료 비교
		  </p>

		  <div 
			className="h-56 min-h-[224px]"
			onClick={() => {
				// 플로팅 버튼 표시를 위한 커스텀 이벤트 발생
				window.dispatchEvent(new CustomEvent('imageGalleryButtonClick'))
			}}
			onTouchStart={() => {
				// 모바일 터치 시에도 플로팅 버튼 표시
				window.dispatchEvent(new CustomEvent('imageGalleryButtonClick'))
			}}
		  >
			<ResponsiveContainer width="100%" height="100%" minHeight={224}>
			  <BarChart
				data={productCostData}
				margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
			  >
				<CartesianGrid
				  strokeDasharray="3 3"
				  stroke="rgba(156, 163, 175, 0.3)"
				/>
				<XAxis
				  dataKey="name"
				  stroke="#9CA3AF"
				  tick={{ fontSize: 13 }}
				/>
				<YAxis
				  stroke="#9CA3AF"
				  width={50}
				  tick={{ fontSize: 11 }}
				  tickFormatter={(value) => `${Math.round(value / 10000)}만`}
				/>
				<Tooltip
				  cursor={{ fill: 'rgba(15,23,42,0.8)' }} // 호버 시 생기던 밝은 배경 제거용
				  contentStyle={{
					backgroundColor: '#020617',
					border: '1px solid rgba(34,197,94,0.4)',
					borderRadius: 8,
					fontSize: 12,
				  }}
				  formatter={(value, name) => {
					const label = name === 'before' ? '절감 전' : '절감 후'
					const num = Number(value) || 0
					return [`₩${num.toLocaleString()}`, label]
				  }}
				  labelFormatter={(value) => `제품: ${value}`}
				/>
				<Bar dataKey="before" name="절감 전" fill="#4ADE80" opacity={0.3} />
				<Bar dataKey="after" name="절감 후" fill="#4ADE80" />
			  </BarChart>
			</ResponsiveContainer>
		  </div>
		</div>
  
		{/* 프로젝트 개요 */}
		<div>
		<h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
		<ul className="space-y-2">
			<li className="text-gray-300 flex items-start gap-2">
			<span className="text-blue-400">•</span>
			채널톡 비용 구조를 제품별로 분해하고, 상담량·피크 타임·계정 사용 패턴을 기준으로 최적화 지점을 도출했습니다.
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			<span className="text-blue-400">•</span>
			고객 경험을 유지한 상태에서 요금제·계정 구조·자동화 설정을 단계적으로 조정하는 실험을 설계·리드했습니다.
			</li>
		</ul>
		</div>

		{/* 문제 상황 & 접근 */}
		<div>
		<h3 className="text-sm font-semibold text-gray-400 mb-2">문제 상황 & 접근</h3>
		<ul className="space-y-2">
			<li className="text-gray-300 flex items-start gap-2">
			<span className="text-blue-400">•</span>
			2024년 9월 기준 월 380만 원 수준의 구독료가 유지되고 있었고, 단순 플랜 축소 시 상담 품질 저하와 CS 팀 과부하가 우려되는 상황이었습니다.
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			<span className="text-blue-400">•</span>
			EDU·Channel·IDE별 상담 패턴, 계정/시트 수, 고객 연락처 사용량 등을 정량 분석해 비용을 유발하는 지점을 명확히 정의했습니다.
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			<span className="text-blue-400">•</span>
			계정 구조 조정 → 자동 배정·자동화 룰 조정 → 요금제 단계 조정 순으로 실험을 진행하며, 변경 후 상담 품질을 모니터링해 안정적인 절감 한계선을 탐색했습니다.
			</li>
		</ul>
		</div>

		{/* Impact */}
		<div>
		<h3 className="text-sm font-semibold text-gray-400 mb-2">Impact</h3>
		<ul className="space-y-2">
			<li className="text-gray-300 flex items-start gap-2">
			<span className="text-blue-400">•</span>
			연간 구독료를 약 <strong className="text-white whitespace-nowrap">4,560만 원</strong> → <strong className="text-white whitespace-nowrap">1,020만 원</strong>으로 줄이며 총 <strong className="text-white whitespace-nowrap">77.6%</strong> 비용 절감을 달성했습니다.
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			<span className="text-blue-400">•</span>
			EDU <strong className="text-white whitespace-nowrap">84.3%</strong>, Channel <strong className="text-white whitespace-nowrap">72.9%</strong>, IDE <strong className="text-white whitespace-nowrap">80.6%</strong> 등 제품별 특성에 맞는 절감 기준점을 확보했습니다.
			</li>
			<li className="text-gray-300 flex items-start gap-2">
			<span className="text-blue-400">•</span>
			고객 경험을 유지한 상태로 비용 구조를 재정비하여, 이후 운영·플랜 조정 시 활용할 수 있는 명확한 운영 레퍼런스를 마련했습니다.
			</li>
		</ul>
		</div>


  
		{/* Tags */}
		<div className="flex flex-wrap gap-2 pt-4">
		  {['비용최적화', '데이터분석', '운영전략', '실험설계'].map((tag, i) => (
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
  