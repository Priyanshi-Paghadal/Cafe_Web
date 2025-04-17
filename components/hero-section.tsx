"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Innovative Digital Solutions",
      subtitle: "For Your Business Growth",
      description:
        "We create cutting-edge digital experiences that transform businesses and drive success in the digital ocean.",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      title: "Advanced Technology",
      subtitle: "Powering Your Success",
      description: "Leverage our expertise in the latest technologies to stay ahead of the competition.",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      title: "Creative Design",
      subtitle: "That Makes an Impact",
      description:
        "Our design philosophy combines aesthetics with functionality to create memorable digital experiences.",
      image: "/placeholder.svg?height=800&width=1200",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-sm md:text-base font-medium text-cyan-400 mb-2 tracking-wider uppercase">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{slide.title}</h1>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white px-8 py-6 rounded-full">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 px-8 py-6 rounded-full"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-cyan-500 w-10" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
