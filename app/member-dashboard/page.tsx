"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, BookOpen, Download } from "lucide-react"
import { useUser } from "@clerk/nextjs"

export default function MemberDashboardPage() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Member Dashboard</h1>
        {isSignedIn ? (
          <>
            <p className="text-xl text-muted-foreground">
              Welcome, {user?.firstName || "Member"}! Access exclusive member resources and information
            </p>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Member Directory</CardTitle>
                  <CardDescription>Connect with other KNAPO members</CardDescription>
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

              <Card>
                <CardHeader>
                  <CardTitle>Code of Conduct</CardTitle>
                  <CardDescription>Professional standards for members</CardDescription>
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

              <Card>
                <CardHeader>
                  <CardTitle>Exclusive Resources</CardTitle>
                  <CardDescription>Member-only documents and resources</CardDescription>
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

              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>Manage your membership information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-24 items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/member-dashboard/profile">
                      <Users className="mr-2 h-4 w-4" />
                      View Profile
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </>
        ) : (
          <p className="text-xl text-muted-foreground">
            Please sign in to access member resources
          </p>
          /* Note: The middleware will handle redirecting to sign-in */
        )}
      </div>
    </div>
  )
}