"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Coffee } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Coffee className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-white"}`} />
          <span
            className={`ml-2 text-2xl font-heading font-bold ${
              isScrolled ? "text-primary" : "text-white"
            } transition-colors duration-300`}
          >
            Cafe
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["home", "menu", "gallery", "testimonials", "book"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-primary transition-colors duration-300 capitalize`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#book"
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-[#7a4f2e] transition-colors duration-300"
          >
            Book a Table
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["home", "menu", "gallery", "testimonials", "book"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-gray-800 hover:text-primary transition-colors duration-300 capitalize"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#book"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-[#7a4f2e] transition-colors duration-300 inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
