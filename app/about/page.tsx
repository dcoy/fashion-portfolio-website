import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Timeline from "./timeline"

export default function AboutPage() {
  const skills = [
    { name: "Pattern Making", level: 95 },
    { name: "Textile Design", level: 90 },
    { name: "Draping", level: 85 },
    { name: "Digital Design", level: 80 },
    { name: "Sustainable Practices", level: 90 },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="relative aspect-square overflow-hidden rounded-lg md:sticky md:top-20">
          <Image
            src="/placeholder.svg?height=800&width=800&text=Designer%20Portrait"
            alt="Elena Moda - Fashion Designer"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Elena Moda</h1>
            <p className="text-gray-500 md:text-xl">
              Fashion designer, artist, and visionary creating timeless pieces that blend form and function.
            </p>
          </div>

          <Tabs defaultValue="background">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
            </TabsList>

            <TabsContent value="background" className="space-y-4">
              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Background</h2>
                <p className="leading-relaxed text-gray-700">
                  With over a decade of experience in the fashion industry, Elena Moda has established herself as a
                  distinctive voice in contemporary design. After graduating from the prestigious Fashion Institute of
                  Design, she honed her craft working with renowned fashion houses in Paris and Milan before launching
                  her own label in 2018.
                </p>
                <p className="leading-relaxed text-gray-700">
                  Her work is characterized by a meticulous attention to detail, innovative silhouettes, and a
                  commitment to sustainable practices. Drawing inspiration from architecture, nature, and cultural
                  movements, Elena creates pieces that transcend seasonal trends and stand as wearable art.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Skills & Expertise</h2>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="philosophy" className="space-y-4">
              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Design Philosophy</h2>
                <p className="leading-relaxed text-gray-700">
                  At the core of Elena's design philosophy is the belief that clothing should empower the wearer while
                  respecting the environment. Each collection is developed with a focus on ethical sourcing, minimal
                  waste production, and timeless aesthetics that encourage mindful consumption.
                </p>
                <p className="leading-relaxed text-gray-700">
                  "I design for the individual who appreciates the story behind their clothing—someone who values
                  craftsmanship, sustainability, and self-expression through what they wear. My goal is to create pieces
                  that become cherished parts of a wardrobe for years, not seasons."
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-6 border rounded-lg bg-secondary/30">
                  <h3 className="font-medium mb-2">Sustainability Commitment</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Zero-waste pattern cutting techniques</li>
                    <li>Locally sourced, organic materials</li>
                    <li>Ethical manufacturing partnerships</li>
                    <li>Garment recycling program</li>
                    <li>Carbon-neutral shipping</li>
                  </ul>
                </div>
                <div className="p-6 border rounded-lg bg-secondary/30">
                  <h3 className="font-medium mb-2">Design Principles</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Form follows function</li>
                    <li>Timeless over trendy</li>
                    <li>Quality craftsmanship</li>
                    <li>Inclusive sizing</li>
                    <li>Versatile styling potential</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="career" className="space-y-4">
              <Timeline />

              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Recognition</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Fashion Innovation Award, 2023</li>
                  <li>Sustainable Design Excellence, 2022</li>
                  <li>Featured in Vogue, Elle, and Harper's Bazaar</li>
                  <li>Showcased at Paris Fashion Week, 2021-2024</li>
                  <li>CFDA Emerging Designer Finalist, 2020</li>
                  <li>Metropolitan Museum Costume Institute Exhibition, 2023</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

