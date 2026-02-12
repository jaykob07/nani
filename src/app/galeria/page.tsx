"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Extensiones usadas para ciclar imágenes


const CATEGORY_CONFIG = {
  brillo: 12,
  labiales: 0,
  maquillaje: 7,
  pestañina: 2,
  base: 1,
  capilar: 0,
};

const EXTENSIONS = ["jpeg", "jpg", "png", "webp"];

function generateCategoryItems(category: string, count: number) {
  const items = [];

  for (let i = 1; i <= count; i++) {
    const num = String(i).padStart(2, "0");

    // Probamos extensiones, pero en tu caso todas son .jpeg
    const possiblePaths = EXTENSIONS.map(
      (ext) => `/images/${category}-${num}.${ext}`
    );

    items.push({
      id: `${category}-${i}`,
      category,
      image: possiblePaths[0], // siempre .jpeg en tu carpeta
    });
  }

  return items;
}

export const galleryItems = Object.entries(CATEGORY_CONFIG)
  .flatMap(([category, count]) => generateCategoryItems(category, count));

// Generar categorías dinámicamente (sin escribirlas a mano)
const categories = ["Todos", ...Object.keys(CATEGORY_CONFIG)]

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredItems =
    selectedCategory === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div
      id="galeria"
      className="scroll-mt-28 min-h-screen pt-36 sm:pt-40 pb-12 sm:pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header pt-10 para bajar el letrero*/}
        <div className="text-center pt-10 mb-12 sm:mb-16">    
          <h1 className="font-[Poppins] text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
            Galería
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explora nuestra colección
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
              <div className="relative h-64 sm:h-80 lg:h-96 bg-white overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  className="object-contain bg-white group-hover:scale-110 transition-transform duration-500"
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
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            ¿Te gustó lo que viste?
          </p>
          <Button
            size="lg"
            className="bg-[#FCBAA0] hover:bg-[#E96A59] text-white rounded-full px-6 sm:px-8 text-sm sm:text-base"
          >
            Comprar Ahora
          </Button>
        </div>
      </div>
    </div>
  )
}
