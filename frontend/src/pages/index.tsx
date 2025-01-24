import { Box, Container, Typography } from '@mui/material'
import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignLayout'
import { PortfolioCardList } from '@/features/common/components/PortfolioCardList'
import { DetailLink } from '@/features/home/components/DetailLink'
import { EnvironmentList } from '@/features/home/components/EnvrionmentList'
import { ScrollToTopButton } from '@/features/home/components/ScrollTopButton'
import { Section } from '@/features/home/components/Section'
import { SkillList } from '@/features/home/components/SkillList'
import { Environment } from '@/types/environments'
import { Portfolio } from '@/types/portfolio'
import { Profile } from '@/types/profile'
import { Skill } from '@/types/skill'

type IndexProps = {
  profile: Pick<Profile, 'description'>
  portfolios: Portfolio[]
  skills: Skill[]
  environments: Environment[]
}

const Index = ({ profile, portfolios, skills, environments }: IndexProps) => {
  const firstThreePortfolios = portfolios.slice(0, 3)

  return (
    <>
      <Head>
        <title>keita-portfoilo | Home</title>
      </Head>
      <Section title="About" backgroundColor="#fff">
        <Container maxWidth="xs" sx={{ marginTop: 3 }}>
          <Typography>{profile.description}</Typography>
          <Box sx={{ marginTop: 6 }}>
            <TextAlignLayout align="center">
              <DetailLink href="/about" />
            </TextAlignLayout>
          </Box>
        </Container>
      </Section>
      <Section title="Portfolio" backgroundColor="#f0f0f0">
        <Container maxWidth="lg" sx={{ marginTop: 3 }}>
          <PortfolioCardList portfolios={firstThreePortfolios} />
          <Box sx={{ marginTop: 6 }}>
            <TextAlignLayout align="center">
              <DetailLink href="/portfolios" />
            </TextAlignLayout>
          </Box>
        </Container>
      </Section>
      <Section title="Skill" description="主な使用技術" backgroundColor="#fff">
        <Container maxWidth="sm" sx={{ marginTop: 3 }}>
          <SkillList skills={skills} />
          <Box sx={{ marginTop: 6 }}>
            <TextAlignLayout align="center">
              <DetailLink href="/skills" />
            </TextAlignLayout>
          </Box>
        </Container>
      </Section>
      <Section
        title="Development Environment"
        description="主に以下の環境で開発しています。"
        backgroundColor="#f0f0f0"
      >
        <Container maxWidth="xs" sx={{ marginTop: 3 }}>
          <EnvironmentList environments={environments} />
        </Container>
      </Section>
      <ScrollToTopButton />
    </>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://backend:3000'
    const response = await axios.get(`${backendUrl}/api`)
    const { profile, portfolios, skills, environments } = camelcaseKeys(
      response.data,
      { deep: true },
    )

    return {
      props: {
        profile,
        portfolios,
        skills,
        environments,
      },
    }
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return {
      notFound: true,
    }
  }
}

export default Index
