"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FilterButtonsProps {
  categories: string[]
  onFilterChange: (category: string) => void
}

export default function FilterButtons({ categories, onFilterChange }: FilterButtonsProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant={activeFilter === "All" ? "default" : "outline"}
        onClick={() => handleFilterClick("All")}
        className="min-w-[100px]"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          onClick={() => handleFilterClick(category)}
          className="min-w-[100px]"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

