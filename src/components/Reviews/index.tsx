import React from 'react'
import styles from './ReviewsStyles.module.sass'
import { Typography } from '../Typography'
import { ReviewsSlider } from './ReviewsSlider'

export const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_title}>
            <div style={{ maxWidth: 522, width: '100%' }}>
              <Typography variant="h2" component="h2">
                What our customer are saying
              </Typography>
            </div>

            <div style={{ maxWidth: 376, width: '100%' }}>
              <Typography variant="h6" component="h6" colorVariant="gray" fontWeight="fw-500">
                We are trusted numerous companies from different business to meet their needs
              </Typography>
            </div>
          </div>
          <ReviewsSlider />
        </div>
      </div>
    </div>
  )
}
