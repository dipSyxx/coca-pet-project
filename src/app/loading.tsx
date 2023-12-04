import { Typography } from '@/components/Typography'
import React from 'react'

export const loading = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#fff',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1">LOADING...</Typography>
      </div>
    </>
  )
}

export default loading
