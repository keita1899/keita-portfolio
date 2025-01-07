import { format } from 'date-fns'

type FormatDateProps = {
  date: string
  formatString: string
}

export const FormatDate = ({ date, formatString }: FormatDateProps) => {
  return format(new Date(date), formatString)
}
