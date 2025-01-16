import { Box, Container, Typography } from '@mui/material'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignLayout'
import { TagList } from '@/components/utility/TagList'
import { portfolios } from '@/data/portfolios'
import { DemoLink } from '@/features/common/components/DemoLink'
import { GithubLink } from '@/features/common/components/GithubLink'
import { ImageGallery } from '@/features/portfolioDetail/components/ImageGallery'
import { List } from '@/features/portfolioDetail/components/List'
import { StackTable } from '@/features/portfolioDetail/components/StackTable'
import { ImageItem } from '@/features/portfolioDetail/types/imageItem'
import { ListItem } from '@/features/portfolioDetail/types/listItem'
import { TechStack } from '@/features/portfolioDetail/types/techStack'
import { Tag } from '@/types/tag'

type PortfolioDetailProps = {
  portfolio: {
    id: number
    name: string
    thumbnail: string
    description: string
    demoUrl: string
    githubUrl: string
    images: ImageItem[]
    techStack: TechStack[]
    features: ListItem[]
    pages: ListItem[]
    tags: Tag[]
  }
}

const PortfolioDetail = ({ portfolio }: PortfolioDetailProps) => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(
    portfolio.thumbnail,
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
      <Box sx={{ marginTop: 4 }}>
        <Typography>{portfolio.description}</Typography>
      </Box>
      <Box sx={{ marginTop: 4, display: 'flex', gap: 2 }}>
        <DemoLink url={portfolio.demoUrl} />
        <GithubLink url={portfolio.githubUrl} />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <TagList tags={portfolio.tags} />
      </Box>
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4">使用技術</Typography>
        <StackTable stacks={portfolio.techStack} />
      </Box>
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4">機能一覧</Typography>
        <List items={portfolio.features} />
      </Box>
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4">ページ一覧</Typography>
        <List items={portfolio.pages} />
      </Box>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = portfolios.map((portfolio) => ({
    params: { id: portfolio.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!

  const portfolio = portfolios.find((p) => p.id.toString() === id)

  if (!portfolio) {
    return { notFound: true }
  }

  return {
    props: {
      portfolio,
    },
    revalidate: 60,
  }
}

export default PortfolioDetail
