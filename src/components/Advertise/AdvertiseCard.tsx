import React from 'react'
import styles from './AdvertiseStyles.module.sass'
import Image from 'next/image'
import { Typography } from '../Typography'
import { AdvertiseCardDataProps } from '@/data/AdvertiseCardData'

export const AdvertiseCard = ({ ...advert }: AdvertiseCardDataProps) => {
  return (
    <>
      <li className={styles.list_item}>
        <div className={styles.item_img}>
          <Image src={`/main/advertise/${advert.imgCard}.png`} width={220} height={253} alt="image" />
          <span className={styles.img_icon}>
            <Image src={`/main/advertise/${advert.imgIcon}.svg`} width={24} height={24} alt="icon" />
          </span>
        </div>
        <div className={styles.item_content}>
          <Typography variant="h4" component="h4">
            {advert.titleContent}
          </Typography>
          <Typography variant="bodyLarge" component="p" fontWeight="fw-500" colorVariant="gray">
            {advert.subTitleContent}
          </Typography>
        </div>
      </li>
    </>
  )
}
