import { Toaster } from 'react-hot-toast'
import '../../styles/globals.css'
import AuthProvider from '../context/AuthContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
       <Head>
        <title>بلاگ</title>
      </Head>
      <Component {...pageProps} />
      <Toaster/>
    </AuthProvider>
  ) 
}

export default MyApp
