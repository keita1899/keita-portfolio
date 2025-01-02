import { Box, Container, Typography } from '@mui/material'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignContainer'
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
        <TextAlignLayout align="center">
          <Typography variant="h3">Skill</Typography>
        </TextAlignLayout>
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
