import Link from "next/link"
import Image from "next/image"
import { CalendarDays } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LatestNews() {
  const newsItems = [
    {
      id: 1,
      title: "Annual KNAPO Conference Announced",
      description: "Join us for the biggest professional gathering of the year in Nairobi.",
      date: "2023-11-15",
      category: "Events",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "New Professional Development Workshops",
      description: "KNAPO launches a series of workshops focusing on leadership skills.",
      date: "2023-11-10",
      category: "Training",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "KNAPO Partners with Ministry of Education",
      description: "A new initiative to improve professional standards across Kenya.",
      date: "2023-11-05",
      category: "Partnerships",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <>
      {newsItems.map((item) => (
        <Link href={`/news/${item.id}`} key={item.id}>
          <Card className="h-full overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={350}
                height={200}
                className="h-full w-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{item.category}</Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="line-clamp-1 text-lg">{item.title}</CardTitle>
              <CardDescription className="line-clamp-2">{item.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </>
  )
}

