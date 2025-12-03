"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen mt-16 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
            Contáctanos
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            ¿Tienes preguntas? Nos encantaría escucharte. Completa el formulario y te responderemos pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                  Nombre Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-sm sm:text-base"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                  Correo Electrónico *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-sm sm:text-base"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-sm sm:text-base"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                  Asunto *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full text-sm sm:text-base"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                  Mensaje *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                  placeholder="Cuéntanos más sobre tu consulta..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#FCBAA0] hover:bg-[#E96A59] text-white rounded-full"
              >
                Enviar Mensaje
                <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#FA8072]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#FCBAA0]" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base">info@onemore.com</p>
                  <p className="text-gray-600 text-sm sm:text-base">ventas@onemore.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#FA8072]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FCBAA0]" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Teléfono</h3>
                  <p className="text-gray-600 text-sm sm:text-base">+57 318 7949929</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Lun - Sab: 9am - 6pm</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#FA8072]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FCBAA0]" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Ubicación</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Centro Comercial Cali Mio</p>
                  <p className="text-gray-600 text-sm sm:text-base">cr 9 # 13- 135 C.c Cali mio - Piso 3/local 303</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#FA8072]/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-[#FCBAA0]" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Redes Sociales</h3>
                  <a
                    href="https://www.instagram.com/onemore__marioaguirre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FCBAA0] hover:text-[#E96A59] transition-colors"
                  >
                    @onemore__marioaguirre
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Síguenos para ver novedades</p>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-5 sm:p-6 bg-gray-50">
              <h3 className="font-display text-lg sm:text-xl font-bold mb-3 sm:mb-4">Horario de Atención</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}