import { Box, Container } from '@mui/material'
import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { PageTitle } from '@/components/utility/PageTitle'
import { SkillAccordion } from '@/features/skill/components/SkillAccordion'
import { Skill } from '@/types/skill'

type SkillIndexProps = {
  skills: Skill[]
}

const SkillIndex = ({ skills }: SkillIndexProps) => {
  return (
    <Container maxWidth="sm" sx={{ paddingY: 10 }}>
      <PageTitle title="Skill" />
      <Box sx={{ marginTop: 4 }}>
        <SkillAccordion skills={skills} />
      </Box>
    </Container>
  )
}

export const getStaticProps = async () => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://backend:3000'
    const skillsRes = await axios.get(`${backendUrl}/api/skills`)
    const skills = camelcaseKeys(skillsRes.data) as Skill[]

    return {
      props: {
        skills,
      },
    }
  } catch (error) {
    console.error('Failed to fetch skills:', error)
    return {
      notFound: true,
    }
  }
}

export default SkillIndex
