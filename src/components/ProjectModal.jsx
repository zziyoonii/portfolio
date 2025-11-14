import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import VocReport from './projects/VocReport'
import CsProcess from './projects/CsProcess'
import Autowithdrawal from './projects/Autowithdrawal'
import VocBacklog from './projects/VocBacklog'
import ReleaseNote from './projects/ReleaseNote'
import EduActivation from './projects/EduActivation'
import TeamBuilding from './projects/TeamBuilding'
import ChanneltalkOptimization from './projects/ChanneltalkOptimization'	
import CxTranslator from './projects/CxTranslator'

const PROJECT_COMPONENTS = {
  VocReport,
  CsProcess,
  Autowithdrawal,
  VocBacklog,
  ReleaseNote,
  EduActivation,
  TeamBuilding,
  ChanneltalkOptimization,
  CxTranslator
}

export default function ProjectModal({ selectedProject, currentIndex, totalProjects, onClose, onNext, onPrev }) {
  // 기존 키다운 useEffect (그대로 유지)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject, currentIndex, onClose, onNext, onPrev])

  // ← 추가된 부분: 모달 열릴 때 body 스크롤 잠금 (overflow + touch-action)
  useEffect(() => {
    if (!selectedProject) return

    // 이전 상태 저장
    const prevOverflow = document.body.style.overflow
    const prevTouch = document.body.style.touchAction
    const prevPaddingRight = document.body.style.paddingRight

    // 락 걸기: 스크롤 숨김 + iOS 터치제어
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    // optional: 스크롤바 사라질 때 레이아웃 shift 방지 (스크롤바 너비만큼 패딩 보정)
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    return () => {
      // 원복
      document.body.style.overflow = prevOverflow || ''
      document.body.style.touchAction = prevTouch || ''
      document.body.style.paddingRight = prevPaddingRight || ''
    }
  }, [selectedProject])

  if (!selectedProject) return null

  const ProjectContent = selectedProject.component ? PROJECT_COMPONENTS[selectedProject.component] : null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
      >
        {/* 플로팅 이전 버튼 (왼쪽) */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/70 hover:text-white transition-all opacity-60 hover:opacity-100 touch-manipulation"
            aria-label="이전 프로젝트"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        )}

        {/* 플로팅 다음 버튼 (오른쪽) */}
        {currentIndex < totalProjects - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/70 hover:text-white transition-all opacity-60 hover:opacity-100 touch-manipulation"
            aria-label="다음 프로젝트"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        )}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-navy-900 border border-white/20 rounded-xl p-4 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch', // iOS 모멘텀 스크롤
            overscrollBehavior: 'contain', // 부모로 스크롤 전파 차단
          }}
          onWheel={(e) => {
            // 마우스 휠로 스크롤이 들어올 때 내부에서 직접 스크롤 처리
            // e.cancelable 체크를 해서 preventDefault 호출시 경고 방지
            const el = e.currentTarget
            const canScrollUp = el.scrollTop > 0
            const canScrollDown = el.scrollTop + el.clientHeight < el.scrollHeight

            if ((e.deltaY < 0 && canScrollUp) || (e.deltaY > 0 && canScrollDown)) {
              el.scrollTop += e.deltaY
              e.stopPropagation()
              if (e.cancelable) e.preventDefault()
            }
            // 내부에서 더 이상 스크롤 할 수 없으면 부모로 흘려보낼 수 있음
          }}
        >
          {/* X 닫기 버튼 (오른쪽 상단) */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 z-10 p-2 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white/70 hover:text-white transition-colors touch-manipulation"
            aria-label="모달 닫기"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex justify-center items-center mb-4 md:mb-6 pb-3 md:pb-4 border-b border-white/10">
            <div className="text-center">
              <div className="text-xs md:text-sm text-gray-400 mb-1">
                {currentIndex + 1} / {totalProjects}
              </div>
              <div className="text-xs md:text-sm font-semibold text-blue-400 bg-blue-400/10 px-2 md:px-3 py-1 rounded-full">
                {selectedProject.sectionTitle}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
            <p className="text-base md:text-lg text-blue-400 mb-4 md:mb-6">{selectedProject.subtitle}</p>

            {ProjectContent ? (
              <ProjectContent />
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">프로젝트 개요</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">주요 성과</h3>
                  <p className="text-white font-semibold">{selectedProject.metrics}</p>
                </div>

                {selectedProject.details && (
                  <>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h3>
                      <p className="text-gray-300">{selectedProject.details.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Solution</h3>
                      <p className="text-gray-300">{selectedProject.details.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Result</h3>
                      <ul className="space-y-2">
                        {selectedProject.details.result.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                <div className="flex flex-wrap gap-2 pt-4">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>



          {/* 이전/다음 버튼 (맨 아래) */}
          <div className="flex justify-between items-center pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10">
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-white disabled:text-gray-600 disabled:cursor-not-allowed hover:text-blue-400 transition-colors touch-manipulation py-2"
            >
              ← 이전
            </button>

            <button
              onClick={onNext}
              disabled={currentIndex === totalProjects - 1}
              className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-white disabled:text-gray-600 disabled:cursor-not-allowed hover:text-blue-400 transition-colors touch-manipulation py-2"
            >
              다음 →
            </button>
          </div>


        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
