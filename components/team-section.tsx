import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Michael Chen",
      position: "CTO",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      position: "Design Director",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "David Kim",
      position: "Lead Developer",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium text-cyan-600 mb-2 tracking-wider uppercase">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Expert Team</h3>
          <p className="text-gray-600">
            Our talented team of professionals is dedicated to delivering exceptional results and providing the highest
            level of service to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a href={member.social.linkedin} className="text-white hover:text-cyan-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-cyan-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={member.social.facebook} className="text-white hover:text-cyan-400 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href={member.social.instagram} className="text-white hover:text-cyan-400 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-cyan-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
