"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import FabricSwatch from "./fabric-swatch"

interface DesignDetailProps {
  design: {
    id: number
    title: string
    category: string
    image: string
    description?: string
    materials?: string[]
    fabricSwatches?: Array<{
      name: string
      color: string
      texture: string
      composition: string
    }>
    dimensions?: string
    careInstructions?: string[]
    aspectRatio?: number
  }
}

export default function DesignDetail({ design }: DesignDetailProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="group relative overflow-hidden rounded-lg cursor-pointer">
          <div
            className={`w-full relative ${design.aspectRatio ? "" : "aspect-[3/4]"}`}
            style={design.aspectRatio ? { paddingBottom: `${(1 / design.aspectRatio) * 100}%` } : {}}
          >
            <Image
              src={design.image || "/placeholder.svg"}
              alt={design.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white font-medium">{design.title}</h3>
            <p className="text-white/80 text-sm">{design.category}</p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{design.title}</DialogTitle>
          <DialogDescription>
            <Badge variant="outline">{design.category}</Badge>
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="care">Care</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="aspect-[4/3] relative rounded-md overflow-hidden">
              <Image src={design.image || "/placeholder.svg"} alt={design.title} fill className="object-cover" />
            </div>
            <p className="text-sm text-gray-700">{design.description || "No description available."}</p>
            {design.dimensions && (
              <div>
                <h4 className="text-sm font-medium">Dimensions</h4>
                <p className="text-sm text-gray-700">{design.dimensions}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="materials">
            <div className="space-y-4">
              {design.materials && design.materials.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Materials</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    {design.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
              )}

              {design.fabricSwatches && design.fabricSwatches.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Fabric Swatches</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {design.fabricSwatches.map((swatch, index) => (
                      <FabricSwatch
                        key={index}
                        name={swatch.name}
                        color={swatch.color}
                        texture={swatch.texture}
                        composition={swatch.composition}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="care">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Care Instructions</h4>
              {design.careInstructions && design.careInstructions.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {design.careInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-700">No care instructions available.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

