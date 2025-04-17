"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047",
      alt: "Coffee being poured into a cup",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070",
      alt: "Coffee shop interior",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071",
      alt: "Latte art",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?q=80&w=2074",
      alt: "Coffee beans",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1619474387533-301ed3b5a734?q=80&w=2070",
      alt: "Breakfast plate",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?q=80&w=2070",
      alt: "Café atmosphere",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1594461185450-7a92ef113908?q=80&w=2070",
      alt: "Coffee brewing",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1607260550778-aa9d29444ce7?q=80&w=2070",
      alt: "Dessert plate",
    },
  ]

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our café. From our artisanal coffee to our cozy atmosphere, these images
            capture the essence of tea.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  )
}
