'use client'
import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'
import styles from './NewsSlider.module.sass'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TrendingNewsData, TrendingNewsDataProps } from '@/data/TrendingNewsData'
import Image from 'next/image'
import { Typography } from '@/components/Typography'
import Link from 'next/link'

export const NewsSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        rewind={true}
        speed={1000}
        slidesPerView={2}
        spaceBetween={30}
        className="NewsSlider"
      >
        {TrendingNewsData.map(({ ...news }: TrendingNewsDataProps) => (
          <SwiperSlide key={news.id}>
            <div className={styles.news_img}>
              <Image src={`/main/trendingNews/${news.imgHref}.png`} width={582} height={332} alt={news.title} />
            </div>
            <div className={styles.news_content}>
              <div className={styles.content_published}>
                <Typography variant="bodyMed" component="p" colorVariant="gray" fontWeight="fw-400">
                  Published in Insight Jan 30, 2021
                </Typography>
                <Typography variant="bodyMed" component="p" colorVariant="gray" fontWeight="fw-400">
                  by : {news.createdBy}
                </Typography>
              </div>
              <Link className={styles.content_titleLink} href="/">
                <Typography variant="h5" component="h4">
                  {news.title}
                </Typography>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
