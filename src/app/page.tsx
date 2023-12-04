import { Typography } from '@/components/Typography'
import styles from './Home.module.sass'
import { SubtitlesPagesTextHero } from '@/components/SubtitlesPagesTextHero'
import { Button } from '@/components/Button'
import { BlurElements } from '@/components/BlurElements'
import { CocaHelp } from '@/components/HelpCoca'
import { Passion } from '@/components/Passion'
import { StaticticsAboutComp } from '@/components/StaticticsAboutComp'
import { LiftBusiness } from '@/components/LiftBusiness'
import { Companies } from '@/components/Companies'
import { Advertise } from '@/components/Advertise'
import { TrendingNews } from '@/components/TrendingNews'
import { Reviews } from '@/components/Reviews'

export const Home = () => {
  return (
    <>
      <main className="main">
        <div className={styles.container}>
          <BlurElements blurE1Top={-70} blurE1Left={-50} blurE2Right={-140} blurE2Bottom={-100} />
          <div className={styles.container_inner}>
            <div className={styles.inner_content}>
              <div className={styles.content_title}>
                <Typography fontWeight="fw-700" component="h1" variant="h1">
                  Digitally forward creative
                </Typography>
              </div>
              <SubtitlesPagesTextHero text="When it comes to interactive marketing, we`ve got you covered. Be where the world is going" />
              <form>
                <div className={styles.form_block}>
                  <input placeholder="Enter your email" />
                  <Button component="button" type="submit" variant="primary" classNameStyles="button">
                    Try for free
                  </Button>
                </div>
              </form>
            </div>
            <div className={styles.inner_images}>
              <div className={styles.images_sales}>
                <img className={styles.sales_img1} src="/main/SalesReport.png" alt="SalesReport" />
                <img className={styles.sales_img2} src="/main/CustomerGrowth.png" alt="CustomerGrowth" />
              </div>
              <img className={styles.images_indicators} src="/main/Indicators.png" alt="Indicators" />
            </div>
          </div>
        </div>
      </main>
      <CocaHelp />
      <Passion />
      <StaticticsAboutComp />
      <LiftBusiness />
      <Companies />
      <Advertise />
      <TrendingNews />
      <Reviews />
    </>
  )
}

export default Home
