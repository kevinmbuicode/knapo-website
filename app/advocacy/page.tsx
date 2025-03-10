import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function AdvocacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 md:mb-12 space-y-2 md:space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Advocacy & Initiatives</h1>
        <p className="text-lg md:text-xl text-muted-foreground">Learn about KNAPO's advocacy efforts and policy positions</p>
      </div>

      <Tabs defaultValue="projects" className="mb-8 md:mb-12">
        <div className="overflow-x-auto">
          <TabsList className="mb-6 md:mb-8 w-max min-w-full md:w-full justify-start">
            <TabsTrigger value="projects" className="text-sm md:text-base">Current Projects</TabsTrigger>
            <TabsTrigger value="policy" className="text-sm md:text-base">Policy Positions</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="projects" className="space-y-4 md:space-y-8">
          <div className="prose prose-sm md:prose max-w-none">
            <h2 className="text-xl md:text-2xl font-bold">Ongoing Initiatives and Advocacy Efforts</h2>
            <p className="text-base md:text-lg">
              KNAPO is actively engaged in several initiatives aimed at advancing the welfare of its members and
              improving probation practices in Kenya. A key aspect of this work is representing members on welfare
              matters. The association continuously advocates for the professional, personal, and social welfare of
              Probation Officers, ensuring their needs are met and their interests are safeguarded. This includes
              addressing issues related to working conditions, career development, and benefits, providing a supportive
              platform for members to voice concerns and seek resolutions.
            </p>
            <br/>
            <p className="text-base md:text-lg">
              Additionally, KNAPO plays a crucial role in contributing to the development of national policies,
              particularly the National Correctional Policy. The association will provide expert input, offering
              recommendations and suggestions that reflect the realities of probation practice. By participating in
              policy discussions, KNAPO ensures that the perspectives and needs of Probation Officers are considered in
              shaping laws and strategies related to corrections, rehabilitation, and crime prevention. These ongoing
              advocacy efforts aim to create a more effective, supportive, and just system for both Probation Officers
              and the individuals under their care.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="policy" className="space-y-4 md:space-y-8">
          <div className="prose prose-sm md:prose max-w-none">
            <p className="text-base md:text-lg">
              KNAPO holds firm policy positions on several critical issues affecting the probation profession, aimed at
              improving the effectiveness of Probation Officers and the broader criminal justice system. These positions
              reflect the association's commitment to upholding professional standards, protecting the welfare of its
              members, and contributing to the effective rehabilitation of offenders.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Improved Working Conditions</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  KNAPO advocates for better working conditions for Probation Officers, including adequate compensation,
                  safety, and support. This includes ensuring manageable caseloads, access to professional development
                  This includes ensuring manageable caseloads, access to professional development, and resources needed
                  to carry out their duties effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Strengthening Probation Practices</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  The association advocates for increased investment in probation services, including more robust
                  training programs, modern tools, and resources that enhance the delivery of rehabilitation programs.
                  This ensures that Probation Officers are equipped to manage offenders successfully and contribute to
                  crime prevention efforts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Non-Custodial Sentencing</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  KNAPO strongly supports the use of non-custodial sentencing options, emphasizing rehabilitation over
                  incarceration. The association believes that probation and alternative sentencing can reduce prison
                  overcrowding, promote offender reintegration, and lower recidivism rates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Clearer Legal Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  KNAPO calls for the establishment of clear and supportive legal frameworks that govern the probation
                  profession. This includes policies that ensure the safety and rights of Probation Officers, the
                  fairness of the probation process, and proper oversight of probation practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Member Welfare</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  The association is dedicated to advocating for better welfare policies for its members, including
                  health benefits, retirement plans, and a fair grievance redressal system. KNAPO ensures that the needs
                  of its members, both professionally and personally, are addressed through its advocacy efforts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">International Collaboration</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 text-sm md:text-base">
                <p>
                  KNAPO supports stronger collaboration with international organizations and networks, adopting best
                  practices from around the world. The association believes in global cooperation to improve probation
                  practices and ensure alignment with international standards in offender rehabilitation and crime
                  prevention.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-sm md:prose max-w-none">
            <p className="text-base md:text-lg">
              These policy positions guide KNAPO's actions and advocacy, aiming to enhance the probation profession, the
              welfare of its members, and the effectiveness of the criminal justice system in Kenya.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}