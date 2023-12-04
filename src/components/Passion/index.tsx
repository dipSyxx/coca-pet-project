import React from 'react'
import styles from './Passion.module.sass'
import { Typography } from '../Typography'
import Image from 'next/image'
import { PassionData, PassionDataProps } from '@/data/PassionData'

export const Passion = () => {
  return (
    <div className={styles.passion}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_img}>
            <Image src="/main/passion/Statictic.png" alt="passionImg" sizes="100%" width={525} height={587} />
          </div>
          <div className={styles.inner_content}>
            <div className={styles.content_title}>
              <Typography component="h2" variant="h2">
                Passion to increase company revenue up to 85%
              </Typography>
              <div style={{ maxWidth: 350, width: '100%' }}>
                <Typography component="p" variant="h6" colorVariant="gray" fontWeight="fw-500">
                  Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent
                  messaging
                </Typography>
              </div>
            </div>
            <ul className={styles.content_list}>
              {PassionData.map(({ ...passion }: PassionDataProps) => (
                <li key={passion.id} className={styles.list_item}>
                  <Image src="/main/passion/checkIcon.svg" width={24} height={24} alt="check" />
                  <Typography component="h6" variant="h6" fontWeight="fw-500">
                    {passion.title}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
