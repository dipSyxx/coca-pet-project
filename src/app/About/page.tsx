import React from 'react'

import styles from './AboutStyles.module.sass'
import { Typography } from '@/components/Typography'
import { SubtitlesPagesTextHero } from '@/components/SubtitlesPagesTextHero'
import Image from 'next/image'
import { BeliveSlider } from './components/BeliveSlider'
import { Ideas } from './components/Ideas'
import { Team } from './components/Team'
import { JoinTeam } from './components/JoinTeam'

export const About = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className={styles.container_inner}>
            <div className={styles.inner_title}>
              <Typography fontWeight="fw-700" component="h1" variant="h1">
                Everything you need to get the attention of your audience
              </Typography>
            </div>
            <div className={styles.inner_subtitle}>
              <div className={styles.subtitle_text}>
                <SubtitlesPagesTextHero text="Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow." />
              </div>
              <Image src="/about/getInArrow.png" width={127} height={127} alt="getIn" />
            </div>
          </div>
        </div>
      </main>
      <BeliveSlider />
      <Ideas />
      <Team />
      <JoinTeam />
    </>
  )
}

export default About
