import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'

export default function App(props: AppProps) {
  return (
    <AppCacheProvider {...props}>
      <props.Component />
    </AppCacheProvider>
  )
}
