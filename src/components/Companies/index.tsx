import React from 'react'
import styles from './CompaniesStyles.module.sass'
import { Typography } from '../Typography'
import { CompaniesData, CompaniesDataProps } from '@/data/CompaniesData'
import Image from 'next/image'

export const Companies = () => {
  return (
    <div className={styles.companies}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_stat}>
            <Typography variant="h2" component="h2">
              890+
            </Typography>
            <Typography variant="h6" component="h6" fontWeight="fw-500" colorVariant="gray">
              some big companies that we work with, and trust us very much
            </Typography>
          </div>
          <ul className={styles.companies_list}>
            {CompaniesData.map(({ ...comp }: CompaniesDataProps) => (
              <li key={comp.id} className={styles.list_item}>
                <Image
                  src={`/main/companies/${comp.href}.png`}
                  width={comp.width}
                  height={comp.height}
                  alt={comp.href}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
