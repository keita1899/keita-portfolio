import { Ability } from './ability'

export type Skill = {
  id: number
  name: string
  logo: string
  abilities: Ability[]
}
