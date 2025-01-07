import { Typography } from '@mui/material'
import Image from 'next/image'
import { ProfileLinks } from './ProfileLinks'
import { ProfileList } from './ProfileList'
import { FlexLayout } from '@/components/layouts/common/FlexLayout'
import { Profile } from '@/types/profile'

type ProfileProps = {
  profile: Profile
}

export const ProfileInfo = ({ profile }: ProfileProps) => {
  return (
    <>
      <FlexLayout
        justifyContent="space-around"
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <Image
          src="/images/avatar.png"
          alt="アバター"
          width={200}
          height={200}
        />
        <ProfileList profile={profile} />
      </FlexLayout>
      <Typography sx={{ marginTop: 4 }}>{profile.description}</Typography>
      <ProfileLinks profile={profile} />
    </>
  )
}