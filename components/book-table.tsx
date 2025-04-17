"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Coffee } from "lucide-react"

export default function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string | null
  }>({
    type: null,
    message: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address",
      })
      setIsSubmitting(false)
      return
    }

    // Phone validation
    const phoneRegex = /^\+?[1-9]\d{1,14}$/
    let customerPhone = formData.phone.replace(/\D/g, "")
    if (!phoneRegex.test(customerPhone)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid phone number",
      })
      setIsSubmitting(false)
      return
    }

    // Format phone number for WhatsApp
    const restaurantPhone = "917041167089" // Restaurant phone with country code (India +91)

    // Prepare WhatsApp message
    const message = `New Table Booking:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
${formData.message ? `Special Requests: ${formData.message}` : ""}`

    // Create WhatsApp URL
    const whatsappLink = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(message)}`

    // Redirect to WhatsApp
    window.location.href = whatsappLink

    // setSubmitStatus({
    //   type: "success",
    //   message: "Your table has been booked successfully! You will be redirected to WhatsApp.",
    // })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <section id="book" className="section-padding bg-coffee-dark relative overflow-hidden">
      {/* Decorative coffee beans */}
      <div className="absolute top-20 left-10 text-white/10 transform rotate-45">
        <Coffee className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-white/10 transform -rotate-45">
        <Coffee className="w-32 h-32" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Book a Table</h2>
            <p className="text-gray-300 mb-8">
              Reserve your table at Tea Café and enjoy a delightful dining experience. Whether it's a casual coffee
              meeting, breakfast with friends, or a business lunch, we've got you covered.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Opening Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Weekends: 8:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Reservation Times</h3>
                  <p className="text-gray-300">Breakfast: 7:00 AM - 11:00 AM</p>
                  <p className="text-gray-300">Lunch & Dinner: 11:30 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Group Bookings</h3>
                  <p className="text-gray-300">
                    For groups larger than 8 people, please contact us directly at reservations@tea.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8 People</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-field"
                  placeholder="Any special requests or dietary requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-white py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#7a4f2e]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Book Now"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
