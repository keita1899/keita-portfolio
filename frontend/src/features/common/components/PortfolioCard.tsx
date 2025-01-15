import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { TagList } from '@/components/utility/TagList'
import { Portfolio } from '@/types/portfolio'
import { omit } from '@/utils/omit'

type PortfolioCardProps = Pick<
  Portfolio,
  'id' | 'name' | 'thumbnail' | 'description' | 'tags'
>

export const PortfolioCard = ({
  id,
  name,
  thumbnail,
  description,
  tags,
}: PortfolioCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Link href={`/portfolios/${id}`} passHref>
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
            alt={name}
            height="200"
            image={thumbnail}
          />
          <CardContent>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" component="div">
                {name}
              </Typography>
              <Typography sx={{ color: '#808080' }}>
                {omit(description)(50)('...')}
              </Typography>
            </Box>
            <Box sx={{ marginTop: 4 }}>
              <TagList tags={tags} maxTags={3} />
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}
