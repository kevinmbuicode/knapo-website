"use client"
import { useState, useEffect } from "react";
import { Calendar, CalendarDays, Download, Save, PlusCircle, Trash2, Edit, FileSpreadsheet, Link, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import * as XLSX from 'xlsx';

export default function EventManagementPage() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    id: Date.now(),
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    registrationLink: "",
    image: "/placeholder.svg?height=200&width=350",
    imageFile: null
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Load events from localStorage on page load
  useEffect(() => {
    const storedEvents = localStorage.getItem('knapoEvents');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('knapoEvents', JSON.stringify(events));
  }, [events]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview the image
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewEvent({
        ...newEvent,
        image: event.target.result,
        imageFile: file
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventToSave = {
      ...newEvent,
      id: isEditMode && editId ? editId : Date.now(),
      // Ensure we only save the data URL of the image, not the file object
      imageFile: null
    };
    
    if (isEditMode && editId) {
      // Update existing event
      setEvents(events.map(event => 
        event.id === editId ? eventToSave : event
      ));
      setIsEditMode(false);
      setEditId(null);
    } else {
      // Add new event
      setEvents([...events, eventToSave]);
    }
    
    // Reset form
    setNewEvent({
      id: Date.now(),
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      registrationLink: "",
      image: "/placeholder.svg?height=200&width=350",
      imageFile: null
    });
  };

  const handleEdit = (event) => {
    setNewEvent({ ...event, imageFile: null });
    setIsEditMode(true);
    setEditId(event.id);
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    
    // Create a worksheet with all events (excluding imageFile which isn't serializable)
    const eventsForExport = events.map(event => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      registrationLink: event.registrationLink,
      image: event.image,
      isPast: new Date(event.date) < new Date()
    }));
    
    const worksheet = XLSX.utils.json_to_sheet(eventsForExport);
    
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "All Events");
    
    // Create separate worksheets for upcoming and past events
    const upcomingEvents = eventsForExport.filter(event => new Date(event.date) >= new Date());
    const pastEvents = eventsForExport.filter(event => new Date(event.date) < new Date());
    
    const upcomingWorksheet = XLSX.utils.json_to_sheet(upcomingEvents);
    const pastWorksheet = XLSX.utils.json_to_sheet(pastEvents);
    
    XLSX.utils.book_append_sheet(workbook, upcomingWorksheet, "Upcoming Events");
    XLSX.utils.book_append_sheet(workbook, pastWorksheet, "Past Events");
    
    // Export the workbook
    XLSX.writeFile(workbook, "KNAPO_Events_Database.xlsx");
  };

  const importFromExcel = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      
      // Get the first worksheet
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      
      // Convert to JSON
      const importedEvents = XLSX.utils.sheet_to_json(worksheet);
      
      // Update state with imported events
      setEvents(importedEvents.map(event => ({
        ...event,
        id: event.id || Date.now() + Math.floor(Math.random() * 1000),
        image: event.image || "/placeholder.svg?height=200&width=350",
        imageFile: null
      })));
    };
    
    reader.readAsArrayBuffer(file);
  };

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  // Filter events by upcoming/past
  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= new Date());
  const pastEvents = sortedEvents.filter(event => new Date(event.date) < new Date());

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Management</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Create, manage, and export KNAPO events. Events with past dates are automatically categorized as past events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Event Creation Form */}
            <Card>
              <CardHeader>
                <CardTitle>{isEditMode ? "Edit Event" : "Create New Event"}</CardTitle>
                <CardDescription>
                  Fill in the details to {isEditMode ? "update an" : "add a new"} event
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={newEvent.title}
                      onChange={handleInputChange}
                      placeholder="Annual Conference 2024"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={newEvent.description}
                      onChange={handleInputChange}
                      placeholder="Enter event description"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={newEvent.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        name="time"
                        placeholder="9:00 AM - 5:00 PM"
                        value={newEvent.time}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Kenyatta International Conference Centre, Nairobi"
                      value={newEvent.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registrationLink">Registration Link</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="registrationLink"
                        name="registrationLink"
                        placeholder="https://example.com/register"
                        value={newEvent.registrationLink}
                        onChange={handleInputChange}
                      />
                      {newEvent.registrationLink && (
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon"
                          onClick={() => window.open(newEvent.registrationLink, '_blank')}
                        >
                          <Link className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="imageUpload">Event Poster/Image</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          id="imageUpload"
                          name="imageUpload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Upload an image for the event poster
                        </p>
                      </div>
                      <div className="border rounded-md overflow-hidden">
                        <img 
                          src={newEvent.image} 
                          alt="Event preview" 
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button type="submit" className="w-full">
                      {isEditMode ? (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Update Event
                        </>
                      ) : (
                        <>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          Add Event
                        </>
                      )}
                    </Button>
                    {isEditMode && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full mt-2"
                        onClick={() => {
                          setIsEditMode(false);
                          setEditId(null);
                          setNewEvent({
                            id: Date.now(),
                            title: "",
                            description: "",
                            date: "",
                            time: "",
                            location: "",
                            registrationLink: "",
                            image: "/placeholder.svg?height=200&width=350",
                            imageFile: null
                          });
                        }}
                      >
                        Cancel Edit
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Excel Import/Export */}
            <Card>
              <CardHeader>
                <CardTitle>Database Management</CardTitle>
                <CardDescription>
                  Import and export event data as Excel spreadsheets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <FileSpreadsheet className="h-5 w-5 mr-2 text-primary" />
                      <span className="font-medium">Excel Database</span>
                    </div>
                    <Badge variant="outline">{events.length} Events</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                    <div>
                      <span className="font-medium text-foreground">Upcoming:</span> {upcomingEvents.length} events
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Past:</span> {pastEvents.length} events
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button 
                      onClick={exportToExcel} 
                      className="w-full"
                      variant="outline"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Export to Excel
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <Label htmlFor="import-excel" className="block mb-2">Import from Excel</Label>
                  <div className="flex items-center space-x-2">
                    <Input 
                      id="import-excel" 
                      type="file" 
                      accept=".xlsx, .xls" 
                      onChange={importFromExcel} 
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Format
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Excel Format</DialogTitle>
                          <DialogDescription>
                            Your Excel file should have the following columns:
                          </DialogDescription>
                        </DialogHeader>
                        <div className="border rounded-md p-3 text-sm bg-muted/50">
                          <code>id, title, description, date, time, location, registrationLink, image</code>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          The date should be in YYYY-MM-DD format. If id is not provided, a new one will be generated.
                        </p>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:w-auto">
              <TabsTrigger value="upcoming">
                <CalendarDays className="mr-2 h-4 w-4" />
                Upcoming Events ({upcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="past">
                <Calendar className="mr-2 h-4 w-4" />
                Past Events ({pastEvents.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="pt-6">
              {upcomingEvents.length > 0 ? (
                <div className="grid gap-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4">
                          <img 
                            src={event.image} 
                            alt={`${event.title} poster`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-4">
                          <div className="flex justify-between items-center mb-3">
                            <Badge>Upcoming</Badge>
                            <span className="text-muted-foreground text-sm">
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                          <div className="text-sm space-y-1">
                            <div className="flex items-center">
                              <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                            {event.registrationLink && (
                              <div className="flex items-center">
                                <Link className="mr-2 h-4 w-4 text-muted-foreground" />
                                <a 
                                  href={event.registrationLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  Registration Link
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="md:w-1/4 flex flex-row md:flex-col justify-end p-4 gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEdit(event)}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDelete(event.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-8">
                  <CardContent>
                    <div className="flex justify-center mb-4">
                      <Calendar className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No Upcoming Events</h3>
                    <p className="text-muted-foreground">
                      Use the form above to add new events to your calendar.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="pt-6">
              {pastEvents.length > 0 ? (
                <div className="grid gap-4">
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4">
                          <img 
                            src={event.image} 
                            alt={`${event.title} poster`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-4">
                          <div className="flex justify-between items-center mb-3">
                            <Badge variant="secondary">Past</Badge>
                            <span className="text-muted-foreground text-sm">
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                          <div className="text-sm space-y-1">
                            <div className="flex items-center">
                              <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                            {event.registrationLink && (
                              <div className="flex items-center">
                                <Link className="mr-2 h-4 w-4 text-muted-foreground" />
                                <a 
                                  href={event.registrationLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  Registration Link
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="md:w-1/4 flex flex-row md:flex-col justify-end p-4 gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEdit(event)}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDelete(event.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-8">
                  <CardContent>
                    <div className="flex justify-center mb-4">
                      <Calendar className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No Past Events</h3>
                    <p className="text-muted-foreground">
                      Past events will appear here when their date has passed.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}