import { Feature } from './feature'
import { Image } from './image'
import { Page } from './page'
import { Tag } from './tag'
import { TechStack } from './tech-stack'

export type Portfolio = {
  id: number
  userId: number
  name: string
  thumbnail: string
  description: string
  commitment: string
  challenges: string
  demoUrl: string
  githubUrl: string
  blogUrl: string
  duration: number
  images: Image[]
  techStacks: TechStack[]
  features: Feature[]
  pages: Page[]
  tags: Tag[]
}
