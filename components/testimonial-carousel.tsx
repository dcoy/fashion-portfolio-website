"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialCarousel({ locale, dictionary }: { locale: string; dictionary: any }) {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Martinez",
      role: "Fashion Editor, Style Magazine",
      avatar: "/placeholder.svg?height=100&width=100&text=SM",
      quote:
        "Elena's designs represent the perfect balance between innovation and wearability. Her attention to detail and commitment to sustainable practices set a new standard in the industry.",
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Creative Director, Luxe Brand",
      avatar: "/placeholder.svg?height=100&width=100&text=JW",
      quote:
        "Working with Elena has been a revelation. Her understanding of form, texture, and movement creates pieces that are not just garments, but expressions of contemporary culture.",
    },
    {
      id: 3,
      name: "Olivia Chen",
      role: "Celebrity Stylist",
      avatar: "/placeholder.svg?height=100&width=100&text=OC",
      quote:
        "My clients consistently request Elena Moda pieces for red carpet events. The craftsmanship is impeccable, and the designs photograph beautifully from every angle.",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Fashion Buyer, Nordstrom",
      avatar: "/placeholder.svg?height=100&width=100&text=MJ",
      quote:
        "Elena's collections consistently outperform expectations on the sales floor. Customers appreciate the quality, versatility, and timeless appeal of her designs.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
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

  const itemsToShow = windowWidth >= 1024 ? 2 : 1

  const totalTestimonials = testimonials.length
  const maxIndex = totalTestimonials - itemsToShow

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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, maxIndex])

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
      </div>

      <div className="overflow-hidden px-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            width: `${(totalTestimonials / itemsToShow) * 100}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3" style={{ width: `${100 / totalTestimonials}%` }}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-gray-300 mb-4" />
                  <p className="text-gray-700 flex-grow mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
          <span className="sr-only">Next testimonial</span>
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
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

