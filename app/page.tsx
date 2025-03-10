import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { ChevronRight, Users, Calendar, FileText } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <div className="mb-8 inline-flex h-1 w-24 bg-primary"></div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Kenya National Association of Probation Officers
          </h1>
          <p className="mb-8 max-w-3xl text-xl text-muted-foreground">
            Enhancing professionalism in crime prevention and non-custodial rehabilitation of offenders.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/membership">Become a Member</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our mission is to enhance professionalism in the area of crime prevention as well as non-custodial
              rehabilitation of offenders. KNAPO aims to maintain professional standards in probation practice through a
              code of conduct, promote the welfare of its members, and act as an advisory body in policy development.<br/> It
              fosters cooperation among members, collaborates with global organizations, and provides a platform for
              research and discussions on probation practices. The association plans to mobilize resources to further
              its objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Key Benefits of Membership
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Access specialized training, workshops, certifications, conferences, and the latest research to
                  enhance your knowledge and skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support & Welfare</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Join a supportive community of professionals who share similar challenges and goals, reducing
                  isolation in your work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Networking Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Connect with fellow Probation Officers and other professionals to share best practices and build
                  valuable relationships.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Advocacy & Representation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Be part of an organized body that advocates for better working conditions, policies, and resources for
                  Probation Officers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ethical Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Receive professional support and assistance in navigating ethical challenges, ensuring alignment with
                  professional standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Strengthen both your individual practice and the broader probation profession, allowing for continual
                  growth and positive change.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/membership">Join KNAPO Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News/Updates */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Latest News & Updates</h2>
          <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 text-center shadow-sm">
            <p className="text-lg text-muted-foreground">
              There are no announcements or events at this time. Check back soon for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Quick Links</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/about">
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
                <Users className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">About Us</h3>
                <p className="text-sm text-muted-foreground">Learn about our history, vision, and leadership</p>
                <ChevronRight className="mt-4 h-5 w-5" />
              </div>
            </Link>
            <Link href="/membership">
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
                <Users className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Membership</h3>
                <p className="text-sm text-muted-foreground">Explore membership benefits and how to join</p>
                <ChevronRight className="mt-4 h-5 w-5" />
              </div>
            </Link>
            <Link href="/events">
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
                <Calendar className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Events</h3>
                <p className="text-sm text-muted-foreground">View upcoming events and activities</p>
                <ChevronRight className="mt-4 h-5 w-5" />
              </div>
            </Link>
            <Link href="/resources">
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
                <FileText className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Resources</h3>
                <p className="text-sm text-muted-foreground">Access downloads and useful links</p>
                <ChevronRight className="mt-4 h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

