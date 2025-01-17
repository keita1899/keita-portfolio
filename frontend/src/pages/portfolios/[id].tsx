import { Box, Container, Typography } from '@mui/material'
import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignLayout'
import { TagList } from '@/components/utility/TagList'
import { DemoLink } from '@/features/common/components/DemoLink'
import { GithubLink } from '@/features/common/components/GithubLink'
import { ImageGallery } from '@/features/portfolioDetail/components/ImageGallery'
import { List } from '@/features/portfolioDetail/components/List'
import { StackTable } from '@/features/portfolioDetail/components/StackTable'
import { Portfolio } from '@/types/portfolio'
import { Section } from '@/features/portfolioDetail/components/Section'
import { BlogLink } from '@/features/common/components/BlogLink'

type PortfolioDetailProps = {
  portfolio: Portfolio
}

const PortfolioDetail = ({ portfolio }: PortfolioDetailProps) => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(
    portfolio.thumbnail
  )

  const handleImageClick = (imageUrl: string) => {
    setSelectedThumbnail(imageUrl)
  }
  return (
    <Container maxWidth="md" sx={{ paddingY: 10 }}>
      <TextAlignLayout>
        <Typography variant="h3">{portfolio.name}</Typography>
      </TextAlignLayout>
      <Box sx={{ marginTop: 4 }}>
        <ImageGallery
          thumbnail={selectedThumbnail}
          items={portfolio.images}
          onClick={handleImageClick}
        />
      </Box>
      <Section title="説明">
        <Typography>{portfolio.description}</Typography>
      </Section>
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          gap: 2,
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <DemoLink url={portfolio.demoUrl} />
        <GithubLink url={portfolio.githubUrl} />
        <BlogLink url={portfolio.blogUrl} />
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <TagList tags={portfolio.tags} />
      </Box>
      <Section title="制作期間">
        <Typography>約{portfolio.duration}日</Typography>
      </Section>
      <Section title="使用技術">
        <StackTable stacks={portfolio.techStacks} />
      </Section>
      <Section title="機能一覧">
        <List items={portfolio.features} />
      </Section>
      <Section title="ページ一覧">
        <List items={portfolio.pages} />
      </Section>
      <Section title="こだわった点">
        <Typography>{portfolio.commitment}</Typography>
      </Section>
      <Section title="苦労した点">
        <Typography>{portfolio.challenges}</Typography>
      </Section>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://backend:3000'
  const portfoliosRes = await axios.get(`${backendUrl}/api/portfolios`)
  const portfolios = camelcaseKeys(portfoliosRes.data) as Portfolio[]

  const paths = portfolios.map((portfolio) => ({
    params: { id: portfolio.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!

  const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://backend:3000'
  const portfolioRes = await axios.get(`${backendUrl}/api/portfolios/${id}`)
  const portfolio = camelcaseKeys(portfolioRes.data) as Portfolio[]

  if (!portfolio) {
    return { notFound: true }
  }

  return {
    props: {
      portfolio,
    },
  }
}

export default PortfolioDetail
