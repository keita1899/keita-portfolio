import { Avatar } from '@mui/material'
import Image from 'next/image'

type AvatarProps = {
  url: string
  username: string
}

export const UserAvatar = ({ url, username }: AvatarProps) => {
  return (
    <Avatar>
      <Image
        src={url}
        alt={username}
        layout="intrinsic"
        width={40}
        height={40}
      />
    </Avatar>
  )
}
