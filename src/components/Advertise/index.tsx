import React from 'react'
import styles from './AdvertiseStyles.module.sass'
import { Typography } from '../Typography'
import { AdvertiseCardData, AdvertiseCardDataProps } from '@/data/AdvertiseCardData'
import { AdvertiseCard } from './AdvertiseCard'

export const Advertise = () => {
  return (
    <div className={styles.advertise}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_title}>
            <Typography variant="h2" component="h2">
              Advertise, analyze, and optimize! We do it all for you
            </Typography>
            <div style={{ maxWidth: 439, width: '100%' }}>
              <Typography variant="h6" component="h6" fontWeight="fw-500" colorVariant="gray">
                Build more meaningful and lasting relationships - better understand their needs, identify new
                opportunities to help address any problems faster
              </Typography>
            </div>
          </div>
          <ul className={styles.card_list}>
            {AdvertiseCardData.map(({ ...advert }: AdvertiseCardDataProps) => (
              <AdvertiseCard key={advert.id} {...advert} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
