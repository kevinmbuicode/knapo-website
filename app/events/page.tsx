import Link from "next/link"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsPage() {
  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual KNAPO Conference 2024",
      description: "Join us for the biggest professional gathering of the year in Nairobi.",
      date: "2024-04-15",
      time: "9:00 AM - 5:00 PM",
      location: "Kenyatta International Conference Centre, Nairobi",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "Professional Development Workshop",
      description: "Build essential leadership skills in this interactive workshop.",
      date: "2024-03-20",
      time: "10:00 AM - 3:00 PM",
      location: "Sarova Stanley Hotel, Nairobi",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "Networking Mixer",
      description: "Connect with professionals across various industries in a relaxed setting.",
      date: "2024-03-28",
      time: "5:30 PM - 8:00 PM",
      location: "Radisson Blu Hotel, Upper Hill, Nairobi",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 4,
      title: "Industry Symposium: Future of Work",
      description: "Explore emerging trends and prepare for the changing professional landscape.",
      date: "2024-04-05",
      time: "9:00 AM - 4:00 PM",
      location: "Movenpick Hotel, Westlands, Nairobi",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Events & Calendar</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Stay updated with KNAPO's conferences, seminars, workshops, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {/* {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={350}
                        height={200}
                        className="h-full w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge>Event</Badge>
                        <div className="text-muted-foreground">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/events/${event.id}`} className="w-full">
                        <Button className="w-full">Register Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))} */}
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>No Upcoming Events</CardTitle>
                    <CardDescription>Check back soon for new events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center">
                      <Calendar className="h-24 w-24 text-muted-foreground" />
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      There are no upcoming events scheduled at this time. Please check back later for updates on future
                      events, conferences, seminars, and workshops.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline">Subscribe to Updates</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="past" className="pt-6">
              {/* <div className="flex flex-col items-center space-y-4 text-center">
                <p className="text-muted-foreground">View archives of our past events and access recordings.</p>
                <Link href="/events/archives">
                  <Button>View Event Archives</Button>
                </Link>
              </div> */}
              <div className="rounded-lg border bg-card p-8 text-center">
                <p className="text-muted-foreground">No past events to display.</p>
              </div>
            </TabsContent>
            <TabsContent value="calendar" className="pt-6">
              <div className="border rounded-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-medium">March - April 2024</h3>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center mb-2">
                  <div className="text-sm font-medium">Sun</div>
                  <div className="text-sm font-medium">Mon</div>
                  <div className="text-sm font-medium">Tue</div>
                  <div className="text-sm font-medium">Wed</div>
                  <div className="text-sm font-medium">Thu</div>
                  <div className="text-sm font-medium">Fri</div>
                  <div className="text-sm font-medium">Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {/* Calendar placeholder - simplified for demo */}
                  {Array.from({ length: 35 }).map((_, i) => {
                    const dayNumber = i - 3 // Offset to start March on the right day
                    const hasEvent =
                      [20, 28].includes(dayNumber) || (dayNumber === 5 && i >= 31) || (dayNumber === 15 && i >= 31)

                    return (
                      <div
                        key={i}
                        className={`
                          aspect-square flex items-center justify-center rounded-md p-2
                          ${dayNumber > 0 && dayNumber <= 31 ? "bg-background border" : "text-muted-foreground"}
                          ${hasEvent ? "ring-2 ring-primary ring-offset-2" : ""}
                        `}
                      >
                        {dayNumber > 0 && dayNumber <= 31 ? dayNumber : ""}
                        {hasEvent && <div className="absolute bottom-1 h-1 w-1 rounded-full bg-primary"></div>}
                      </div>
                    )
                  })}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">Events are highlighted on the calendar</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Host an Event with KNAPO</h2>
              <p className="text-muted-foreground">
                Are you interested in hosting a professional development event, workshop, or seminar in partnership with
                KNAPO? We welcome collaboration opportunities that benefit our members and the broader professional
                community.
              </p>
              <div className="pt-4">
                <Link href="/events/propose">
                  <Button>Propose an Event</Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Event Updates</h2>
              <p className="text-muted-foreground">
                Stay informed about upcoming KNAPO events, workshops, and professional development opportunities. Sign
                up to receive email notifications when new events are announced.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

