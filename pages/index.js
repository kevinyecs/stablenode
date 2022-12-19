import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import PromptForm from '@components/PromptForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Stable Diffusion🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Stable Diffusion Interface 🚀" />
        <p className="description">
          Get started by adding your <code>prompt</code>
        </p>
        <PromptForm title="Prompt" />
      </main>

      <Footer />
    </div>
  )
}
