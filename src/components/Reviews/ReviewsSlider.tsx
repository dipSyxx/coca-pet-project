'use client'
import React from 'react'
import styles from './ReviewsStyles.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Navigation } from 'swiper'
import { Typography } from '../Typography'
import Image from 'next/image'
import { ReviewsData, ReviewsDataProps } from '@/data/ReviewsData'
import { ActiveStars } from './ActiveStars'

export const ReviewsSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 7500,
      }}
      navigation={true}
      speed={1000}
      slidesPerView={1}
      className="ReviewsSlider"
    >
      {ReviewsData.map(({ ...review }: ReviewsDataProps) => (
        <SwiperSlide key={review.id}>
          <div className={styles.reviewsSlider}>
            <Image src="/main/review/lapku.png" width={115} height={77} alt='""' />
            <div className={styles.slider_container}>
              <div className={styles.block_review}>
                <ActiveStars rating={review.rating} />
                <div className={styles.review_title}>
                  <Typography variant="h3" component="h3" fontWeight="fw-500">
                    {review.titleReview}
                  </Typography>
                </div>
                <div className={styles.review_user}>
                  <div className={styles.user_avatar}>
                    <Image
                      src={`/main/review/${review.user.userAvatar}.png`}
                      width={56}
                      height={56}
                      alt={review.user.userFullName}
                    />
                  </div>
                  <div className={styles.user_info}>
                    <Typography variant="h6" component="h6" fontWeight="fw-500">
                      {review.user.userFullName}
                    </Typography>
                    <Typography variant="bodyLarge" component="p" colorVariant="gray" fontWeight="fw-500">
                      {review.user.userProf}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
