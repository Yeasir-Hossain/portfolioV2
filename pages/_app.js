import '@/styles/globals.css'
import Navbar from './Navbar'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider enableSystem={true} attribute='class'>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ThemeProvider>
  </>

}
