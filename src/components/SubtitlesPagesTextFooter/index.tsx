'use client'

import React from 'react'
import styles from '../SubtitlesPagesTextHero/SubtitlesPagesText.module.sass'
import { Typography } from '../Typography'
import { usePathname } from 'next/navigation'

type TextProp = {
  text: string
}

export const SubtitlesPagesTextFooter = ({ text }: TextProp) => {
  const pathname = usePathname()

  const pathnamePages =
    pathname === '/About' || pathname === '/Pricing' || pathname === '/Contact' || pathname === '/Blog'

  return (
    <div className={styles.content_text}>
      <Typography component="h5" variant="h5" colorVariant={pathnamePages ? 'gray' : ''} fontWeight="fw-400">
        {text}
      </Typography>
    </div>
  )
}
