import { Box, Container } from '@mui/material'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignContainer'
import { environments } from '@/data/environments'
import { portfolios } from '@/data/portfolios'
import { skills } from '@/data/skills'
import { PortfolioCardList } from '@/features/common/components/PortfolioCardList'
import { DetailLink } from '@/features/home/components/DetailLink'
import { EnvironmentList } from '@/features/home/components/EnvrionmentList'
import { ScrollToTopButton } from '@/features/home/components/ScrollTopButton'
import { Section } from '@/features/home/components/Section'
import { SkillList } from '@/features/home/components/SkillList'
import { Environment } from '@/types/environments'
import { Portfolio } from '@/types/portfolio'
import { Skill } from '@/types/skill'

type IndexProps = {
  portfolios: Portfolio[]
  skills: Skill[]
  environments: Environment[]
}

const Index = ({ portfolios, skills, environments }: IndexProps) => {
  const firstThreePortfolios = portfolios.slice(0, 3)

  return (
    <>
      <Section title="About" backgroundColor="#fff">
        <Container maxWidth="xs" sx={{ marginTop: 3 }}>
          <p>Webエンジニアを目指して勉強中です。</p>
          <p>書籍やudemyで学習しています。</p>
          <p>
            主に Rails と React・TypeScript でポートフォリオを作成しています。
          </p>
          <p>
            Rails は RSpec で、React・TypeScript は Jest でテストを書けます。
          </p>
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

export const getStaticProps = async () => {
  return {
    props: {
      portfolios,
      skills,
      environments,
    },
  }
}

export default Index
