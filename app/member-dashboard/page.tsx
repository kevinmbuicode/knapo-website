"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { FileText, Users, BookOpen, Download } from "lucide-react";
import { supabase } from "../../lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function MemberDashboardPage() {
  const [session, setSession] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch session and user data on component mount
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setSession(session);

        // Fetch user profile from the database
        const { data: profile, error } = await supabase
          .from("members")
          .select("*")
          .eq("membership_number", session.user.email) // Assuming membership_number is used as email
          .single();

        if (profile) setUserProfile(profile);
      }
    };

    fetchSession();

    // Subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setSession(session);
        } else {
          setSession(null);
          setUserProfile(null);
        }
      }
    );

    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  // Handle profile update
  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedProfile = {
      name: formData.get("name"),
      address: formData.get("address"),
    };

    // Update the profile in the database
    const { error } = await supabase
      .from("members")
      .update(updatedProfile)
      .eq("membership_number", session?.user.email); // Use membership_number as identifier

    if (!error) {
      setUserProfile({ ...userProfile, ...updatedProfile });
      setIsModalOpen(false);
    } else {
      alert("Failed to update profile. Please try again.");
    }
  };

  if (!session) {
    return (
      <div className="container py-12">
        <p className="text-xl text-muted-foreground">
          Please sign in to access member resources
        </p>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Member Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Welcome, {userProfile?.name || "Member"}! Access exclusive member
          resources and information.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Member Directory */}
          <Card>
            <CardHeader>
              <CardTitle>Member Directory</CardTitle>
              <CardDescription>
                Connect with other KNAPO members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/member-dashboard/directory">View Directory</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Constitution */}
          <Card>
            <CardHeader>
              <CardTitle>Constitution</CardTitle>
              <CardDescription>KNAPO's governing document</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center">
                <FileText className="h-16 w-16 text-primary" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/member-dashboard/constitution">
                  <FileText className="mr-2 h-4 w-4" />
                  View Constitution
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Governance Manual */}
          <Card>
            <CardHeader>
              <CardTitle>Governance Manual</CardTitle>
              <CardDescription>Guidelines for KNAPO governance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center">
                <BookOpen className="h-16 w-16 text-primary" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/member-dashboard/governance">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Manual
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Code of Conduct */}
          <Card>
            <CardHeader>
              <CardTitle>Code of Conduct</CardTitle>
              <CardDescription>
                Professional standards for members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center">
                <FileText className="h-16 w-16 text-primary" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/member-dashboard/code-of-conduct">
                  <FileText className="mr-2 h-4 w-4" />
                  View Code of Conduct
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Exclusive Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Exclusive Resources</CardTitle>
              <CardDescription>
                Member-only documents and resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center">
                <Download className="h-16 w-16 text-primary" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/member-dashboard/resources">
                  <Download className="mr-2 h-4 w-4" />
                  Access Resources
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* My Profile */}
          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
              <CardDescription>
                Manage your membership information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
            </CardContent>
            <CardFooter>
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full">Update Profile</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                    <DialogDescription>
                      Update your membership details below.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        defaultValue={userProfile?.name}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        defaultValue={userProfile?.address}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Save Changes
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
