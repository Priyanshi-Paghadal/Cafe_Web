"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050816] opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-cyan-500/20">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="About OceanTech"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-300/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                About OceanTech
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              Founded in 2015, OceanTech is a leading digital innovation company specializing in creating cutting-edge
              solutions for businesses across various industries. Our team of experts combines technical expertise with
              creative thinking to deliver exceptional results.
            </motion.p>

            <motion.p
              className="text-gray-300 mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              We believe in the power of technology to transform businesses and create meaningful experiences. Our
              mission is to help our clients navigate the complex digital landscape and achieve their goals through
              innovative solutions and strategic thinking.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div className="border border-cyan-500/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 text-cyan-300">Our Vision</h3>
                <p className="text-gray-400">
                  To be the leading innovator in digital solutions, creating technology that empowers businesses to
                  thrive in the digital ocean.
                </p>
              </div>

              <div className="border border-cyan-500/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 text-cyan-300">Our Mission</h3>
                <p className="text-gray-400">
                  To deliver exceptional digital experiences that drive business growth and create lasting value for our
                  clients and their customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
