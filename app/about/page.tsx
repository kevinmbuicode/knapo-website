import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 md:mb-12 space-y-2 md:space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Us</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Learn about the Kenya National Association of Probation Officers
        </p>
      </div>

      <Tabs defaultValue="overview" className="mb-8 md:mb-12">
        <div className="overflow-x-auto">
          <TabsList className="mb-6 md:mb-8 w-max min-w-full md:w-full justify-start">
            <TabsTrigger value="overview" className="text-sm md:text-base">Overview</TabsTrigger>
            <TabsTrigger value="vision" className="text-sm md:text-base">Vision & Values</TabsTrigger>
            <TabsTrigger value="leadership" className="text-sm md:text-base">Leadership</TabsTrigger>
            <TabsTrigger value="structure" className="text-sm md:text-base">Structure</TabsTrigger>
            <TabsTrigger value="committees" className="text-sm md:text-base">Committees</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-4 md:space-y-6">
          <div className="prose prose-sm md:prose max-w-none">
            <p className="text-base md:text-lg">
              The Kenya National Association of Probation Officers (KNAPO) is a professional body founded in 1976 by
              serving Probation Officers with the primary aim of addressing the issues of crime and deviance among both
              juveniles and adults. Since its establishment, KNAPO has grown significantly in membership and influence,
              making it a key organization for all practicing and retired Probation Officers in Kenya.
            </p>
            <p className="text-base md:text-lg">
              As a nonprofit organization, KNAPO operates with a clear code of ethics that governs the conduct and
              operations of its members. The association is dedicated to promoting the professional development,
              welfare, and advocacy of Probation Officers across the country.
            </p>
            <p className="text-base md:text-lg">
              KNAPO has 11 branches across the Republic of Kenya, with its National Secretariat located in Nairobi.
            </p>
            <p className="text-base md:text-lg">
              The leadership of KNAPO is overseen by the National Executive Council (NEC), which is responsible for
              strategic decision-making. The National Executive Board (NEB), consisting of six key office bearers,
              guides the day-to-day activities and management of the association. Through its commitment to
              professionalism and service, KNAPO continues to play a vital role in the criminal justice sector in Kenya.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="vision" className="space-y-4 md:space-y-6">
          <div className="prose prose-sm md:prose max-w-none">
            <h2 className="text-xl md:text-2xl font-bold">Vision</h2>
            <p className="text-base md:text-lg">
              KNAPO endeavours to enhance professionalism in the area of crime prevention as well as non-custodial
              rehabilitation of offenders.
            </p>

            <h2 className="text-xl md:text-2xl font-bold mt-6 md:mt-8">Core Values</h2>
            <ol className="space-y-2 md:space-y-4">
              <li className="text-base md:text-lg">
                <strong>Committed to professionalism and welfare:</strong> Committed to promoting professionalism and
                welfare of members for social thrift and harmonious co-existence in the community.
              </li>
              <li className="text-base md:text-lg">
                <strong>Embracing innovation:</strong> Desirous to embrace, adopt and enhance novelle professional and
                welfare approaches in probation practice.
              </li>
              <li className="text-base md:text-lg">
                <strong>Collaboration and cooperation:</strong> Encouraging co-operation between Kenyan National
                Association of Probation Officers with local and international organizations to enhance probation best
                practices.
              </li>
              <li className="text-base md:text-lg">
                <strong>Advancement of justice and community corrections:</strong> Believing such co-operation should
                advance professionalism and welfare of members to further the ends of justice and social reintegration.
              </li>
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="leadership" className="space-y-4 md:space-y-6">
          <div className="grid gap-4 md:gap-8 sm:grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">National Executive Board (NEB)</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                  <li>
                    <strong>National Chairman:</strong> Wycliffe Wathome
                  </li>
                  <li>
                    <strong>Vice National Chairman:</strong> Veronica Irungu
                  </li>
                  <li>
                    <strong>National Secretary:</strong> Daniel Ng'etich
                  </li>
                  <li>
                    <strong>Vice National Secretary:</strong> Stephen Muthoka
                  </li>
                  <li>
                    <strong>National Treasurer:</strong> Edward Ochieng
                  </li>
                  <li>
                    <strong>Vice National Treasurer:</strong> John Soxwel Mokoro
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">National Executive Council (NEC)</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                  <li>
                    <strong>National Chairman:</strong> Wycliffe Wathome
                  </li>
                  <li>
                    <strong>Vice National Chairman:</strong> Veronica Irungu
                  </li>
                  <li>
                    <strong>National Secretary:</strong> Daniel Ng'etich
                  </li>
                  <li>
                    <strong>Vice National Secretary:</strong> Stephen Muthoka
                  </li>
                  <li>
                    <strong>National Treasurer:</strong> Edward Ochieng
                  </li>
                  <li>
                    <strong>Vice National Treasurer:</strong> John Soxwel Mokoro
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="sm:col-span-1 md:col-span-2">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Branch Chairs</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>
                      <strong>Central Branch:</strong> Peter Ndungu
                    </li>
                    <li>
                      <strong>Coast Branch:</strong> Dennis Nyorani
                    </li>
                    <li>
                      <strong>Nairobi Branch:</strong> Vacant
                    </li>
                    <li>
                      <strong>Upper Eastern Branch:</strong> Ezekiel Thaimuta
                    </li>
                  </ul>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>
                      <strong>Lower Eastern Branch:</strong> Alex Ndavi
                    </li>
                    <li>
                      <strong>Western Branch:</strong> Godwin Munialo
                    </li>
                    <li>
                      <strong>Nyanza Branch:</strong> Calvin Ouko
                    </li>
                    <li>
                      <strong>Headquarters Branch:</strong> Vacant
                    </li>
                  </ul>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>
                      <strong>South Rift Branch:</strong> Lilian Oiyie
                    </li>
                    <li>
                      <strong>North Rift Branch:</strong> Vacant
                    </li>
                    <li>
                      <strong>North Eastern Branch:</strong> Abdulrashid Nurrow
                    </li>
                  </ul>
                </div>
                <div className="mt-4 md:mt-6">
                  <h4 className="font-semibold text-sm md:text-base">Additional Members</h4>
                  <ul className="mt-1 md:mt-2 space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>
                      <strong>Member (1):</strong> Christine Amisi
                    </li>
                    <li>
                      <strong>Member (2):</strong> Mutisya Kioko
                    </li>
                    <li>
                      <strong>Member (3):</strong> Beatrice Kagwiria
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="structure" className="space-y-4 md:space-y-6">
          <div className="prose prose-sm md:prose max-w-none">
            <p className="text-base md:text-lg">
              KNAPO has a well-defined organizational structure with 11 branches across the Republic of Kenya:
            </p>
            <ul className="grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 md:mt-4 text-sm md:text-base">
              <li>Central Branch</li>
              <li>Coast Branch</li>
              <li>Nairobi Branch</li>
              <li>Upper Eastern Branch</li>
              <li>Lower Eastern Branch</li>
              <li>Western Branch</li>
              <li>Nyanza Branch</li>
              <li>Headquarters Branch</li>
              <li>South Rift Branch</li>
              <li>North Rift Branch</li>
              <li>North Eastern Branch</li>
            </ul>
            <p className="text-base md:text-lg mt-4 md:mt-6">
              The National Secretariat is located in Nairobi and serves as the central administrative hub for the
              association. The organization is governed by the National Executive Council (NEC) which is responsible for
              strategic decision-making, while the National Executive Board (NEB) handles day-to-day operations and
              management.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="committees" className="space-y-4 md:space-y-6">
          <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">KNAPO Ethics Committee</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  The KNAPO Ethics Committee is responsible for receiving and addressing complaints against members, as
                  well as recognizing and rewarding professional conduct.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">National Training Committee</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  A National Training Committee assesses training needs submitted to the National Secretariat and
                  determines which members qualify for available training opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Investments Committee</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  This committee manages assets and investments held in the name of KNAPO. All members of the committee
                  must be fully paid-up members of KNAPO.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}