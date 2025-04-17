"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"
import * as THREE from "three"

interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "design" | "marketing"
  icon: string
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skills: Skill[] = [
    { name: "HTML/CSS", level: 95, category: "frontend", icon: "🌊" },
    { name: "JavaScript", level: 90, category: "frontend", icon: "🌊" },
    { name: "React", level: 88, category: "frontend", icon: "🌊" },
    { name: "TypeScript", level: 85, category: "frontend", icon: "🌊" },
    { name: "Node.js", level: 82, category: "backend", icon: "🐙" },
    { name: "Python", level: 78, category: "backend", icon: "🐙" },
    { name: "MongoDB", level: 80, category: "backend", icon: "🐙" },
    { name: "SQL", level: 75, category: "backend", icon: "🐙" },
    { name: "UI/UX Design", level: 92, category: "design", icon: "🐠" },
    { name: "Figma", level: 88, category: "design", icon: "🐠" },
    { name: "Adobe Creative Suite", level: 85, category: "design", icon: "🐠" },
    { name: "3D Modeling", level: 70, category: "design", icon: "🐠" },
    { name: "SEO", level: 85, category: "marketing", icon: "🦈" },
    { name: "Content Strategy", level: 90, category: "marketing", icon: "🦈" },
    { name: "Social Media", level: 88, category: "marketing", icon: "🦈" },
    { name: "Analytics", level: 82, category: "marketing", icon: "🦈" },
  ]

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Three.js animation
  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create bubbles
    const bubblesGroup = new THREE.Group()
    scene.add(bubblesGroup)

    const createBubble = (x: number, y: number, z: number, size: number) => {
      const geometry = new THREE.SphereGeometry(size, 16, 16)
      const material = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.3,
        metalness: 0.2,
        roughness: 0.1,
      })
      const bubble = new THREE.Mesh(geometry, material)
      bubble.position.set(x, y, z)
      bubblesGroup.add(bubble)
      return bubble
    }

    // Create multiple bubbles
    const bubbles: THREE.Mesh[] = []
    for (let i = 0; i < 30; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20
      const size = Math.random() * 0.5 + 0.1
      bubbles.push(createBubble(x, y, z, size))
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x00ffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Position camera
    camera.position.z = 10

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate bubble group
      bubblesGroup.rotation.y = elapsedTime * 0.1
      bubblesGroup.rotation.x = elapsedTime * 0.05

      // Animate individual bubbles
      bubbles.forEach((bubble, index) => {
        bubble.position.y += Math.sin(elapsedTime + index) * 0.005
        bubble.material.opacity = 0.2 + Math.sin(elapsedTime * 0.5 + index) * 0.1
      })

      // Render
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      bubbles.forEach((bubble) => {
        bubble.geometry.dispose()
        ;(bubble.material as THREE.Material).dispose()
      })
      renderer.dispose()
    }
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
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

  const progressVariants: Variants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.3,
      },
    }),
  }

  const cardVariants: Variants = {
    initial: { rotateY: 0 },
    hover: { rotateY: 180, transition: { duration: 0.8 } },
  }

  const frontVariants: Variants = {
    hover: { opacity: 0, transition: { duration: 0.4 } },
  }

  const backVariants: Variants = {
    initial: { opacity: 0, rotateY: 180 },
    hover: { opacity: 1, transition: { duration: 0.4, delay: 0.4 } },
  }

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

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
              Our Expertise
            </span>
          </h2>
          <p className="text-gray-300 mb-10">
            Dive into our ocean of skills and expertise. We combine technical prowess with creative thinking to deliver
            exceptional digital solutions.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="perspective-1000"
              initial="initial"
              whileHover="hover"
              animate={hoveredSkill === index ? "hover" : "initial"}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              variants={containerVariants}
            >
              <motion.div className="relative w-full h-[200px] preserve-3d cursor-pointer" variants={cardVariants}>
                {/* Front of card */}
                <motion.div
                  className="absolute inset-0 backface-hidden bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 flex flex-col justify-center items-center"
                  variants={frontVariants}
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                    <motion.div
                      className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      custom={skill.level}
                      variants={progressVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    ></motion.div>
                  </div>
                  <p className="text-cyan-300 text-sm">{skill.level}% Proficiency</p>
                </motion.div>

                {/* Back of card */}
                <motion.div
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-cyan-900/80 to-blue-900/80 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/40 flex flex-col justify-center items-center"
                  variants={backVariants}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{skill.name}</h3>
                  <p className="text-gray-300 text-center mb-4">
                    Our team excels in {skill.name} with {skill.level}% proficiency, delivering exceptional results for
                    our clients.
                  </p>
                  <div className="mt-2">
                    <span className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Dive Deeper Into Our Capabilities
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                Our team combines technical expertise with creative thinking to deliver exceptional results. We stay at
                the forefront of technology trends to provide innovative solutions for our clients.
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your Project
              </motion.a>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
                      100+
                    </div>
                    <p className="text-gray-400">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
                      50+
                    </div>
                    <p className="text-gray-400">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
                      8+
                    </div>
                    <p className="text-gray-400">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
                      15+
                    </div>
                    <p className="text-gray-400">Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}
