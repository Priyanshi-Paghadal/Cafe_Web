"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function Loader() {
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

    // Create a sphere with wave-like animation
    const geometry = new THREE.SphereGeometry(2, 64, 64)
    const material = new THREE.MeshStandardMaterial({
      color: "#00bfff",
      wireframe: true,
      emissive: "#006994",
      emissiveIntensity: 0.5,
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x00ffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Position camera
    camera.position.z = 5

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate sphere
      sphere.rotation.y = elapsedTime * 0.5

      // Pulse effect
      sphere.scale.set(
        1 + Math.sin(elapsedTime * 2) * 0.1,
        1 + Math.sin(elapsedTime * 2) * 0.1,
        1 + Math.sin(elapsedTime * 2) * 0.1,
      )

      // Update vertices for wave effect
      const positions = geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        const z = positions[i + 2]

        const distance = Math.sqrt(x * x + y * y + z * z)
        const originalDistance = 2 // radius of sphere

        const ratio = originalDistance / distance

        // Apply wave effect
        const waveX = x * ratio * (1 + Math.sin(elapsedTime * 3 + distance * 2) * 0.05)
        const waveY = y * ratio * (1 + Math.sin(elapsedTime * 3 + distance * 2) * 0.05)
        const waveZ = z * ratio * (1 + Math.sin(elapsedTime * 3 + distance * 2) * 0.05)

        positions[i] = waveX
        positions[i + 1] = waveY
        positions[i + 2] = waveZ
      }

      geometry.attributes.position.needsUpdate = true

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
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-4">
          OceanTech
        </h1>
        <p className="text-cyan-200 text-lg">Navigating the digital depths</p>
      </motion.div>
    </motion.div>
  )
}
