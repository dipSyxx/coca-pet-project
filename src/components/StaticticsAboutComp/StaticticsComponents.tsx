import React from 'react'
import { Typography } from '../Typography'
import { StatAboutCompDataProps } from '@/data/StatAboutCompData'

export const StaticticsComponents = ({ info, text }: StatAboutCompDataProps) => {
  return (
    <>
      <Typography variant="h2" component="h2">
        {info}
      </Typography>
      <div style={{ maxWidth: 176, width: '100%' }}>
        <Typography variant="h6" component="p" colorVariant="gray" fontWeight="fw-500">
          {text}
        </Typography>
      </div>
    </>
  )
}
