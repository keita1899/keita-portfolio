import { Typography } from '@mui/material'
import { FlexLayout } from '@/components/layouts/common/FlexLayout'
import { Profile } from '@/types/profile'
import { FormatDate } from '@/components/utility/FormatDate'

type ProfileListProps = {
  profile: Pick<
    Profile,
    'firstName' | 'lastName' | 'age' | 'birthday' | 'hometown'
  >
}

export const ProfileList = ({ profile }: ProfileListProps) => {
  return (
    <FlexLayout direction="column">
      <FlexLayout justifyContent="flex-start" marginTop={1}>
        <Typography sx={{ width: 100, fontWeight: 'bold' }}>名前</Typography>
        <Typography>
          {profile.lastName} {profile.firstName}
        </Typography>
      </FlexLayout>
      <FlexLayout justifyContent="flex-start" marginTop={1}>
        <Typography sx={{ width: 100, fontWeight: 'bold' }}>
          生年月日
        </Typography>
        <Typography>
          <FormatDate date={profile.birthday} formatString="yyyy/MM/dd" />
        </Typography>
      </FlexLayout>
      <FlexLayout justifyContent="flex-start" marginTop={1}>
        <Typography sx={{ width: 100, fontWeight: 'bold' }}>年齢</Typography>
        <Typography>{`${profile.age}歳`}</Typography>
      </FlexLayout>
      <FlexLayout justifyContent="flex-start" marginTop={1}>
        <Typography sx={{ width: 100, fontWeight: 'bold' }}>出身地</Typography>
        <Typography>{profile.hometown}</Typography>
      </FlexLayout>
    </FlexLayout>
  )
}
