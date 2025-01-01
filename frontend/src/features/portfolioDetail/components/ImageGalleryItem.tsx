import Image from 'next/image'
import { ImageItem } from '../types/imageItem'

type ImageItemProps = {
  item: ImageItem
  onClick: (imageUrl: string) => void
}

export const ImageGalleryItem = ({ item, onClick }: ImageItemProps) => {
  return (
    <Image
      src={item.url}
      alt={item.alt}
      width={300}
      height={200}
      style={{ width: '100%', height: 'auto' }}
      onClick={() => onClick(item.url)}
    />
  )
}
