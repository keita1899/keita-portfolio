import { Grid } from '@mui/material'
import { PortfolioCard } from './PortfolioCard'
import { Portfolio } from '@/types/portfolio'

type PortfolioCardListProps = {
  portfolios: Portfolio[]
}

export const PortfolioCardList = ({ portfolios }: PortfolioCardListProps) => {
  return (
    <Grid container spacing={4}>
      {portfolios.map((portfolio) => (
        <PortfolioCard key={portfolio.id} {...portfolio} />
      ))}
    </Grid>
  )
}
