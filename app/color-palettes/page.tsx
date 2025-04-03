"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ColorCard from "./color-card"

export default function ColorPalettesPage() {
  const palettes = [
    {
      id: "spring",
      name: "Spring Collection 2025",
      description: "Fresh, vibrant hues inspired by spring blossoms and new beginnings.",
      colors: [
        { hex: "#F8B195", name: "Peach" },
        { hex: "#F67280", name: "Rose" },
        { hex: "#C06C84", name: "Mauve" },
        { hex: "#6C5B7B", name: "Lavender" },
        { hex: "#355C7D", name: "Navy" },
      ],
    },
    {
      id: "summer",
      name: "Summer Essentials",
      description: "Light, airy tones that capture the essence of summer days.",
      colors: [
        { hex: "#A8E6CE", name: "Mint" },
        { hex: "#DCEDC2", name: "Sage" },
        { hex: "#FFD3B5", name: "Peach" },
        { hex: "#FFAAA6", name: "Coral" },
        { hex: "#FF8C94", name: "Salmon" },
      ],
    },
    {
      id: "autumn",
      name: "Autumn Transition",
      description: "Rich, warm colors inspired by falling leaves and harvest season.",
      colors: [
        { hex: "#CAEBF2", name: "Sky" },
        { hex: "#A9A9A9", name: "Silver" },
        { hex: "#FF7B89", name: "Coral" },
        { hex: "#A3A1A8", name: "Slate" },
        { hex: "#4A4A4A", name: "Charcoal" },
      ],
    },
    {
      id: "winter",
      name: "Winter Neutrals",
      description: "Sophisticated, muted tones that reflect the quiet elegance of winter.",
      colors: [
        { hex: "#EFEFEF", name: "Snow" },
        { hex: "#D6D6D6", name: "Fog" },
        { hex: "#B4B4B4", name: "Stone" },
        { hex: "#555555", name: "Slate" },
        { hex: "#2E2E2E", name: "Charcoal" },
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState("spring")

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Color Palettes</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Explore the carefully curated color palettes that inspire and define my collections.
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="spring" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {palettes.map((palette) => (
              <TabsTrigger key={palette.id} value={palette.id}>
                {palette.name.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {palettes.map((palette) => (
            <TabsContent key={palette.id} value={palette.id} className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-medium">{palette.name}</h2>
                <p className="mt-2 text-gray-500">{palette.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
                {palette.colors.map((color) => (
                  <ColorCard key={color.hex} hex={color.hex} name={color.name} />
                ))}
              </div>

              <div className="p-6 border rounded-lg bg-secondary/50">
                <h3 className="font-medium mb-4">Palette Usage</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Primary Applications</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Main fabric colors for signature pieces</li>
                      <li>Accent details and trims</li>
                      <li>Marketing materials and lookbooks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Complementary Pairings</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>
                        {palette.colors[0].name} + {palette.colors[2].name} for contrast
                      </li>
                      <li>
                        {palette.colors[1].name} + {palette.colors[4].name} for depth
                      </li>
                      <li>All tones work with neutral basics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

