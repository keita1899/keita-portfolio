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
        style={{ width: '40px', height: '40px' }}
        width={40}
        height={40}
      />
    </Avatar>
  )
}
