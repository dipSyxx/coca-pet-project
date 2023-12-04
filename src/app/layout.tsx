import Head from 'next/head'
import '../styles/global.sass'
import '../styles/variables.sass'
import '../components/TrendingNews/NewsSlider/SliderStyles.sass'
import '../components/Reviews/ReviewsSliderStyles.sass'
import '../app/About/components/BeliveSlider/BeliveSlider.sass'
import '../app/About/components/Team/TeamSlider/TeamSlider.sass'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Coca',
  description: 'Digital Marketing Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script src="https://kit.fontawesome.com/699e6f5ea8.js" crossOrigin="anonymous" />
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
