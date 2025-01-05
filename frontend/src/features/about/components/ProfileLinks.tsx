import { Grid } from '@mui/material'
import { BlogLink } from '@/features/common/components/BlogLink'
import { GithubLink } from '@/features/common/components/GithubLink'
import { QiitaLink } from '@/features/common/components/QiitaLink'
import { XLink } from '@/features/common/components/XLink'
import { Profile } from '@/types/profile'

type ProfileLinksProps = {
  profile: Pick<Profile, 'githubUrl' | 'blogUrl' | 'xUrl' | 'qiitaUrl'>
}

export const ProfileLinks = ({ profile }: ProfileLinksProps) => {
  return (
    <Grid container spacing={2} marginTop={2}>
      <Grid item xs={12} sm={6} md={3}>
        <GithubLink url={profile.githubUrl} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <BlogLink url={profile.blogUrl} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <XLink url={profile.xUrl} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <QiitaLink url={profile.qiitaUrl} />
      </Grid>
    </Grid>
  )
}
