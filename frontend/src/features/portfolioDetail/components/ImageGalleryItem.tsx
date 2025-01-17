import Image from 'next/image'
import { Image as ImageType } from '@/types/image'

type ImageItemProps = {
  item: ImageType
  onClick: (imageUrl: string) => void
}

export const ImageGalleryItem = ({ item, onClick }: ImageItemProps) => {
  return (
    <Image
      src={item.url}
      alt="ポートフォリオ画像"
      width={300}
      height={200}
      style={{ width: '100%', height: 'auto' }}
      onClick={() => onClick(item.url)}
    />
  )
}
