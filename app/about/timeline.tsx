import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Timeline() {
  const timelineEvents = [
    {
      year: "2010-2014",
      title: "Fashion Institute of Design",
      description: "Graduated with honors in Fashion Design and Textile Innovation",
    },
    {
      year: "2014-2016",
      title: "Apprenticeship at Maison Laurent",
      description: "Trained under renowned designer Jean Laurent in Paris",
    },
    {
      year: "2016-2018",
      title: "Senior Designer at Milano Moda",
      description: "Led design team for ready-to-wear collections",
    },
    {
      year: "2018",
      title: "Launch of Elena Moda",
      description: "Established independent label with debut collection at Milan Fashion Week",
    },
    {
      year: "2020",
      title: "Sustainable Fashion Award",
      description: "Recognized for pioneering eco-friendly production methods",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Opened flagship stores in New York, London, and Tokyo",
    },
    {
      year: "2023-Present",
      title: "Creative Director",
      description: "Leading creative vision while mentoring emerging designers",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium">Career Timeline</h2>
      <div className="relative border-l pl-6 space-y-6">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[31px] h-6 w-6 rounded-full border-4 border-background bg-secondary"></div>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{event.title}</CardTitle>
                <CardDescription>{event.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{event.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

