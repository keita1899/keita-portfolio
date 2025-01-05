import { Box, Container } from '@mui/material'
import { PageTitle } from '@/components/utility/PageTitle'
import { skills } from '@/data/skills'
import { SkillAccordion } from '@/features/skill/components/SkillAccordion'
import { Skill } from '@/types/skill'

type SkillIndexProps = {
  skills: Skill[]
}

const SkillIndex = ({ skills }: SkillIndexProps) => {
  return (
    <>
      <Container maxWidth="sm" sx={{ paddingY: 10 }}>
        <PageTitle title="Skill" />
        <Box sx={{ marginTop: 4 }}>
          <SkillAccordion skills={skills} />
        </Box>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      skills,
    },
  }
}

export default SkillIndex
