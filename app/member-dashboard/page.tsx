"use client"

import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, BookOpen, Download, UserCircle, Settings } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function MemberDashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const router = useRouter()
  
  // Redirect if not signed in (client-side protection)
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/")
    }
  }, [isLoaded, isSignedIn, router])

  // Show loading state while Clerk loads
  if (!isLoaded || !isSignedIn) {
    return (
      <div className="container py-12">
        <div className="mb-12 space-y-4">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <div className="flex h-24 items-center justify-center">
                  <Skeleton className="h-16 w-16 rounded-full" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome, {user?.firstName || user?.username || "Member"}
        </h1>
        <p className="text-xl text-muted-foreground">Access exclusive member resources and information</p>
      </div>

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
              <UserCircle className="h-16 w-16 text-primary" />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full gap-2">
              <Button className="flex-1" asChild>
                <Link href="/member-dashboard/profile">
                  <UserCircle className="mr-2 h-4 w-4" />
                  View Profile
                </Link>
              </Button>
              <Button variant="outline" size="icon" onClick={() => window.location.href = "/user/profile"}>
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}