import React from 'react'

import styles from './JoinTeamStyles.module.sass'
import { Typography } from '@/components/Typography'
import Link from 'next/link'

export const JoinTeam = () => {
  return (
    <div className={styles.joinTeam}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_title}>
            <Typography variant="h2" component="h2">
              Join our team, The one with the master touch
            </Typography>
          </div>
          <div className={styles.inner_subtitle}>
            <Typography variant="h6" component="h6" fontWeight="fw-500" colorVariant="gray">
              We believe it takes great people to make a great product. That’s why we hire not only the perfect
              professional fits, but people who embody our company values.
            </Typography>
            <div>
              <Link href="/" className={styles.subtitle_link}>
                See Open Position
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
