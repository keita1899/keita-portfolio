import { Box, Container } from '@mui/material'
import { PageTitle } from '@/components/utility/PageTitle'
import { portfolios } from '@/data/portfolios'
import { PortfolioCardList } from '@/features/common/components/PortfolioCardList'
import { Portfolio } from '@/types/portfolio'

type PortfolioIndexProps = {
  portfolios: Portfolio[]
}

const PortfolioIndex = ({ portfolios }: PortfolioIndexProps) => {
  return (
    <>
      <Container sx={{ paddingY: 10 }}>
        <PageTitle title="Portfolio" />
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
