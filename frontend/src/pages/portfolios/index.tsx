import { Box, Container, Typography } from '@mui/material'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignContainer'
import { PortfolioCardList } from '@/features/common/components/PortfolioCardList'
import { Portfolio } from '@/types/portfolio'

type PortfolioIndexProps = {
  portfolios: Portfolio[]
}

const PortfolioIndex = ({ portfolios }: PortfolioIndexProps) => {
  return (
    <>
      <Container sx={{ paddingY: 10 }}>
        <TextAlignLayout align="center">
          <Typography variant="h3">Portfolio</Typography>
        </TextAlignLayout>
        <Box sx={{ marginTop: 4 }}>
          <PortfolioCardList portfolios={portfolios} />
        </Box>
      </Container>
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

  return {
    props: {
      portfolios,
    },
  }
}

export default PortfolioIndex
