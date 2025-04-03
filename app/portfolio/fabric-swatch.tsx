"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface FabricSwatchProps {
  name: string
  color: string
  texture: string
  composition: string
}

export default function FabricSwatch({ name, color, texture, composition }: FabricSwatchProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            className="overflow-hidden cursor-pointer transition-all hover:shadow-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContent className="p-0">
              <div
                className="h-16 w-full relative transition-transform duration-300"
                style={{
                  backgroundColor: color,
                  backgroundImage: `url(${texture})`,
                  backgroundBlendMode: "overlay",
                  backgroundSize: "cover",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="p-2 text-center">
                <p className="text-xs font-medium truncate">{name}</p>
              </div>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-xs">
            <p className="font-medium">{name}</p>
            <p>{composition}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

