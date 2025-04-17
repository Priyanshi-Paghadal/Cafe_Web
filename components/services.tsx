"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, PenTool, Share2, FileText, MessageSquare } from "lucide-react"

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
      icon: <Code className="h-10 w-10 text-cyan-300" />,
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      icon: <Smartphone className="h-10 w-10 text-cyan-300" />,
    },
    {
      title: "Graphic Design",
      description: "Stunning visual designs that communicate your brand message and captivate your audience.",
      icon: <PenTool className="h-10 w-10 text-cyan-300" />,
    },
    {
      title: "Social Media Management",
      description: "Strategic social media management to build your online presence and engage with your audience.",
      icon: <Share2 className="h-10 w-10 text-cyan-300" />,
    },
    {
      title: "Social Media Posts",
      description: "Eye-catching social media content that drives engagement and builds brand awareness.",
      icon: <MessageSquare className="h-10 w-10 text-cyan-300" />,
    },
    {
      title: "Content Writing",
      description: "Compelling content that tells your story and connects with your target audience.",
      icon: <FileText className="h-10 w-10 text-cyan-300" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a192f] opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-300">
            We offer a comprehensive range of digital services to help your business thrive in the digital ocean. From
            web development to content creation, we've got you covered.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-colors duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}
