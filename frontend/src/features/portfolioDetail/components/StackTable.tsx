import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { memo } from 'react'
import { TechStack } from '../types/techStack'

type StackTableProps = {
  stacks: TechStack[]
}

export const StackTable = memo(({ stacks }: StackTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>技術</TableCell>
            <TableCell>バージョン</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stacks.map((stack) => (
            <TableRow key={stack.id}>
              <TableCell>{stack.technology}</TableCell>
              <TableCell>{stack.version}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})
