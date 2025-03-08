import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ExternalLink, FileText } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Resources</h1>
        <p className="text-xl text-muted-foreground">Access downloads and useful links</p>
      </div>

      <Tabs defaultValue="downloads" className="mb-12">
        <TabsList className="mb-8 w-full justify-start">
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
          <TabsTrigger value="links" id="useful-links">
            Useful Links
          </TabsTrigger>
        </TabsList>

        <TabsContent value="downloads" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Membership Forms</CardTitle>
                <CardDescription>Application forms for different membership types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-24 items-center justify-center">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>KNAPO Brochure</CardTitle>
                <CardDescription>Information about the association</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-24 items-center justify-center">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Papers</CardTitle>
                <CardDescription>Academic papers on probation practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-24 items-center justify-center">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Newsletters</CardTitle>
                <CardDescription>KNAPO newsletters and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-24 items-center justify-center">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>Annual reports and other publications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-24 items-center justify-center">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="links" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Probation Department</CardTitle>
                <CardDescription>Official website of the Probation Department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-24 items-center justify-center">
                  <ExternalLink className="h-16 w-16 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="https://www.probation.go.ke" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

