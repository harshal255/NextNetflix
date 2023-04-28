import './globals.css'
import Header from './components/Header'
import { Mulish } from 'next/font/google'
import Footer from './components/footer'
import Head from 'next/head';


const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  description: 'swap'
})



export const metadata = {
  title: 'My Awesome Netflix Next.js App',
  description: 'A description of my awesome Next.js app.',
  ogImage: {
    url: '/public/logo3.png',
    alt: 'My awesome Next.js app',
  },
  twitterImage: {
    url: '/public/logo3.png',
    alt: 'My awesome Next.js app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage.url} />
        <meta property="og:image:alt" content={metadata.ogImage.alt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.twitterImage.url} />
        <meta name="twitter:image:alt" content={metadata.twitterImage.alt} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>


      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
