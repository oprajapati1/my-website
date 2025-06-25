import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { TechStack } from "@/components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import { FadeIn, FadeInStagger, StaggerItem, ParallaxScroll } from "@/components/animations"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold">
            Om<span className="text-primary">.</span>dev
          </Link>
          <div className="flex items-center gap-2">
            <nav className="hidden gap-6 md:flex">
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
            <ThemeToggle />
            <Button variant="outline" className="ml-4 bg-background text-foreground">
              <Link href="/Om_Prajapati_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Resume
                <FileText className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
            <div className="space-y-6 md:w-1/2">
              <FadeIn>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Hi, I&apos;m <span className="text-primary">Om</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Computer Science student at Northeastern University with a focus on AI and a minor in Mindfulness. Passionate about writing code that makes a difference and technologies that can change the world. Currently at OnPoint, developing AR-guided surgical navigation systems.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex gap-4">
                  <Link href="#projects">
                    <Button>
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline" className="bg-background text-foreground">
                      Contact Me
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex gap-4 pt-4">
                  <Link href="https://github.com/oprajapati1" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/oprajapati" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:prajapatiom2004@gmail.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.4} className="mt-8 w-full md:mt-0 md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/profile.jpg"
                  alt="Om Prajapati"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="about" className="container mx-auto max-w-7xl px-6 py-12 md:py-24 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
            </FadeIn>
            <ParallaxScroll>
              <FadeIn delay={0.1}>
                <p className="mx-auto max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
                  What drives me most is impact. The feeling of knowing every line of code I write, every extra minute I spend in the office is contributing to a greater good is what I strive for
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mx-auto max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
                  I also enjoy building, tinkering, and writing code that is at the cutting edge from XR/AR to AI to Blockchain. I&apos;m incredibly drawn to the potential of these technologies -- experimenting with tools, building my own, and following this race.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  Currently, I&apos;m working at OnPoint Surgical, an early-stage startup, where I&apos;m developing AR-guided surgical navigation systems. Previously, I was at Insulet, working on insulin pod testing software. My experience spans from medical device development to full-stack web applications, with a particular interest in emerging technologies like AI, XR/AR, and Blockchain.
                </p>
              </FadeIn>
            </ParallaxScroll>
          </div>
        </section>

        <section id="projects" className="container mx-auto max-w-7xl px-6 py-12 md:py-24 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto max-w-[100%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Here are some of my recent projects.
              </p>
            </FadeIn>
          </div>
          <FadeInStagger className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12">
            <StaggerItem>
              <ProjectCard
                title="SolidAudit AI"
                description="Full-stack AI web application for Solidity blockchain smart contract code review, audit, and analysis. Analyzes smart contract code for vulnerabilities and efficency gaps, and provides code fixes. Implemented concurrent LLM & Slither Static Analysis processing pipeline reducing analysis/audit time by 3-5x."
                tags={["Python", "Next.js", "FastAPI", "AI/ML", "LLM", "Blockchain"]}
                link="https://trysolidaudit.com"
                githubLink="https://github.com/jackgladowsky/onpoint-hacks"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="Tweet Sentiment Stock Analysis"
                description="Leveraged Python (TextBlob, scikit-learn, Plotly) to analyze the sentiment of Elon Musk's tweets and investigate their influence on stock prices. Employed linear regression to model the relationship between tweet sentiment and subsequent stock price changes."
                tags={["Python", "NLP", "Linear Regression", "Machine Learning", "DS"]}
                link="https://github.com/oprajapati1/tweet-sentiment-analysis"
                githubLink="https://github.com/oprajapati1/tweet-sentiment-analysis"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="Open Source Contributor-Gaffer"
                description="Gaffer is a graph database framework allowing for the storage of extremely large graphs with intricate nodes and edges. Resolved bugs in Gaffer's MiniAccumuloStore implementation, optimizing system robustness and managing null returns"
                tags={["Java", "Apache Accumulo", "Graph DB", "Open Source"]}
                link="https://github.com/oprajapati1/Gaffer"
                githubLink="https://github.com/oprajapati1/Gaffer"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="URL Shortener"
                description="Full-stack URL Shortener web app with QR code generation and clipboard features using React.js, Node.js, and SQLite3"
                tags={["React", "Node.js", "SQLite", "TypeScript"]}
                link="https://github.com/oprajapati1/everything"
                githubLink="https://github.com/oprajapati1/everything"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="A* Algorithm Visualizer"
                description="Dynamic visualization of the A* pathfinding algorithm using JavaScript and p5.js, with interactive grid-based canvas"
                tags={["JavaScript", "p5.js", "Algorithms", "Visualization"]}
                link="https://editor.p5js.org/prajapatiom2004/sketches/xrgQY_vvn"
                githubLink="https://editor.p5js.org/prajapatiom2004/sketches/xrgQY_vvn"
              />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard
                title="Personal Portfolio"
                description="Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS"
                tags={["Next.js", "TypeScript", "Tailwind CSS", "React"]}
                link="https://github.com/oprajapati1/my-website"
                githubLink="https://github.com/oprajapati1/my-website"
              />
            </StaggerItem>
          </FadeInStagger>
        </section>

        <section id="skills" className="container mx-auto max-w-7xl px-6 py-12 md:py-24 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto max-w-[100%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                My toolkit; both technical and non-technical.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="mx-auto max-w-[64rem] mt-12">
            <TechStack />
          </FadeIn>
        </section>

        <section id="contact" className="container mx-auto max-w-7xl px-6 py-12 md:py-24 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-6 flex flex-col gap-4 min-[400px]:flex-row">
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                prajapatiom2004@gmail.com
              </Button>
              <Button variant="outline" className="gap-2 bg-background text-foreground">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/oprajapati
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Om Prajapati. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://github.com/oprajapati1" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/oprajapati" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:prajapatiom2004@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
