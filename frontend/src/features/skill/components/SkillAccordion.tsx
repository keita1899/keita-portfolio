import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { FlexLayout } from '@/components/layouts/common/FlexLayout'
import { Skill } from '@/types/skill'

type SkillAccordionProps = {
  skills: Skill[]
}

export const SkillAccordion = ({ skills }: SkillAccordionProps) => {
  return (
    <>
      {skills.map((skill) => (
        <Accordion key={skill.id}>
          <AccordionSummary
            sx={{ display: 'flex', alignItems: 'center' }}
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`panel-${skill.id}-content`}
            id={`panel-${skill.id}-header`}
          >
            <FlexLayout>
              <Image src={skill.logo} alt={skill.name} width={30} height={30} />
              <Typography component="span" sx={{ marginLeft: 2 }}>
                {skill.name}
              </Typography>
            </FlexLayout>
          </AccordionSummary>
          {skill.abilities.map((ability) => (
            <AccordionDetails key={ability.id}>
              <Typography>{ability.content}</Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </>
  )
}
