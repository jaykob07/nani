"use client"

import Link from "next/link"
import { ShoppingBag, Instagram, Facebook, Mail } from "lucide-react"
import Image from "next/image"
import { FaInstagram, FaTiktok, FaFacebookF, FaMapPin, FaPhoneVolume  } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';


export default function Footer() {
  return (
    <footer className="  bg-[url('/images/nanidef.png')] bg-cover bg-center text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FCBAA0] transition-colors text-xs sm:text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Síguenos</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/nani_makeup_18/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#FCBAA0] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/nanimakeup/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#FCBAA0] transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@nani.makeup.18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#FCBAA0] transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:info@onemore.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-[#FCBAA0] transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <MdMailOutline className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
              nanicosmeticos2024@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Nani Makeup. Todos los derechos reservados. Powered by Adsvanced
          </p>
        </div>
      </div>
    </footer>
  )
}