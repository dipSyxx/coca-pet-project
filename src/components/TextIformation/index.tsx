import React from 'react'
import styles from './TextIformationStyles.module.sass'
import { Typography } from '../Typography'

type TextIformationProps = {
  title: string
  text: string
}

export const TextIformation = ({ title, text }: TextIformationProps) => {
  return (
    <div className={styles.information}>
      <div className={styles.container_inner}>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        <Typography variant="h6" component="p" fontWeight="fw-500" colorVariant="gray">
          {text}
        </Typography>
      </div>
    </div>
  )
}
