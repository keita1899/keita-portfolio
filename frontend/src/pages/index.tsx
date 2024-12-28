import { Box, Container } from '@mui/material'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignContainer'
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
  const portfolios = [
    {
      id: 1,
      name: 'Project 1',
      thumbnail: '/images/project1-thumbnail.jpg',
      description: 'This is a description of Project 1.',
      demoUrl: 'https://project1-demo.com',
      githubUrl: 'https://github.com/user/project1',
      tags: ['React', 'Next.js', 'Node.js'],
    },
    {
      id: 2,
      name: 'Project 2',
      thumbnail: '/images/project2-thumbnail.jpg',
      description: 'This is a description of Project 2.',
      demoUrl: 'https://project2-demo.com',
      githubUrl: 'https://github.com/user/project2',
      tags: ['Rails', 'PostgreSQL', 'Docker'],
    },
    {
      id: 3,
      name: 'Project 3',
      thumbnail: '/images/project3-thumbnail.jpg',
      description: 'This is a description of Project 3.',
      demoUrl: 'https://project3-demo.com',
      githubUrl: 'https://github.com/user/project3',
      tags: ['Vue.js', 'CSS', 'API'],
    },
    {
      id: 4,
      name: 'Project 4',
      thumbnail: '/images/project4-thumbnail.jpg',
      description: 'This is a description of Project 4.',
      demoUrl: 'https://project4-demo.com',
      githubUrl: 'https://github.com/user/project4',
      tags: ['Angular', 'TypeScript', 'Firebase'],
    },
    {
      id: 5,
      name: 'Project 5',
      thumbnail: '/images/project5-thumbnail.jpg',
      description: 'This is a description of Project 5.',
      demoUrl: 'https://project5-demo.com',
      githubUrl: 'https://github.com/user/project5',
      tags: ['Next.js', 'GraphQL', 'AWS'],
    },
    {
      id: 6,
      name: 'Project 6',
      thumbnail: '/images/project6-thumbnail.jpg',
      description: 'This is a description of Project 6.',
      demoUrl: 'https://project6-demo.com',
      githubUrl: 'https://github.com/user/project6',
      tags: ['Svelte', 'API', 'WebSocket'],
    },
  ]

  const skills = [
    {
      id: 1,
      name: 'Ruby',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg',
    },
    {
      id: 2,
      name: 'Rails',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg',
    },
    {
      id: 3,
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    },
    {
      id: 4,
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      id: 5,
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    },
    {
      id: 6,
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
      id: 7,
      name: 'Github',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
      id: 8,
      name: 'Github Actions',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    },
    {
      id: 9,
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    },
    {
      id: 10,
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
      id: 11,
      name: 'Terraform',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
    },
  ]

  const environments = [
    {
      id: 1,
      label: 'OS',
      name: 'MacOS',
    },
    {
      id: 2,
      label: 'エディタ',
      name: 'VSCode Cursor',
    },
    {
      id: 3,
      label: 'コマンドライン',
      name: 'Warp',
    },
    {
      id: 4,
      label: 'ブラウザ',
      name: 'Google Chrome Arc',
    },
  ]

  return {
    props: {
      portfolios,
      skills,
      environments,
    },
  }
}

export default Index
