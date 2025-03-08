"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, CalendarDays, Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load events from localStorage on page load
  useEffect(() => {
    setLoading(true);
    try {
      const storedEvents = localStorage.getItem('knapoEvents');
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      }
    } catch (error) {
      console.error("Error loading events:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Filter and sort events by date
  const currentDate = new Date();
  
  // Sort all events by date
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  // Filter events by upcoming/past
  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = sortedEvents.filter(event => new Date(event.date) < currentDate);

  // Helper function to get highlighted dates for calendar view
  const getHighlightedDates = () => {
    // Extract dates for March and April only for the calendar view
    return upcomingEvents
      .filter(event => {
        const eventDate = new Date(event.date);
        const eventMonth = eventDate.getMonth() + 1; // JavaScript months are 0-indexed
        const eventYear = eventDate.getFullYear();
        return (eventMonth === 3 || eventMonth === 4) && eventYear === currentDate.getFullYear();
      })
      .map(event => {
        return {
          date: new Date(event.date).getDate(),
          month: new Date(event.date).getMonth() + 1,
          title: event.title
        };
      });
  };

  const highlightedDates = getHighlightedDates();

  // Calculate calendar offset based on current month
  const getCalendarOffset = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    return firstDay; // 0 for Sunday, 1 for Monday, etc.
  };

  const calendarOffset = getCalendarOffset();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

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
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="spinner mb-4"></div>
                <p className="text-muted-foreground">Loading events...</p>
              </div>
            </div>
          ) : (
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-auto">
                <TabsTrigger value="upcoming">Upcoming Events ({upcomingEvents.length})</TabsTrigger>
                <TabsTrigger value="past">Past Events ({pastEvents.length})</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="pt-6">
                {upcomingEvents.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {upcomingEvents.map((event) => (
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
                          {event.registrationLink ? (
                            <Link href={event.registrationLink} className="w-full" target="_blank" rel="noopener noreferrer">
                              <Button className="w-full">Register Now</Button>
                            </Link>
                          ) : (
                            <Link href={`/events/${event.id}`} className="w-full">
                              <Button className="w-full">View Details</Button>
                            </Link>
                          )}
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="text-center py-12">
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <Calendar className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No Upcoming Events</h3>
                      <p className="text-muted-foreground">
                        There are no upcoming events scheduled at the moment. Please check back later or subscribe to our newsletter for updates.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="past" className="pt-6">
                {pastEvents.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {pastEvents.map((event) => (
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
                            <Badge variant="secondary">Past Event</Badge>
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
                          <Link href={`/events/archives/${event.id}`} className="w-full">
                            <Button variant="outline" className="w-full">View Details</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="text-center py-12">
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <Calendar className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No Past Events</h3>
                      <p className="text-muted-foreground">
                        There are no past events in our records. Events will appear here after their scheduled date has passed.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="calendar" className="pt-6">
                <div className="border rounded-lg p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-medium">
                      {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h3>
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
                    {/* Calendar with upcoming events highlighted */}
                    {Array.from({ length: 42 }).map((_, i) => {
                      const dayNumber = i - calendarOffset + 1;
                      const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
                      
                      // Check if this day has an event
                      const hasEvent = highlightedDates.some(date => 
                        date.date === dayNumber && 
                        date.month === currentDate.getMonth() + 1
                      );
                      
                      // Find event for tooltip
                      let eventTitle = "";
                      if (hasEvent) {
                        const matchingEvent = highlightedDates.find(date => 
                          date.date === dayNumber && 
                          date.month === currentDate.getMonth() + 1
                        );
                        eventTitle = matchingEvent ? matchingEvent.title : "";
                      }

                      return (
                        <div
                          key={i}
                          className={`
                            aspect-square flex flex-col items-center justify-center rounded-md p-2 relative
                            ${isCurrentMonth ? "bg-background border" : "text-muted-foreground"}
                            ${hasEvent ? "ring-2 ring-primary ring-offset-1" : ""}
                            ${new Date().getDate() === dayNumber && isCurrentMonth ? "bg-muted" : ""}
                          `}
                          title={eventTitle}
                        >
                          <span>{isCurrentMonth ? dayNumber : ""}</span>
                          {hasEvent && <div className="absolute bottom-1 h-1 w-1 rounded-full bg-primary"></div>}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <div className="border p-4 rounded-md bg-background">
                      <h4 className="font-medium mb-2">Upcoming Events</h4>
                      {upcomingEvents.length > 0 ? (
                        <ul className="space-y-2 text-sm">
                          {upcomingEvents
                            .filter(event => {
                              const eventDate = new Date(event.date);
                              const eventMonth = eventDate.getMonth() + 1;
                              const eventYear = eventDate.getFullYear();
                              return (eventMonth === currentDate.getMonth() + 1 || eventMonth === currentDate.getMonth() + 2) && 
                                     eventYear === currentDate.getFullYear();
                            })
                            .slice(0, 5) // Show only first 5 events
                            .map(event => (
                              <li key={event.id} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-primary"></div>
                                <span>
                                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {event.title}
                                </span>
                              </li>
                            ))
                          }
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">No upcoming events this month.</p>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
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
  );
}