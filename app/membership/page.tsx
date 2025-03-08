import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

export default function MembershipPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Membership</h1>
        <p className="text-xl text-muted-foreground">Join the Kenya National Association of Probation Officers</p>
      </div>

      <Tabs defaultValue="benefits" className="mb-12">
        <TabsList className="mb-8 w-full justify-start">
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="types">Membership Types</TabsTrigger>
          <TabsTrigger value="joining">Joining Instructions</TabsTrigger>
        </TabsList>

        <TabsContent value="benefits" className="space-y-8">
          <div className="prose max-w-none">
            <p className="text-lg">
              Joining the Kenya National Association of Probation Officers will offer you several key benefits, both
              professionally and personally. Here are some of the main advantages:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    You will gain access to specialized training sessions, workshops, and seminars that help enhance
                    your knowledge and skills in probation work.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    You will get certificates that will help you advance your career and meet professional standards.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    Receive special access to conferences, networking events, and other industry gatherings that provide
                    valuable learning and exposure.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    You will stay up to date with the latest research, reports, and publications related to probation
                    work released by the association.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support and Welfare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    You will become part of a supportive community of professionals who share similar challenges and
                    goals. This can foster a sense of belonging and reduce feelings of isolation in your work.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    Given the nature of probation work, the association often provides a space for members to share
                    experiences, seek advice, and receive emotional support from peers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Networking Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    You will have an opportunity to connect with fellow Probation Officers and other professionals in
                    related fields; and share best practices and advice.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    You will build relationships with organizations, both local and international, that support
                    probation work, leading to potential partnerships or collaboration on projects.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advocacy and Representation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    You will be part of an organized body that advocates for better working conditions, policies, and
                    resources for Probation Officers.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p>
                    You will get professional support and assistance in navigating ethical challenges, ensuring that you
                    are aligned with professional standards and regulations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg">
              Joining the Kenya National Association of Probation Officers strengthens both your individual practice and
              the broader probation profession, allowing for continual growth and positive change in the field.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="types" className="space-y-8">
          <div className="prose max-w-none">
            <p className="text-lg">
              KNAPO offers two types of memberships: Individual Membership and Corporate Membership.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold">I. Individual Membership</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Serving Probation Officers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Serving Probation Officers are eligible for individual membership, which involves a monthly or
                      annual contribution.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Monthly: Kshs. 400 | Annual: Kshs. 4,800</p>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Students pursuing studies in fields related to probation or criminal justice can join at a reduced
                      rate.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Monthly: Kshs. 100 | Annual: Kshs. 1,200</p>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Honorary/Retired Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      This membership category is for individuals who have made distinguished contributions to probation
                      practice or offender rehabilitation.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Monthly: Kshs. 100 | Annual: Kshs. 1,200</p>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">II. Corporate Membership</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Local (Kenyan) Corporate Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Kenyan organizations, including government bodies, non-profits, or businesses with an interest in
                      probation and rehabilitation.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Registration: Kshs. 5,000 | Annual: Kshs. 10,000</p>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Donor Agencies in Kenya</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Donor organizations based in Kenya can also join as corporate members, showing their support for
                      probation services and offender rehabilitation.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Registration: None | Annual: USD $3,000</p>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Regional (East African) Corporate Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Organizations from other East African countries can join as regional corporate members to
                      strengthen collaboration in probation practices.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Registration: USD $100 | Annual: USD $250</p>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>International Corporate Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      International organizations, including NGOs and other entities supporting global probation
                      efforts, promoting cross-border cooperation.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Registration: USD $200 | Annual: USD $500</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="joining" className="space-y-8">
          <div className="prose max-w-none">
            <p className="text-lg">To join KNAPO, follow these steps based on your membership type:</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold">I. Individual Membership</h3>
              <ol className="space-y-6">
                <li className="rounded-lg border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">1. Complete the Membership Form</h4>
                  <p>Fill out the membership form available on the KNAPO website or at the office.</p>
                </li>
                <li className="rounded-lg border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">2. Submit the Required Documents</h4>
                  <p>
                    Depending on your membership category (Serving Probation Officer, Student, or Honorary/Retired
                    Member), submit any necessary documents, such as proof of employment or student status.
                  </p>
                </li>
                <li className="rounded-lg border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">3. Make the Required Contributions</h4>
                  <p>After registration, make the monthly or annual contribution as specified for your category:</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <strong>Serving Probation Officers:</strong> Monthly contribution of Kshs. 400 or an annual
                      contribution of Kshs. 4,800.
                    </li>
                    <li>
                      <strong>Students:</strong> Monthly contribution of Kshs. 100 or an annual contribution of Kshs.
                      1,200.
                    </li>
                    <li>
                      <strong>Honorary/Retired Members:</strong> Monthly contribution of Kshs. 100 or an annual
                      contribution of Kshs. 1,200.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">II. Corporate Membership</h3>
              <ol className="space-y-6">
                <li className="rounded-lg border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">1. Complete the Corporate Membership Form</h4>
                  <p>
                    Fill out the corporate membership application form available on the KNAPO website or at the office.
                  </p>
                </li>
                <li className="rounded-lg border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">2. Submit Relevant Documents</h4>
                  <p>
                    Provide necessary documentation for your organization, such as business registration certificates or
                    proof of donor agency status.
                  </p>
                </li>
                <li className="rounded-lg border bg-card p-6">
                  <h4 className="mb-2 text-xl font-semibold">3. Make the Required Payments</h4>
                  <p>
                    Depending on your organization's category, submit the required registration and annual subscription
                    fees:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <strong>Local (Kenyan) Corporate Members:</strong> Registration fee of Kshs. 5,000, with an annual
                      fee of Kshs. 10,000.
                    </li>
                    <li>
                      <strong>Donor Agencies in Kenya:</strong> No registration fee, but an annual subscription fee of
                      USD $3,000.
                    </li>
                    <li>
                      <strong>Regional (East African) Members:</strong> Registration fee of USD $100, with an annual fee
                      of USD $250.
                    </li>
                    <li>
                      <strong>International Members:</strong> Registration fee of USD $200, with an annual fee of USD
                      $500.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg">
              Once your membership form is completed and payment is processed, you will be officially registered as a
              KNAPO member and can begin participating in all associated activities and benefits.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/resources">Download Membership Forms</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

