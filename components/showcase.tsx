'use client'

import * as React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { EffectCards, Autoplay } from 'swiper/modules'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import CircularProgress from '@/components/ui/circular-progress'

import 'swiper/css'
import 'swiper/css/effect-cards'

const slides = [
  {
    headline: 'Omni-channel AI interaction enables Property Owners to chat with Tenants across SMS, email, web, and mobile app',
    project: 'Hominy AI',
    image: '/projects/hominy-appearance_proj.png',
    alt: 'Hominy AI',
  },
  {
    headline: 'Coffee compendium in your pocket: Cafe-driven monetization model with unique features like Smart Parking',
    project: 'Local Bean',
    image: '/projects/lb_show.png',
    alt: 'Local Bean',
  },
  {
    headline: 'Over 50% raise in layout design speed, with improved developer handoff',
    project: 'US Army: ATIS Design System',
    image: '/projects/ATIS_proj.png',
    alt: 'ATIS Design System',
  },
  {
    headline: '500% faster FAA airspace approval for first-responder drone pilots, with enhanced touchless SGI waiver submission',
    project: 'Faaviator',
    image: '/projects/faa_proj.png',
    alt: 'Faaviator',
  },
  {
    headline: 'Cross-platform, documentation-fueled project management tool for teams of any size',
    project: 'Grokadoc',
    image: '/projects/grok_proj.png',
    alt: 'Grokadoc',
  },
  {
    headline: 'Using reward systems to gamify traditional Pomodoro focus technique',
    project: 'Dedoro',
    image: '/projects/dedoro_proj.png',
    alt: 'Dedoro',
  },
  {
    headline: 'Gamifying science-backed and heart-focused exercise: Exploring unique controls for kinetic environments',
    project: 'HeartHero Fitness',
    image: '/projects/hearthero_proj.png',
    alt: 'HeartHero Fitness',
  },
]

export default function Showcase() {
  const [isReady, setIsReady] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [isHoveringDial, setIsHoveringDial] = React.useState(false)
  const [autoplayPct, setAutoplayPct] = React.useState(100)
  const swiperRef = React.useRef<SwiperType | null>(null)

  React.useEffect(() => {
    const preloadAll = async () => {
      await Promise.all(
        slides
          .filter(s => s.image)
          .map(
            s =>
              new Promise<void>(resolve => {
                const img = new window.Image()
                img.onload = () => resolve()
                img.onerror = () => resolve()
                img.src = s.image
              })
          )
      )
      setTimeout(() => setIsReady(true), 250)
      setTimeout(() => setIsVisible(true), 350)
    }
    preloadAll()
  }, [])

  function handlePlayPause() {
    if (!swiperRef.current) return
    if (swiperRef.current.autoplay.running) {
      swiperRef.current.autoplay.stop()
    } else {
      swiperRef.current.autoplay.start()
    }
    setIsPaused(p => !p)
  }

  function handleNext() {
    swiperRef.current?.slideNext()
  }

  function handlePrev() {
    swiperRef.current?.slidePrev()
  }

  if (!isReady) {
    return (
      <div className="min-h-[35rem] rounded-2xl bg-muted animate-pulse" />
    )
  }

  return (
    <div
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
    >
      <Swiper
        modules={[EffectCards, Autoplay]}
        effect="cards"
        cardsEffect={{
          perSlideOffset: 7,
          perSlideRotate: 0.35,
          slideShadows: true,
          rotate: true,
        }}
        grabCursor
        centeredSlides
        slidesPerView={1}
        loop
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        onSwiper={swiper => {
          swiperRef.current = swiper
        }}
        onAutoplayTimeLeft={(_, _timeLeft, percentage) => {
          setAutoplayPct(Math.round(percentage * 100) - 10)
        }}
        onRealIndexChange={swiper => setCurrentSlide(swiper.realIndex)}
        speed={600}
        style={{ overflow: 'visible' }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="rounded-2xl border border-border/50 overflow-hidden"
          >
            <div className="min-h-[35rem] w-full flex relative bg-muted">
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 820px) 100vw, 820px"
                  priority={i === 0}
                  quality={90}
                  unoptimized
                />
              )}

              {/* Gradient overlay — matches original exactly */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(137,142,158,0) 50%, rgba(54,57,66,0.50) 80%, #202125 100%)',
                }}
              />

              {i === currentSlide && (
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end gap-4 text-white max-sm:flex-col max-sm:p-4">
                  {/* Text */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-narrow uppercase text-[11px] tracking-widest text-white/55">
                      {slide.project}
                    </span>
                    <h2
                      className="font-heading text-xl sm:text-2xl font-normal leading-snug text-white max-w-[30ch]"
                      style={{ textWrap: 'balance' } as React.CSSProperties}
                    >
                      {slide.headline}
                    </h2>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-1 ml-auto flex-shrink-0 text-white">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-100"
                      aria-label="Previous slide"
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <button
                      onClick={handlePlayPause}
                      onMouseEnter={() => setIsHoveringDial(true)}
                      onMouseLeave={() => setIsHoveringDial(false)}
                      className="p-1 rounded-lg hover:bg-white/10 transition-colors duration-100"
                      aria-label={isPaused ? 'Play' : 'Pause'}
                    >
                      <CircularProgress size={40} thickness={2.5} value={autoplayPct}>
                        {isHoveringDial || isPaused ? (
                          isPaused ? (
                            <Play className="size-3" />
                          ) : (
                            <Pause className="size-3" />
                          )
                        ) : (
                          <span className="text-[10px] font-mono">
                            {i + 1}/{slides.length}
                          </span>
                        )}
                      </CircularProgress>
                    </button>

                    <button
                      onClick={handleNext}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-100"
                      aria-label="Next slide"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
