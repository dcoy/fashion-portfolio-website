"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedDesignSlider({ locale, dictionary }: { locale: string; dictionary: any }) {
  const featuredDesigns = [
    {
      id: 1,
      title: "Summer Collection",
      description: "Lightweight, breathable pieces for warm weather",
      image: "/placeholder.svg?height=600&width=450&text=Design%201",
    },
    {
      id: 2,
      title: "Evening Wear",
      description: "Elegant designs for special occasions",
      image: "/placeholder.svg?height=600&width=450&text=Design%202",
    },
    {
      id: 3,
      title: "Sustainable Series",
      description: "Eco-friendly materials and ethical production",
      image: "/placeholder.svg?height=600&width=450&text=Design%203",
    },
    {
      id: 4,
      title: "Urban Collection",
      description: "Modern styles for city living",
      image: "/placeholder.svg?height=600&width=450&text=Design%204",
    },
    {
      id: 5,
      title: "Resort Wear",
      description: "Vacation-ready pieces for relaxation",
      image: "/placeholder.svg?height=600&width=450&text=Design%205",
    },
    {
      id: 6,
      title: "Minimalist Line",
      description: "Clean, simple designs for everyday elegance",
      image: "/placeholder.svg?height=600&width=450&text=Design%206",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const [windowWidth, setWindowWidth] = useState(1024)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)

      function handleResize() {
        setWindowWidth(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  const itemsToShow = windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1

  const totalSlides = featuredDesigns.length
  const maxIndex = totalSlides - itemsToShow

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : maxIndex))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex < 0 ? 0 : maxIndex)
    }
  }, [itemsToShow, maxIndex, currentIndex])

  return (
    <div className="relative mt-12 px-4">
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
      </div>

      <div className="overflow-hidden" ref={sliderRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            width: `${(totalSlides / itemsToShow) * 100}%`,
          }}
        >
          {featuredDesigns.map((design) => (
            <div key={design.id} className="px-2" style={{ width: `${100 / totalSlides}%` }}>
              <Link href={`/${locale}/portfolio`} className="group relative block overflow-hidden rounded-lg">
                <div className="aspect-[3/4] w-full relative">
                  <Image
                    src={design.image || "/placeholder.svg"}
                    alt={design.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-medium">{design.title}</h3>
                  <p className="text-white/80 text-sm">{design.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      <div className="mt-6 flex justify-center gap-1">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-primary/30"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

