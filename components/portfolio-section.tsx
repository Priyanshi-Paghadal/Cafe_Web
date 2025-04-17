"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 2,
      title: "Financial App",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "design",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 4,
      title: "Travel Booking System",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      id: 6,
      title: "Corporate Branding",
      category: "design",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-cyan-600 mb-2 tracking-wider uppercase">Our Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Recent Projects</h3>
          <p className="text-gray-600">
            Discover our diverse portfolio of successful projects across various industries, showcasing our expertise
            and commitment to excellence.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all" className="px-6">
                All
              </TabsTrigger>
              <TabsTrigger value="web" className="px-6">
                Web
              </TabsTrigger>
              <TabsTrigger value="mobile" className="px-6">
                Mobile
              </TabsTrigger>
              <TabsTrigger value="design" className="px-6">
                Design
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-300 mb-4 capitalize">{project.category}</p>
                    <a href={project.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
