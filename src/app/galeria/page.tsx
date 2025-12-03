"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const galleryItems = [
  {
    id: 1,
    category: "Collares Chunky",
    image: "/images/collar-chunky.jpeg",
  },
  {
    id: 2,
    category: "Collares Chunky",
    image: "/images/collar-chunky1.png",
  },
  {
    id: 3,
    category: "Collares Chunky",
    image: "/images/collar-chunky2.png",
  },
  {
    id: 4,
    category: "Collares Chunky",
    image: "/images/collar-chunky3.png",
  },
  {
    id: 5,
    category: "Collares Chunky",
    image: "/images/collar-chunky4.jpg",
  },
  {
    id: 6,
    category: "Collares Chunky",
    image: "/images/collar-chunky5.jpg",
  },
  {
    id: 7,
    category: "Collares Chunky",
    image: "/images/collar-chunky6.jpg",
  },
  {
    id: 9,
    category: "Collares Indu",
    image: "/images/collar-indu-cartera-fiesta.jpg",
  },
  {
    id: 10,
    category: "Collares Indu",
    image: "/images/collar-indu1.jpeg",
  },
  {
    id: 11,
    category: "Collares Indu",
    image: "/images/collar-indu-cartera-fiesta3.jpg",
  },
  {
    id: 12,
    category: "Collares Indu",
    image: "/images/collar-indu2.jpeg",
  },
  {
    id: 13,
    category: "Collares Indu",
    image: "/images/collar-indu4.jpeg",
  },
  {
    id: 14,
    category: "Collares Indu",
    image: "/images/collar-indu-cartera-fiesta-beige.jpg",
  },
  {
    id: 15,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor.jpg",
  },
  {
    id: 16,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor2.jpg",
  },
  {
    id: 17,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor3.jpg",
  },
  {
    id: 18,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor4.jpg",
  },
  {
    id: 19,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor5.jpg",
  },
  {
    id: 20,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor6.jpg",
  },
  {
    id: 21,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor7.jpg",
  },

  {
    id: 23,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor9.jpg",
  },
  {
    id: 24,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor10.jpg",
  },
  {
    id: 25,
    category: "Aretes",
    image: "/images/aretes-al-por-mayor11.jpg",
  },
  {
    id: 26,
    category: "Collares Brillantes",
    image: "/images/collar_1.jpg",
  },
  {
    id: 27,
    category: "Collares Brillantes",
    image: "/images/collar_2.jpg",
  },
  {
    id: 28,
    category: "Collares Brillantes",
    image: "/images/collar_3.jpg",
  },
  {
    id: 29,
    category: "Collares Brillantes",
    image: "/images/collar_4.jpg",
  },
  {
    id: 30,
    category: "Collares Brillantes",
    image: "/images/collar_5.jpg",
  },
  {
    id: 31,
    category: "Collares Brillantes",
    image: "/images/collar_6.jpg",
  },
  {
    id: 32,
    category: "Collares Brillantes",
    image: "/images/collar_7.jpg",
  },
  {
    id: 33,
    category: "Collares Brillantes",
    image: "/images/collar_8.jpg",
  },
  {
    id: 34,
    category: "Collares Brillantes",
    image: "/images/collar_9.jpg"
  },
  {
    id: 35,
    category: "Collares Brillantes",
    image: "/images/collar_10.jpg"
  },
  {
    id: 36,
    category: "Collares Brillantes",
    image: "/images/collar_11.jpg"
  },
  {
    id: 37,
    category: "Collares Brillantes",
    image: "/images/collar_19.jpg"
  },
  {
    id: 38,
    category: "Collares Brillantes",
    image: "/images/collar_21.jpg"
  },
  {
    id: 39,
    category: "Collares Brillantes",
    image: "/images/collar_22.jpg"
  },
  {
    id: 40,
    category: "Collares Brillantes",
    image: "/images/collar_23.jpg"
  },
  {
    id: 41,
    category: "Aretes",
    image: "/images/arete_1.jpg"
  },
  {
    id: 42,
    category: "Aretes",
    image: "/images/arete_2.jpg"
  },
  {
    id: 43,
    category: "Aretess",
    image: "/images/arete_3.jpg"
  },
  {
    id: 44,
    category: "Aretes",
    image: "/images/arete_4.jpg"
  },
  {
    id: 45,
    category: "Aretes",
    image: "/images/arete_5.jpg"
  },

  {
    id: 47,
    category: "Aretes",
    image: "/images/arete_6.jpg"
  },
  {
    id: 48,
    category: "Aretes",
    image: "/images/arete_7.jpg"
  },
  {
    id: 49,
    category: "Collares Brillantes",
    image: "/images/arete_8.jpg"
  },
  {
    id: 50,
    category: "Collares Brillantes",
    image: "/images/arete_9.jpg"
  },
  {
    id: 51,
    category: "Aretes",
    image: "/images/arete_10.jpg"
  },

  {
    id: 52,
    category: "Aretes",
    image: "/images/arete_11.jpg"
  },
  {
    id: 53,
    category: "Aretes",
    image: "/images/arete_12.jpg"
  },

  {
    id: 54,
    category: "Aretes",
    image: "/images/arete_13.jpg"
  },
  {
    id: 55,
    category: "Collares Chunky",
    image: "/images/collar-chunky7.jpg",
  },
  {
    id: 56,
    category: "Collares Chunky",
    image: "/images/collar-chunky8.jpg",
  },
  {
    id: 57,
    category: "Collares Chunky",
    image: "/images/collar-chunky9.jpg",
  },
  {
    id: 58,
    category: "Collares Chunky",
    image: "/images/collar-chunky10.jpg",
  },
  {
    id: 59,
    category: "Pulseras",
    image: "/images/pulsera.jpeg"
  },
  {
    id: 60,
    category: "Pulseras",
    image: "/images/pulsera1.jpeg"
  },

  {
    id: 61,
    category: "Pulseras",
    image: "/images/pulsera2.jpeg"
  },
  {
    id: 62,
    category: "Pulseras",
    image: "/images/pulsera3.jpeg"
  },

  {
    id: 63,
    category: "Pulseras",
    image: "/images/pulsera4.jpeg",
  },
  {
    id: 64,
    category: "Pulseras",
    image: "/images/pulsera5.jpeg",
  },
  {
    id: 65,
    category: "Pulseras",
    image: "/images/pulsera6.jpeg",
  },
  {
    id: 66,
    category: "Pulseras",
    image: "/images/pulsera7.jpeg",
  },
  {
    id: 67,
    category: "Coronas",
    image: "/images/collar-chunky.jpeg",
  },
  {
    id: 68,
    category: "Coronas",
    image: "/images/corona.png",
  },
  {
    id: 69,
    category: "Coronas",
    image: "/images/corona2.png",
  },
  {
    id: 70,
    category: "Coronas",
    image: "/images/corona3.png",
  },
  {
    id: 71,
    category: "Coronas",
    image: "/images/corona4.jpeg",
  },
  {
    id: 72,
    category: "Coronas",
    image: "/images/corona5.jpeg",
  },
  {
    id: 73,
    category: "Coronas",
    image: "/images/corona6.jpeg",
  },
  {
    id: 74,
    category: "Coronas",
    image: "/images/corona7.jpeg",
  },
  {
    id: 75,
    category: "Coronas",
    image: "/images/corona8.jpeg",
  },
  {
    id: 76,
    category: "Coronas",
    image: "/images/corona9.jpeg",
  },
  {
    id: 77,
    category: "Coronas",
    image: "/images/corona10.jpeg",
  },
  {
    id: 78,
    category: "Coronas",
    image: "/images/corona11.jpeg",
  },
  {
    id: 79,
    category: "Collares Chunky",
    image: "/images/collar-chunky.jpeg",
  },
  {
    id: 80,
    category: "Collares Chunky",
    image: "/images/collar-chunky1.png",
  },
  {
    id: 81,
    category: "Collares Chunky",
    image: "/images/collar-chunky2.png",
  },
  {
    id: 82,
    category: "Collares Chunky",
    image: "/images/collar-chunky3.png",
  },
  {
    id: 83,
    category: "Collares Chunky",
    image: "/images/collar-chunky4.jpg",
  },
  {
    id: 84,
    category: "Collares Chunky",
    image: "/images/collar-chunky5.jpg",
  },
  {
    id: 85,
    category: "Collares Chunky",
    image: "/images/collar-chunky6.jpg",
  },
  {
    id: 86,
    category: "Collares Indu",
    image: "/images/collar-indu-cartera-fiesta.jpg",
  },
  {
    id: 87,
    category: "Collares Indu",
    image: "/images/collar-indu1.jpeg",
  },
  {
    id: 88,
    category: "Carteras",
    image: "/images/cartera-yute2.jpeg",
  },
  {
    id: 89,
    category: "Carteras",
    image: "/images/cartera-fiesta.jpg"
  },
  {
    id: 90,
    category: "Carteras",
    image: "/images/cartera-fiesta2.jpg",
  },
  {
    id: 91,
    category: "Carteras",
    image: "/images/cartera-fiesta-naranja.jpg",
  },
  {
    id: 92,
    category: "Carteras",
    image: "/images/cartera-fiesta4.jpg",
  },
  {
    id: 93,
    category: "Carteras",
    image: "/images/cartera-fiesta-pastel.jpg",
  },
  {
    id: 94,
    category: "Carteras",
    image: "/images/cartera-fiesta5.jpeg",
  },
  {
    id: 95,
    category: "Carteras",
    image: "/images/cartera-fiesta6.jpg",
  },
  {
    id: 96,
    category: "Carteras",
    image: "/images/cartera-fiesta7.jpg",
  },
  {
    id: 97,
    category: "Carteras",
    image: "/images/cartera-yute2.jpeg",
  },
  {
    id: 98,
    category: "Carteras",
    image: "/images/cartera-fiesta8.jpg",
  },
   {
    id: 99,
    category: "Carteras",
    image: "/images/cartera-fiesta9.jpg",
  },
  {
    id: 100,
    category: "Carteras",
    image: "/images/cartera-fiesta10.jpeg",
  },
  {
    id: 101,
    category: "Carteras",
    image: "/images/cartera-fiesta11.jpg",
  },
  {
    id: 102,
    category: "Carteras",
    image: "/images/cartera-fiesta12.jpg",
  },
  {
    id: 103,
    category: "Carteras",
    image: "/images/cartera-yute1.jpeg",
  },
  {
    id: 104,
    category: "Carteras",
    image: "/images/cartera-fiesta-violeta.jpg",
  }
]

const categories = ["Todos", "Carteras", "Collares Chunky", "Collares Indu", "Collares Brillantes", "Aretes", "Pulseras", "Coronas"]

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredItems =
    selectedCategory === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div id="galeria" className="scroll-mt-28 min-h-screen pt-36 sm:pt-40 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
            Galería
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explora nuestra colección de accesorios únicos. Cada pieza cuenta una historia de elegancia y estilo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full text-sm sm:text-base px-4 sm:px-6 py-2 ${
                selectedCategory === category
                  ? "bg-[#FCBAA0] hover:bg-[#FCBAA0] text-white"
                  : "border-gray-300 hover:border-[#FCBAA0] hover:text-[#FCBAA0]"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative  h-64 sm:h-80 lg:h-96 bg-[#EAE6E5] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  // className="object-cover group-hover:scale-110 transition-transform duration-500"
                 
                  // ... otras props
                  className="object-contain bg-[#EAE6E5] group-hover:scale-110 transition-transform duration-500" // <-- CAMBIAR a object-contain

                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4 sm:p-6">
                  <span className="text-white font-display text-xl sm:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {item.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">¿Te gustó lo que viste?</p>
          <Button
            size="lg"
            className="bg-[#FA8072] hover:bg-[#E96A59] text-white rounded-full px-6 sm:px-8 text-sm sm:text-base"
          >
            Comprar Ahora
          </Button>
        </div>
      </div>
    </div>
  )
}