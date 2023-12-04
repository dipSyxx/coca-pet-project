import React from 'react'
import { Typography } from '@/components/Typography'
import styles from './IdeasStyles.module.sass'

export const Ideas = () => {
  return (
    <div className={styles.ideas}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_title}>
            <Typography variant="h2" component="h2">
              Powerful ideas & sales acceleration
            </Typography>
          </div>
          <div className={styles.inner_subtitle}>
            <Typography variant="h5" component="h5">
              We are a software development firm specializing in digital products. We build beautiful, functional and
              cross-platform solutions that are accessible to all.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
