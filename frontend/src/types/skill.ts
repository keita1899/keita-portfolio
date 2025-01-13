import { Ability } from './ability'

export type Skill = {
  id: number
  name: string
  logoUrl: string
  abilities: Ability[]
}
