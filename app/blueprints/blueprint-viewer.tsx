"use client"

import { useState } from "react"
import Image from "next/image"
import { ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface BlueprintViewerProps {
  image: string
  title: string
}

export default function BlueprintViewer({ image, title }: BlueprintViewerProps) {
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 2))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.5))
  }

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Slider
            value={[scale]}
            min={0.5}
            max={2}
            step={0.1}
            onValueChange={(value) => setScale(value[0])}
            className="w-24"
          />
          <Button variant="outline" size="icon" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleRotate}>
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden border rounded-lg bg-secondary/30">
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            transformOrigin: "center",
          }}
        >
          <Image src={image || "/placeholder.svg"} alt={title} width={800} height={600} className="object-contain" />
        </div>
      </div>
    </div>
  )
}

