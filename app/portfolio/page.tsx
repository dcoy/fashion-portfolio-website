"use client"

import { useState } from "react"
import MasonryGrid from "./masonry-grid"
import FilterButtons from "./filter-buttons"
import DesignDetail from "./design-detail"

export default function PortfolioPage() {
  // Sample portfolio items with varying aspect ratios and detailed information
  const allPortfolioItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Design ${i + 1}`,
    category: i % 3 === 0 ? "Casual" : i % 3 === 1 ? "Formal" : "Avant-Garde",
    image: `/placeholder.svg?height=${600 + (i % 3) * 200}&width=450&text=Design%20${i + 1}`,
    aspectRatio: 0.75 + (i % 5) * 0.15, // Varying aspect ratios
    description: `This ${i % 3 === 0 ? "casual" : i % 3 === 1 ? "formal" : "avant-garde"} design showcases the innovative approach to contemporary fashion with a focus on ${i % 2 === 0 ? "sustainable materials" : "unique silhouettes"}.`,
    materials: [
      "Organic Cotton",
      "Recycled Polyester",
      i % 2 === 0 ? "Tencel Lyocell" : "Peace Silk",
      i % 3 === 0 ? "Bamboo Fiber" : "Hemp Blend",
    ],
    fabricSwatches: [
      {
        name: "Primary Fabric",
        color: i % 3 === 0 ? "#E0E0E0" : i % 3 === 1 ? "#D0D0D0" : "#C0C0C0",
        texture: "/placeholder.svg?height=100&width=100&text=Texture",
        composition: i % 2 === 0 ? "100% Organic Cotton" : "80% Recycled Polyester, 20% Elastane",
      },
      {
        name: "Accent Fabric",
        color: i % 3 === 0 ? "#A0A0A0" : i % 3 === 1 ? "#909090" : "#808080",
        texture: "/placeholder.svg?height=100&width=100&text=Texture",
        composition: i % 2 === 0 ? "100% Tencel" : "100% Peace Silk",
      },
      {
        name: "Lining",
        color: "#F0F0F0",
        texture: "/placeholder.svg?height=100&width=100&text=Texture",
        composition: "100% Organic Cotton Sateen",
      },
      {
        name: "Trim",
        color: i % 3 === 0 ? "#606060" : i % 3 === 1 ? "#505050" : "#404040",
        texture: "/placeholder.svg?height=100&width=100&text=Texture",
        composition: "Recycled Metal Hardware",
      },
    ],
    dimensions: `Size range: XS-XL, ${i % 2 === 0 ? "Standard fit" : "Relaxed fit"}`,
    careInstructions: [
      "Machine wash cold with like colors",
      "Gentle cycle with mild detergent",
      "Do not bleach",
      "Hang to dry",
      "Cool iron if needed",
    ],
  }))

  const categories = ["Casual", "Formal", "Avant-Garde"]
  const [filteredItems, setFilteredItems] = useState(allPortfolioItems)

  const handleFilterChange = (category: string) => {
    if (category === "All") {
      setFilteredItems(allPortfolioItems)
    } else {
      setFilteredItems(allPortfolioItems.filter((item) => item.category === category))
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portfolio</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Explore my complete collection of designs, showcasing a range of styles and inspirations.
        </p>
      </div>

      <FilterButtons categories={categories} onFilterChange={handleFilterChange} />

      <div className="mt-8">
        <MasonryGrid items={filteredItems.map((item) => <DesignDetail key={item.id} design={item} />)} />
      </div>
    </div>
  )
}

