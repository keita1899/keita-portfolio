import { Box, Container } from '@mui/material'
import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import Head from 'next/head'
import { PageTitle } from '@/components/utility/PageTitle'
import { PortfolioCardList } from '@/features/common/components/PortfolioCardList'
import { Portfolio } from '@/types/portfolio'

type PortfolioIndexProps = {
  portfolios: Portfolio[]
}

const PortfolioIndex = ({ portfolios }: PortfolioIndexProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="濱崎慶太のポートフォリオ一覧ページです。"
        />
        <title>keita-portfoilo | Portfolio</title>
      </Head>
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
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://backend:3000'
    const portfoliosRes = await axios.get(`${backendUrl}/api/portfolios`)
    const portfolios = camelcaseKeys(portfoliosRes.data) as Portfolio[]

    return {
      props: {
        portfolios,
      },
    }
  } catch (error) {
    console.error('Failed to fetch portfolios:', error)
    return {
      notFound: true,
    }
  }
}

export default PortfolioIndex
