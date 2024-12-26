import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Portfolio } from '@/types/portfolio'

type PortfolioCardProps = {
  portfolio: Portfolio
}

export const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={portfolio.id}>
      <Card
        sx={{
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <CardMedia
          component="img"
          alt={portfolio.name}
          height="200"
          image={portfolio.thumbnail}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {portfolio.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
