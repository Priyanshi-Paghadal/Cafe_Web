"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web" },
    { id: "app", name: "App" },
    { id: "design", name: "Design" },
    { id: "social", name: "Social Media" },
  ]

  const projects = [
    {
      id: 1,
      title: "Ocean Analytics Dashboard",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 2,
      title: "Marine Life Mobile App",
      category: "app",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 3,
      title: "Deep Blue Brand Identity",
      category: "design",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 4,
      title: "Coral Reef Social Campaign",
      category: "social",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 5,
      title: "Wave E-commerce Platform",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 6,
      title: "Ocean Explorer App",
      category: "app",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050816] opacity-90"></div>
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
              Our Projects
            </span>
          </h2>
          <p className="text-gray-300 mb-10">
            Explore our portfolio of work across various industries and disciplines. Each project represents our
            commitment to excellence and innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-transparent text-white border border-cyan-500/30 hover:border-cyan-500"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-cyan-500/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-cyan-300 mb-4 capitalize">{project.category}</p>
                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  )
}
