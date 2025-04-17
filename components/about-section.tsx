import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  const features = [
    "10+ Years of Industry Experience",
    "Award-winning Design Team",
    "24/7 Customer Support",
    "Innovative Technology Solutions",
    "Customized Development Approach",
    "Continuous Improvement Methodology",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="About Us"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-lg -z-10" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-sm font-medium text-cyan-600 mb-2 tracking-wider uppercase">About Our Company</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              We Create Digital Solutions That Drive Business Growth
            </h3>
            <p className="text-gray-600 mb-8">
              Founded in 2010, OceanTech has been at the forefront of digital innovation, helping businesses navigate
              the vast digital ocean with confidence and success. Our team of experts combines technical expertise with
              creative thinking to deliver solutions that not only meet but exceed client expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-cyan-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white px-8 py-6 rounded-full">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
