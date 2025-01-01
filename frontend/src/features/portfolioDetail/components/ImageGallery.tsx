import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import { ImageItem } from '../types/imageItem'
import { ImageGalleryItem } from './ImageGalleryItem'

type ImageGalleryProps = {
  thumbnail: string
  items: ImageItem[]
  onClick: (imageUrl: string) => void
}

export const ImageGallery = ({
  thumbnail,
  items,
  onClick,
}: ImageGalleryProps) => {
  return (
    <>
      <Box
        sx={{
          marginTop: 4,
          width: '100%',
          height: 'auto',
          position: 'relative',
        }}
      >
        <Image
          src={thumbnail}
          alt="サムネイル"
          width={1200}
          height={600}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </Box>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <ImageGalleryItem item={item} onClick={onClick} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
