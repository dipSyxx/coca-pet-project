'use client'

import React from 'react'
import styles from './SubtitlesPagesText.module.sass'
import { Typography } from '../Typography'

type TextProp = {
  text: string
}

export const SubtitlesPagesTextHero = ({ text }: TextProp) => {
  return (
    <div className={styles.content_text}>
      <span className={styles.text_line} />
      <Typography component="h5" variant="h5">
        {text}
      </Typography>
    </div>
  )
}
