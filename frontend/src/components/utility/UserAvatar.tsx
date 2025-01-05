import { Avatar } from '@mui/material'
import Image from 'next/image'

type AvatarProps = {
  url: string
  alt: string
  width: number
  height: number
}

export const UserAvatar = ({ url, alt, width, height }: AvatarProps) => {
  return (
    <Avatar>
      <Image src={url} alt={alt} width={width} height={height} />
    </Avatar>
  )
}
