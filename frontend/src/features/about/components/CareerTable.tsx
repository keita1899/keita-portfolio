import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Career } from '@/types/career'

type CareerTableProps = {
  careers: Career[]
}

export const CareerTable = ({ careers }: CareerTableProps) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>組織</TableCell>
          <TableCell>詳細</TableCell>
          <TableCell>開始</TableCell>
          <TableCell>終了</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {careers.map((career) => (
          <TableRow key={career.id}>
            <TableCell>{career.organization}</TableCell>
            <TableCell>{career.detail}</TableCell>
            <TableCell>{career.startDate}</TableCell>
            <TableCell>{career.endDate || 'Present'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
