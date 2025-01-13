import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { Skill } from '@/types/skill'

type SkillItemProps = {
  skill: Skill
}

export const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <Grid item xs={6} sm={3} md={2} key={skill.id}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={skill.logoUrl} alt="" width={64} height={64} />
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          {skill.name}
        </Typography>
      </Box>
    </Grid>
  )
}
