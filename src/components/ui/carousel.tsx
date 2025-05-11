"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Button from "@/components/ui/button"

interface CarouselProps {
  items: React.ReactNode[]
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full">
              {item}
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="default"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur hover:bg-background/80"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="default"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur hover:bg-background/80"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
