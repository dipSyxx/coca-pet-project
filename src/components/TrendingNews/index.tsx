import React from 'react'
import styles from './TrendingNews.module.sass'
import { Typography } from '../Typography'
import { NewsSlider } from './NewsSlider'

export const TrendingNews = () => {
  return (
    <div className={styles.trendingNews}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_title}>
            <Typography variant="h2" component="h2">
              Trending news from Coca
            </Typography>
            <Typography variant="h6" component="h6" fontWeight="fw-500" colorVariant="gray">
              we have some new Service to pamper you
            </Typography>
          </div>
          <NewsSlider />
        </div>
      </div>
    </div>
  )
}
