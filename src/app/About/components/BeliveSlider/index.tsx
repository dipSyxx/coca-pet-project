'use client'
import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'
import styles from './BeliveSliderStyles.module.sass'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Typography } from '@/components/Typography'
import Link from 'next/link'
import { BeliveSliderData, BeliveSliderDataProps } from '@/data/BeliveSliderData'
import { Button } from '@/components/Button'
import { BlurElements } from '@/components/BlurElements'

export const BeliveSlider = () => {
  return (
    <>
      <div className={styles.beliveSlider}>
        <div className="container">
          <div className={styles.container_inner}>
            <BlurElements blurE1Top={250} blurE1Left={-140} blurE2Right={0} blurE2Bottom={0} visibleElem2="none" />
            <Swiper
              modules={[Navigation]}
              navigation={true}
              rewind={true}
              speed={1000}
              slidesPerView={2.5}
              spaceBetween={30}
              className="beliveSlider"
            >
              {BeliveSliderData.map(({ ...belives }: BeliveSliderDataProps) => (
                <SwiperSlide key={belives.id}>
                  <div className={styles.beliveSlider_block}>
                    <div className={styles.block_img}>
                      <Image
                        src={`/about/beliveSlider/${belives.imgHref}.png`}
                        width={belives.width}
                        height={belives.height}
                        alt={belives.imgHref}
                      />
                    </div>
                    {belives.title ? (
                      <div className={styles.block_content_img}>
                        <div className={styles.content_img_block}>
                          <Typography variant="h4" component="h4">
                            {belives.title}
                          </Typography>
                          <Typography variant="h6" component="h6" colorVariant="gray" fontWeight="fw-500">
                            {belives.subtitle}
                          </Typography>
                        </div>
                        <Button component="button" variant="primary" classNameStyles="button">
                          See Details
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </Button>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
