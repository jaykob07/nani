"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/galeria", label: "Galería" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3 sm:py-4" : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-0 sm:-ml-2">
            <div className="relative w-66 h-32 -ml-4">
            <Image
              src="/images/one-more-nav.png"
              alt="OneMore Accesorios Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#FA8072] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
              <Link 
                // 🎯 CAMBIO 1: Nueva URL de WhatsApp con mensaje predefinido
                href="https://wa.me/573187949929?text=Deseo%20emprender%20con%20ustedes%2C%20quiero%20información"
                // Es buena práctica usar target="_blank" para abrir el chat en una nueva pestaña
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <Button className="bg-[#FCBAA0] hover:bg-[#E96A59] text-white rounded-full px-6">
                  {/* 🎯 CAMBIO 2: Nuevo texto del botón */}
                  Deseo emprender con ustedes
                </Button>
              </Link>
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 sm:mt-6 pb-4 border-t border-gray-200 pt-4 bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-sm">
          <div className="flex flex-col space-y-3 sm:space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm sm:text-base font-medium text-gray-700 hover:text-[#FA8072] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/galeria" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-[#FCBAA0] hover:bg-[#E96A59] text-white rounded-full w-full mt-2 sm:mt-4 text-sm sm:text-base">
                Comprar
              </Button>
            </Link>
          </div>
        </nav>
        )}
      </div>
    </header>
  )
}