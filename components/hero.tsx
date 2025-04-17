"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import * as THREE from "three"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Create coffee beans
    const beans: THREE.Mesh[] = []
    const beanGeometry = new THREE.TorusGeometry(0.3, 0.15, 16, 32)
    const beanMaterial = new THREE.MeshStandardMaterial({
      color: 0x3c2f24,
      roughness: 0.7,
      metalness: 0.1,
    })

    for (let i = 0; i < 50; i++) {
      const bean = new THREE.Mesh(beanGeometry, beanMaterial)
      bean.position.x = (Math.random() - 0.5) * 20
      bean.position.y = (Math.random() - 0.5) * 20
      bean.position.z = (Math.random() - 0.5) * 20 - 5
      bean.rotation.x = Math.random() * Math.PI
      bean.rotation.y = Math.random() * Math.PI
      bean.scale.set(Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5)
      scene.add(bean)
      beans.push(bean)
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Position camera
    camera.position.z = 10

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate beans
      beans.forEach((bean, index) => {
        bean.rotation.x = elapsedTime * 0.2 + index * 0.1
        bean.rotation.y = elapsedTime * 0.3 + index * 0.1
        bean.position.y += Math.sin(elapsedTime + index) * 0.003
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
      beanGeometry.dispose()
      beanMaterial.dispose()
      renderer.dispose()
      scene.clear()
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070')" }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-slide-up">
            Experience the Art of <span className="text-accent">Coffee</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Indulge in our artisanal coffee and delicious cuisine in a cozy atmosphere that feels like home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="#menu"
              className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-[#7a4f2e] transition-all duration-300 text-center"
            >
              Explore Menu
            </Link>
            <Link
              href="#book"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300 text-center"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#menu" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>

      {/* Coffee cup with steam animation */}
      <div className="absolute bottom-20 right-20 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="steam" id="steam1"></div>
          <div className="steam" id="steam2"></div>
          <div className="steam" id="steam3"></div>
          <div className="steam" id="steam4"></div>
        </div>
      </div>
    </section>
  )
}
