"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      content:
        "Tea Café has the best coffee in town! The atmosphere is cozy and perfect for both work and relaxation. Their cappuccino is absolutely divine, and the staff is always friendly and welcoming.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Food Blogger",
      content:
        "As a food blogger, I've visited many cafés, but Tea stands out with its exceptional quality and attention to detail. Their breakfast menu is outstanding, and the coffee beans are sourced ethically. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Local Resident",
      content:
        "Tea Café has become my go-to spot for meetings and catching up with friends. The ambiance is perfect, and their pastries are freshly baked every day. The latte art is also Instagram-worthy!",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      rating: 4,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setAutoplay(false)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  return (
    <section id="testimonials" className="section-padding bg-coffee-dark text-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience at
            Tea Café.
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
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-gray-300">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? "text-accent fill-accent" : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic">{testimonial.content}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#7a4f2e] transition-colors duration-300 md:-left-6"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#7a4f2e] transition-colors duration-300 md:-right-6"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-accent w-10" : "bg-white/50"
                }`}
                onClick={() => {
                  setCurrentSlide(index)
                  setAutoplay(false)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
