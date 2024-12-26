import { Grid } from '@mui/material'
import { SkillItem } from './SkillItem'
import { Skill } from '@/types/skill'

type SkillListProps = {
  skills: Skill[]
}

export const SkillList = ({ skills }: SkillListProps) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </Grid>
  )
}
