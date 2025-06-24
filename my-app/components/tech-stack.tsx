import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TechStack() {
  return (
    <Tabs defaultValue="frontend" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="tools">Tools</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="frontend">
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[
                "JavaScript",
                "TypeScript",
                "Next.js",
                "XAML",
                ".NET",
                "MVVM",
                "WPF",
                "Framer Motion",
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="backend">
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[
                "C#",
                "Java",
                "Python",
                "JavaScript",
                ".NET",
                "Solidity",
                "Unity",
                "Express",
                "FastAPI",
                "OpenCV",
                "MySQL",
                "Graph DB",
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tools">
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[
                "Git",
                "GitHub",
                "VS Suite",
                "Vercel",
                "JUnit/NUnit",
                "Linux",
                "Atlassian Suite",
                "GitLab",
                "Helix ALM",
                "Arena PLM/QMS",
                "OpenRouter",
                "Cursor",
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="other">
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[
                "Computer Vision",
                "3D Tranformations",
                "AR/XR",
                "Verification & Validation",
                "Medical Devices",
                "LLMs",
                "Blockchain",
                "Smart Contracts",
                "Object-Oriented Programming",
                "Agile",
                "Scrum",
                "Algorithms & Data Structures",
                "TCP/UDP",
                "Mindfulness",
                "Meditation",
                "Yoga",
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
