import { Box, Container, Typography } from '@mui/material'
import { TextAlignLayout } from '@/components/layouts/common/TextAlignContainer'
import { PortfolioCardList } from '@/features/common/components/PortfolioCardList'
import { Portfolio } from '@/types/portfolio'
import { portfolios } from '@/data/portfolios'

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
  return {
    props: {
      portfolios,
    },
  }
}

export default PortfolioIndex
