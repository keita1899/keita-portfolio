import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { PortfolioLink } from './PortfolioLink'
import { FlexLayout } from '@/components/layouts/common/FlexContainer'
import { TagList } from '@/components/utility/TagList'
import { Portfolio } from '@/types/portfolio'

export const PortfolioCard = ({
  id,
  name,
  thumbnail,
  description,
  demoUrl,
  githubUrl,
  tags,
}: Portfolio) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Link href={`/portfolios/${id}`}>
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
              <Typography sx={{ color: '#808080' }}>{description}</Typography>
            </Box>
            <Box sx={{ marginTop: 4 }}>
              <TagList tags={tags} />
            </Box>
            <Box sx={{ marginTop: 2 }}>
              <FlexLayout justifyContent="space-between">
                <PortfolioLink href={demoUrl} color="primary">
                  <LaunchIcon sx={{ marginRight: 1 }} />
                  <Typography>デモ</Typography>
                </PortfolioLink>
                <PortfolioLink href={githubUrl} color="inherit">
                  <GitHubIcon sx={{ marginRight: 1 }} />
                  <Typography>Github</Typography>
                </PortfolioLink>
              </FlexLayout>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}
