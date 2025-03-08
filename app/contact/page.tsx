import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  // Submission status
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, success: false, error: null });

    try {
      // Replace with your Google Sheets API endpoint
      // This is created using Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors", // Required for Google Apps Script
        }
      );

      // Since no-cors mode doesn't return response data, we assume success
      setStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitted: false, submitting: false, success: false, error: null });
      }, 5000);

    } catch (error) {
      setStatus({
        submitted: true,
        submitting: false,
        success: false,
        error: "Failed to submit form. Please try again."
      });
    }
  };

  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with the Kenya National Association of Probation Officers
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <address className="not-italic text-muted-foreground">
                    <p>The National Secretary,</p>
                    <p>Kenya National Association of Probation Officers,</p>
                    <p>P. O. Box 6104-00100,</p>
                    <p>Nairobi, KENYA.</p>
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+254-702-850-673</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">knapo.org@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Twitter className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Twitter</h3>
                  <p className="text-muted-foreground">@KNAPO_</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Facebook className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Facebook</h3>
                  <p className="text-muted-foreground">knapokenya</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent>
              {status.success && (
                <Alert className="mb-6 bg-green-50 border-green-600">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Success!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Your message has been sent successfully. We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}
              
              {status.error && (
                <Alert className="mb-6 bg-red-50 border-red-600">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-800">Error</AlertTitle>
                  <AlertDescription className="text-red-700">
                    {status.error}
                  </AlertDescription>
                </Alert>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Message subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={status.submitting}
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}