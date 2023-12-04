'use client'
import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'
import styles from './TeamSliderStyles.module.sass'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Typography } from '@/components/Typography'
import Link from 'next/link'
import { TeamData, TeamDataProps } from '@/data/TeamData'

export const TeamSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        rewind={true}
        speed={1000}
        slidesPerView={3}
        spaceBetween={30}
        className="teamSlider"
      >
        {TeamData.map(({ ...team }: TeamDataProps) => (
          <SwiperSlide key={team.id}>
            <div className={styles.slide_block}>
              <div className={styles.block_img}>
                <Image src={`/about/teamSlider/${team.imgHref}.png`} width={379} height={434} alt={team.name} />
              </div>
              <div className={styles.block_top}>
                <Typography variant="h5" component="h5">
                  {team.name}
                </Typography>
                <ul className={styles.top_list}>
                  <a href={team.hrefSoc} target="_blank" className={styles.list_item}>
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href={team.hrefSoc} target="_blank" className={styles.list_item}>
                    <i className="fa-brands fa-linkedin" />
                  </a>

                  <a href={team.hrefSoc} target="_blank" className={styles.list_item}>
                    <i className="fa-brands fa-instagram" />
                  </a>
                </ul>
              </div>
              <div className={styles.block_bottom}>
                <Typography variant="h6" component="h6" fontWeight="fw-500" colorVariant="gray">
                  {team.prof}
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
