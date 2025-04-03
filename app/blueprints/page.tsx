"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BlueprintViewer from "./blueprint-viewer"

export default function BlueprintsPage() {
  const blueprintCategories = [
    {
      id: "technical",
      name: "Technical Drawings",
      blueprints: [
        {
          id: 1,
          title: "Evening Gown Technical Drawing",
          description: "Detailed technical specifications for the signature evening gown from the Winter collection.",
          image: "/placeholder.svg?height=800&width=600&text=Blueprint%201",
          details: [
            "Fabric: Silk Charmeuse",
            "Lining: Silk Habotai",
            "Closure: Invisible Zipper",
            "Hem: Hand-rolled",
            "Embellishments: Hand-sewn crystals",
          ],
        },
        {
          id: 2,
          title: "Tailored Blazer Specifications",
          description: "Technical drawing with measurements and construction notes for the structured blazer.",
          image: "/placeholder.svg?height=800&width=600&text=Blueprint%202",
          details: [
            "Fabric: Italian Wool Blend",
            "Lining: Cupro",
            "Closure: Horn Buttons",
            "Pockets: Welt with Flaps",
            "Shoulder: Lightly Padded",
          ],
        },
      ],
    },
    {
      id: "patterns",
      name: "Pattern Layouts",
      blueprints: [
        {
          id: 3,
          title: "Summer Dress Pattern",
          description: "Pattern layout and cutting guide for the lightweight summer dress with pleated details.",
          image: "/placeholder.svg?height=800&width=600&text=Blueprint%203",
          details: [
            "Pattern Pieces: 8",
            "Fabric Required: 3.5 yards",
            "Seam Allowance: 5/8 inch",
            "Suggested Fabrics: Linen, Cotton Poplin",
            "Difficulty Level: Intermediate",
          ],
        },
        {
          id: 4,
          title: "Wide-Leg Trouser Pattern",
          description: "Pattern layout for the signature wide-leg trousers with detailed pocket construction.",
          image: "/placeholder.svg?height=800&width=600&text=Blueprint%204",
          details: [
            "Pattern Pieces: 12",
            "Fabric Required: 2.75 yards",
            "Seam Allowance: 1/2 inch",
            "Suggested Fabrics: Wool Gabardine, Tropical Weight Wool",
            "Difficulty Level: Advanced",
          ],
        },
      ],
    },
    {
      id: "construction",
      name: "Construction Guides",
      blueprints: [
        {
          id: 5,
          title: "Couture Sleeve Construction",
          description: "Step-by-step construction guide for the signature sleeve with architectural details.",
          image: "/placeholder.svg?height=800&width=600&text=Blueprint%205",
          details: [
            "Construction Time: 4-6 hours",
            "Special Techniques: French Seams, Hand Picking",
            "Tools Required: Sleeve Board, Tailor's Ham",
            "Interfacing: Silk Organza",
            "Pressing Requirements: Steam + Clapper",
          ],
        },
        {
          id: 6,
          title: "Collar Construction Sequence",
          description: "Detailed construction sequence for the stand collar with hidden closure.",
          image: "/placeholder.svg?height=800&width=600&text=Blueprint%206",
          details: [
            "Construction Time: 2-3 hours",
            "Special Techniques: Pad Stitching, Edge Stitching",
            "Tools Required: Point Presser, Needle Board",
            "Interfacing: Hair Canvas",
            "Pressing Requirements: Dry Iron + Wooden Point Press",
          ],
        },
      ],
    },
  ]

  const [activeTab, setActiveTab] = useState("technical")
  const [selectedBlueprint, setSelectedBlueprint] = useState(blueprintCategories[0].blueprints[0])

  const handleBlueprintSelect = (blueprint) => {
    setSelectedBlueprint(blueprint)
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Blueprints</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Explore the technical side of fashion design with detailed blueprints and construction specifications.
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="technical" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            {blueprintCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {blueprintCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-[1fr_300px] gap-8">
                <div>
                  <BlueprintViewer image={selectedBlueprint.image} title={selectedBlueprint.title} />
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{selectedBlueprint.title}</CardTitle>
                      <CardDescription>{selectedBlueprint.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium mb-2">Specifications</h4>
                      <ul className="space-y-1 text-sm">
                        {selectedBlueprint.details.map((detail, index) => (
                          <li key={index} className="pb-1 border-b border-border last:border-0 last:pb-0">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-3">
                    {category.blueprints.map((blueprint) => (
                      <div
                        key={blueprint.id}
                        className={`cursor-pointer overflow-hidden rounded-lg border transition-all hover:shadow-md ${
                          selectedBlueprint.id === blueprint.id ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => handleBlueprintSelect(blueprint)}
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <img
                            src={blueprint.image || "/placeholder.svg"}
                            alt={blueprint.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-2">
                          <p className="text-xs font-medium truncate">{blueprint.title}</p>
                        </div>
                      </div>
                    ))}
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

