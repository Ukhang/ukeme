import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <NextNProgress color="#06B6D4" />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp