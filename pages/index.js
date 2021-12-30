import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>UHCReFeed - Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Working on the feed." />
        <p className="description">
          See more info on <code>@UHCReFeed</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
