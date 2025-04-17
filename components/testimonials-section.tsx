"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      content:
        "OceanTech transformed our digital presence completely. Their team's expertise and dedication to our project exceeded our expectations. The results have been phenomenal for our business.",
      author: "Jennifer Smith",
      position: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      content:
        "Working with OceanTech was a game-changer for our company. Their innovative approach and technical expertise helped us launch a product that our customers love.",
      author: "Robert Johnson",
      position: "CTO, InnovateCorp",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      content:
        "The team at OceanTech delivered our project on time and within budget. Their attention to detail and commitment to quality is unmatched in the industry.",
      author: "Maria Garcia",
      position: "Marketing Director, GlobalBrand",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-cyan-300 mb-2 tracking-wider uppercase">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h3>
          <p className="text-gray-300">
            Don't just take our word for it. Hear what our clients have to say about their experience working with
            OceanTech.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
                    <Quote className="h-12 w-12 text-cyan-400 mb-6" />
                    <p className="text-lg md:text-xl mb-8">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-cyan-300">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-white border-white hover:bg-white/10 md:-left-6"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-white border-white hover:bg-white/10 md:-right-6"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition  => (
              <button
                key={index}
                className={\`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-cyan-400 w-10" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
