import { Code, Globe, Lightbulb, LineChart, Smartphone, Zap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-cyan-600" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-cyan-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    },
    {
      icon: <Code className="h-10 w-10 text-cyan-600" />,
      title: "Custom Software",
      description:
        "Tailored software solutions designed to address your specific business challenges and requirements.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-cyan-600" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing services to increase your online presence and drive qualified traffic.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-cyan-600" />,
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality to create intuitive digital experiences.",
    },
    {
      icon: <Zap className="h-10 w-10 text-cyan-600" />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure to support your business operations and growth.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-cyan-600 mb-2 tracking-wider uppercase">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Digital Solutions For Your Business</h3>
          <p className="text-gray-600">
            We offer a wide range of services to help businesses navigate the digital landscape and achieve their goals
            through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <CardContent className="p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
