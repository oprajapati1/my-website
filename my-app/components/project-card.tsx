"use client"

import type React from "react"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  githubLink?: string
}

export function ProjectCard({ title, description, tags, link, githubLink }: ProjectCardProps) {
  const showExternalLink = githubLink && link !== githubLink

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px -15px var(--card-shadow)",
        borderColor: "var(--border-hover)",
      }}
      transition={{ duration: 0.2 }}
      className="h-full"
      style={
        {
          "--card-shadow": "rgba(0, 0, 0, 0.1)",
          "--border-hover": "hsl(var(--primary) / 0.5)",
        } as React.CSSProperties
      }
    >
      <Card className="flex h-full flex-col overflow-hidden border border-muted p-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
          <CardTitle className="text-base font-bold">{title}</CardTitle>
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link href={githubLink || link} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </Link>
            </motion.div>
            {showExternalLink && (
              <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </motion.div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="mt-auto flex flex-wrap gap-1 p-4 pt-0">
          {tags.map((tag) => (
            <motion.div key={tag} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Badge variant="secondary" className="px-1.5 py-0 text-xs">
                {tag}
              </Badge>
            </motion.div>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
