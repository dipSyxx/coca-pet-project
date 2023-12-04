import React from 'react'
import { Typography } from '@/components/Typography'
import styles from './TeamStyles.module.sass'
import { TeamSlider } from './TeamSlider'

export const Team = () => {
  return (
    <div className={styles.team}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_title}>
            <Typography variant="h2" component="h2">
              Meet our team of creators, designers, and world-class problem solvers
            </Typography>
            <div className={styles.inner_subtitle}>
              <Typography variant="h6" component="h6" fontWeight="fw-500" colorVariant="gray">
                To become the company that customers want, it takes a group of passionate people. Get to know the people
                who lead
              </Typography>
            </div>
          </div>
          <TeamSlider />
        </div>
      </div>
    </div>
  )
}
