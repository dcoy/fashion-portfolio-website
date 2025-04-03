"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface MasonryGridProps {
  items: ReactNode[]
}

export default function MasonryGrid({ items }: MasonryGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!gridRef.current) return

    const resizeGridItems = () => {
      const grid = gridRef.current
      if (!grid) return

      const items = grid.querySelectorAll(".masonry-item")
      items.forEach((item) => {
        const rowHeight = 10
        const rowSpan = Math.ceil((item.getBoundingClientRect().height + 16) / rowHeight)
        item.setAttribute("style", `--span: ${rowSpan}`)
      })
    }

    // Initial resize
    resizeGridItems()

    // Set loaded after initial resize
    setLoaded(true)

    // Resize on window resize
    window.addEventListener("resize", resizeGridItems)

    return () => {
      window.removeEventListener("resize", resizeGridItems)
    }
  }, [items])

  return (
    <div
      ref={gridRef}
      className={`masonry-grid transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      {items.map((item, index) => (
        <div key={index} className="masonry-item">
          {item}
        </div>
      ))}
    </div>
  )
}

