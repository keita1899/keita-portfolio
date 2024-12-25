import SkillsIcon from '@mui/icons-material/Build'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import WorkIcon from '@mui/icons-material/Work'
import { Box, Toolbar } from '@mui/material'
import { NavLink } from './NavLink'

export const Nav = () => {
  return (
    <Box component="nav" sx={{ backgroundColor: '#D6DBDC', color: '#222' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', paddingY: 2 }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <NavLink href="/" icon={<HomeIcon />} label="Home" />
          <NavLink href="/about" icon={<InfoIcon />} label="About" />
          <NavLink href="/portfolios" icon={<WorkIcon />} label="Portfolio" />
          <NavLink href="/skills" icon={<SkillsIcon />} label="Skill" />
        </Box>
      </Toolbar>
    </Box>
  )
}
