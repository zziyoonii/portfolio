import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'
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
  const modalContentRef = useRef(null)
  const backdropRef = useRef(null)
  const swipeStartX = useRef(null)
  const swipeThreshold = 50 // 최소 스와이프 거리
  const isScrollingRef = useRef(false) // 스크롤 중 플래그
  const lastScrollDirectionRef = useRef(null) // 마지막 스크롤 방향
  const scrollTimeoutRef = useRef(null) // 스크롤 타임아웃
  const accumulatedDeltaXRef = useRef(0) // 누적된 스크롤 값 (트랙패드용)
  const accumulateTimeoutRef = useRef(null) // 누적값 리셋 타임아웃
  
  // 모바일에서 플로팅 버튼 표시/숨김 상태
  const [showFloatingButtons, setShowFloatingButtons] = useState(true)
  const hideButtonsTimeoutRef = useRef(null)

  // 모바일 감지 함수
  const isMobile = () => {
    // 데스크톱에서는 항상 false 반환 (플로팅 버튼이 항상 보이도록)
    if (window.innerWidth >= 768) {
      return false
    }
    // 모바일에서만 터치 지원 여부 확인
    return 'ontouchstart' in window
  }

  // 플로팅 버튼을 숨기는 함수
  const hideFloatingButtons = useCallback(() => {
    if (isMobile()) {
      setShowFloatingButtons(false)
    }
  }, [])

  // 플로팅 버튼을 표시하고 타이머 리셋하는 함수
  const showFloatingButtonsWithReset = useCallback(() => {
    setShowFloatingButtons(true)
    // 기존 타이머 클리어
    if (hideButtonsTimeoutRef.current) {
      clearTimeout(hideButtonsTimeoutRef.current)
    }
    // 모바일에서만 2초 후 버튼 숨김
    if (isMobile()) {
      hideButtonsTimeoutRef.current = setTimeout(() => {
        hideFloatingButtons()
      }, 2000)
    }
  }, [hideFloatingButtons])

  // 프로젝트 변경 시 스크롤을 상단으로 리셋하고 버튼 표시, isScrollingRef 리셋
  useEffect(() => {
    if (modalContentRef.current && selectedProject) {
      modalContentRef.current.scrollTop = 0
      showFloatingButtonsWithReset()
      // currentIndex가 변경되면 isScrollingRef 리셋 (프로젝트 전환이 완료됨)
      // 하지만 충분한 딜레이를 두어 연속 전환 방지
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = null
      }
      // 최소 800ms 딜레이 후 리셋 (연속 스크롤 완전 차단)
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
        scrollTimeoutRef.current = null
      }, 800)
    }
  }, [selectedProject, currentIndex, showFloatingButtonsWithReset])

  // 모달이 열릴 때 버튼 표시
  useEffect(() => {
    if (selectedProject) {
      showFloatingButtonsWithReset()
    } else {
      // 모달이 닫힐 때 타이머 클리어
      if (hideButtonsTimeoutRef.current) {
        clearTimeout(hideButtonsTimeoutRef.current)
        hideButtonsTimeoutRef.current = null
      }
    }
    return () => {
      if (hideButtonsTimeoutRef.current) {
        clearTimeout(hideButtonsTimeoutRef.current)
      }
    }
  }, [selectedProject, showFloatingButtonsWithReset])

  // ImageGallery 버튼 클릭 감지하여 플로팅 버튼 표시
  useEffect(() => {
    if (!selectedProject) return

    const handleImageGalleryButtonClick = () => {
      showFloatingButtonsWithReset()
    }

    // 커스텀 이벤트 리스너 추가
    window.addEventListener('imageGalleryButtonClick', handleImageGalleryButtonClick)
    
    return () => {
      window.removeEventListener('imageGalleryButtonClick', handleImageGalleryButtonClick)
    }
  }, [selectedProject, showFloatingButtonsWithReset])

  // 프로젝트 전환 함수 (매우 강화된 디바운싱)
  const handleNextProject = useCallback(() => {
    // 경계 체크
    if (currentIndex >= totalProjects - 1) {
      return
    }
    
    // 이미 전환 중이면 완전히 무시
    if (isScrollingRef.current) {
      return
    }
    
    // 전환 시작 (즉시 차단)
    isScrollingRef.current = true
    
    // 기존 타이머 클리어
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    // 누적값도 즉시 리셋
    accumulatedDeltaXRef.current = 0
    lastScrollDirectionRef.current = null
    
    // onNext 호출 (이것이 currentIndex를 변경하고, useEffect에서 isScrollingRef가 리셋됨)
    onNext()
    
    // 안전장치: 1000ms 후에도 리셋되지 않았다면 강제 리셋 (매우 긴 시간)
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
      scrollTimeoutRef.current = null
    }, 1000)
  }, [currentIndex, totalProjects, onNext])

  const handlePrevProject = useCallback(() => {
    // 경계 체크
    if (currentIndex <= 0) {
      return
    }
    
    // 이미 전환 중이면 완전히 무시
    if (isScrollingRef.current) {
      return
    }
    
    // 전환 시작 (즉시 차단)
    isScrollingRef.current = true
    
    // 기존 타이머 클리어
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    // 누적값도 즉시 리셋
    accumulatedDeltaXRef.current = 0
    lastScrollDirectionRef.current = null
    
    // onPrev 호출 (이것이 currentIndex를 변경하고, useEffect에서 isScrollingRef가 리셋됨)
    onPrev()
    
    // 안전장치: 1000ms 후에도 리셋되지 않았다면 강제 리셋 (매우 긴 시간)
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
      scrollTimeoutRef.current = null
    }, 1000)
  }, [currentIndex, onPrev])

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return
      if (e.key === 'ArrowLeft') handlePrevProject()
      if (e.key === 'ArrowRight') handleNextProject()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject, handleNextProject, handlePrevProject, onClose])

  // 좌우 스크롤/스와이프로 프로젝트 전환 (이미지 갤러리 제외)
  useEffect(() => {
    if (!selectedProject) return

    // 이미지 갤러리 내부인지 확인하는 함수
    const isInImageGallery = (x, y) => {
      const imageGallery = document.querySelector('.overflow-x-auto.snap-x')
      if (!imageGallery) return false
      
      const galleryRect = imageGallery.getBoundingClientRect()
      return (
        x >= galleryRect.left &&
        x <= galleryRect.right &&
        y >= galleryRect.top &&
        y <= galleryRect.bottom
      )
    }

    // 마우스 휠/트랙패드 스크롤 핸들러 (강화된 디바운싱)
    const handleWheel = (e) => {
      if (!selectedProject) return
      
      // 버튼에서 발생한 이벤트는 완전히 무시 (preventDefault 호출하지 않음)
      const target = e.target
      if (target && (target instanceof HTMLElement)) {
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          return
        }
      }
      
      // ImageGallery 내부의 버튼 영역도 체크
      const buttonElement = e.target.closest('button')
      if (buttonElement && (buttonElement.closest('.overflow-x-auto.snap-x') || buttonElement.closest('[data-page]'))) {
        return
      }
      
      // 이미 전환 중이면 완전히 무시 (중요!)
      if (isScrollingRef.current) {
        return
      }
      
      const deltaX = e.deltaX
      const deltaY = e.deltaY
      
      // 좌우 스크롤인지 확인: deltaX가 deltaY보다 2배 이상 크면 좌우 스크롤로 간주
      if (Math.abs(deltaX) === 0 || Math.abs(deltaY) > Math.abs(deltaX) * 2) {
        // 상하 스크롤이면 누적값 리셋
        accumulatedDeltaXRef.current = 0
        return
      }
      
      // 이미지 갤러리 내부면 무시 (스크롤 컨테이너 포함)
      if (isInImageGallery(e.clientX, e.clientY)) {
        accumulatedDeltaXRef.current = 0
        return
      }
      
      // ImageGallery의 스크롤 컨테이너 내부인지 확인
      const imageGalleryScrollContainer = e.target.closest('.overflow-x-auto.snap-x')
      if (imageGalleryScrollContainer) {
        accumulatedDeltaXRef.current = 0
        return
      }
      
      // 터치/스크롤 액션이 있으면 버튼 표시
      showFloatingButtonsWithReset()
      
      // 스크롤 방향 확인
      const scrollDirection = deltaX > 0 ? 'right' : 'left'
      
      // 방향이 변경되면 누적값 리셋
      if (lastScrollDirectionRef.current && lastScrollDirectionRef.current !== scrollDirection) {
        accumulatedDeltaXRef.current = 0
        if (accumulateTimeoutRef.current) {
          clearTimeout(accumulateTimeoutRef.current)
          accumulateTimeoutRef.current = null
        }
      }
      
      lastScrollDirectionRef.current = scrollDirection
      
      // 스크롤 값 누적
      accumulatedDeltaXRef.current += deltaX
      
      // 누적값 자동 리셋 타임아웃 (800ms)
      if (accumulateTimeoutRef.current) {
        clearTimeout(accumulateTimeoutRef.current)
      }
      accumulateTimeoutRef.current = setTimeout(() => {
        accumulatedDeltaXRef.current = 0
        accumulateTimeoutRef.current = null
      }, 800)
      
      // threshold 체크 (매우 높은 값으로 설정 - 한 번에 하나씩만)
      const accumulatedThreshold = 100 // 누적 threshold (트랙패드용) - 매우 높음
      const singleEventThreshold = 100 // 단일 이벤트 threshold (마우스 휠용) - 매우 높음
      
      const shouldNavigate = Math.abs(accumulatedDeltaXRef.current) >= accumulatedThreshold || 
                            Math.abs(deltaX) >= singleEventThreshold
      
      if (!shouldNavigate) {
        return
      }
      
      // preventDefault (모든 후속 이벤트 차단)
      if (e.cancelable) {
        e.preventDefault()
      }
      
      // 프로젝트 전환 (누적값 기준으로 판단 - 더 정확함)
      const shouldGoNext = accumulatedDeltaXRef.current > 0
      
      // 누적값 즉시 리셋 (전환 전에 리셋하여 중복 전환 완전 방지)
      accumulatedDeltaXRef.current = 0
      if (accumulateTimeoutRef.current) {
        clearTimeout(accumulateTimeoutRef.current)
        accumulateTimeoutRef.current = null
      }
      
      // lastScrollDirection도 리셋하여 즉시 재전환 방지
      lastScrollDirectionRef.current = null
      
      // 프로젝트 전환
      if (shouldGoNext) {
        handleNextProject()
      } else {
        handlePrevProject()
      }
    }

    // 터치 스와이프 핸들러
    const handleTouchStart = (e) => {
      if (!selectedProject) return
      
      // 터치 액션이 있으면 버튼 표시
      showFloatingButtonsWithReset()
      
      const touch = e.touches[0]
      if (!isInImageGallery(touch.clientX, touch.clientY)) {
        swipeStartX.current = touch.clientX
      }
    }

    const handleTouchMove = (e) => {
      if (!selectedProject) return
      
      const touch = e.touches[0]
      if (isInImageGallery(touch.clientX, touch.clientY)) {
        swipeStartX.current = null
      }
    }

    const handleTouchEnd = (e) => {
      if (!selectedProject) return
      if (swipeStartX.current === null) return
      
      const touch = e.changedTouches[0]
      if (isInImageGallery(touch.clientX, touch.clientY)) {
        swipeStartX.current = null
        return
      }
      
      const swipeEndX = touch.clientX
      const swipeDistance = swipeStartX.current - swipeEndX
      
      // 최소 스와이프 거리 체크
      if (Math.abs(swipeDistance) < swipeThreshold) {
        swipeStartX.current = null
        return
      }
      
      // 경계 체크
      if ((swipeDistance > 0 && currentIndex >= totalProjects - 1) || 
          (swipeDistance < 0 && currentIndex <= 0)) {
        swipeStartX.current = null
        return
      }
      
      // 프로젝트 전환
      if (swipeDistance > 0) {
        handleNextProject()
      } else {
        handlePrevProject()
      }
      
      swipeStartX.current = null
    }

    // 모달 배경과 컨텐츠 모두에 이벤트 리스너 추가
    // 캡처링 단계에서 이벤트를 처리하여 자식 요소의 스크롤과 충돌하지 않도록 함
    const backdrop = backdropRef.current
    const modalContent = modalContentRef.current
    
    if (backdrop) {
      backdrop.addEventListener('wheel', handleWheel, { passive: false, capture: true })
      backdrop.addEventListener('touchstart', handleTouchStart, { passive: true, capture: true })
      backdrop.addEventListener('touchmove', handleTouchMove, { passive: true, capture: true })
      backdrop.addEventListener('touchend', handleTouchEnd, { passive: true, capture: true })
    }
    
    // 모달 컨텐츠에도 이벤트 리스너 추가 (트랙패드 대응)
    // 캡처링 단계에서 처리하여 내부 스크롤과 충돌하지 않도록 함
    if (modalContent) {
      modalContent.addEventListener('wheel', handleWheel, { passive: false, capture: true })
    }
    
    // window 레벨에서도 이벤트 감지 (모달이 열려있을 때만)
    window.addEventListener('wheel', handleWheel, { passive: false, capture: true })

    return () => {
      if (backdrop) {
        backdrop.removeEventListener('wheel', handleWheel, { capture: true })
        backdrop.removeEventListener('touchstart', handleTouchStart, { capture: true })
        backdrop.removeEventListener('touchmove', handleTouchMove, { capture: true })
        backdrop.removeEventListener('touchend', handleTouchEnd, { capture: true })
      }
      if (modalContent) {
        modalContent.removeEventListener('wheel', handleWheel, { capture: true })
      }
      window.removeEventListener('wheel', handleWheel, { capture: true })
      // 클린업 시 타임아웃 정리
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = null
      }
      if (accumulateTimeoutRef.current) {
        clearTimeout(accumulateTimeoutRef.current)
        accumulateTimeoutRef.current = null
      }
    }
  }, [selectedProject, currentIndex, totalProjects, handleNextProject, handlePrevProject, showFloatingButtonsWithReset])

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
    <motion.div
      ref={backdropRef}
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
              handlePrevProject()
              showFloatingButtonsWithReset()
            }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-[60] p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-md text-white transition-all opacity-90 hover:opacity-100 touch-manipulation shadow-xl border border-white/20"
            style={{ 
              opacity: showFloatingButtons || !isMobile() ? 1 : 0,
              pointerEvents: 'auto',
              visibility: showFloatingButtons || !isMobile() ? 'visible' : 'hidden'
            }}
            aria-label="이전 프로젝트"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        )}

        {/* 플로팅 다음 버튼 (오른쪽) */}
        {currentIndex < totalProjects - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNextProject()
              showFloatingButtonsWithReset()
            }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-[60] p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-md text-white transition-all opacity-90 hover:opacity-100 touch-manipulation shadow-xl border border-white/20"
            style={{ 
              opacity: showFloatingButtons || !isMobile() ? 1 : 0,
              pointerEvents: 'auto',
              visibility: showFloatingButtons || !isMobile() ? 'visible' : 'hidden'
            }}
            aria-label="다음 프로젝트"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        )}

        <motion.div
          ref={modalContentRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => {
            // 버튼 클릭은 전파 허용 (ImageGallery 버튼이 작동하도록)
            if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
              e.stopPropagation()
            }
            showFloatingButtonsWithReset()
          }}
          onTouchStart={(e) => {
            // 버튼 터치는 전파 허용
            if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
              showFloatingButtonsWithReset()
            }
          }}
          className="relative bg-navy-900 border border-white/20 rounded-xl p-4 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-hide mx-16 md:mx-20"
          style={{
            WebkitOverflowScrolling: 'touch', // iOS 모멘텀 스크롤
            overscrollBehavior: 'contain', // 부모로 스크롤 전파 차단
          }}
        >
          {/* X 닫기 버튼 (오른쪽 상단) */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 z-10 p-2 rounded-full bg-navy-900/80 hover:bg-navy-900 active:bg-navy-800 text-white/70 hover:text-white active:text-white transition-colors touch-manipulation"
            aria-label="모달 닫기"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex justify-center items-center mb-4 md:mb-6 pb-3 md:pb-4 border-b border-white/10">
            <div className="text-center w-full px-2">
              <div className="text-xs md:text-sm text-gray-400 mb-1">
                {currentIndex + 1} / {totalProjects}
              </div>
              <div className="text-[10px] md:text-sm font-semibold text-blue-400 bg-blue-400/10 px-1.5 md:px-3 py-0.5 md:py-1 rounded-full inline-block max-w-full break-words">
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

        </motion.div>
      </motion.div>
  )
}
