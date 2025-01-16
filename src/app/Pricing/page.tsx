'use client'
import React, { useState } from 'react'
import styles from './PricingStyles.module.sass'
import { Typography } from '@/components/Typography'
import clsx from 'clsx'
import { BlurElements } from '@/components/BlurElements'
import { PricingPlans } from './components/PricingPlans'
import { Questions } from './components/Questions'

const Pricing = () => {
  const [toggleActive, setToggleActive] = useState(false)

  const toggleSwitch = () => {
    setToggleActive(!toggleActive)
  }
  return (
    <>
      <main className="main">
        <div className="container">
          <BlurElements blurE1Top={-150} blurE1Left={-200} blurE2Right={-100} blurE2Bottom={-250} />
          <div className={styles.container_inner}>
            <div className={styles.inner_topTitle}>
              <Typography variant="bodyLarge" component="p" colorVariant="blue">
                Pricing plans 🤑
              </Typography>
            </div>
            <div className={styles.inner_title}>
              <Typography fontWeight="fw-700" component="h1" variant="h1">
                Choose a plan for a more advanced business
              </Typography>
            </div>
            <div className={styles.inner_toggle}>
              <div onClick={toggleSwitch} className={clsx(styles.toggle)}>
                <div className={clsx(styles.toggle_button, toggleActive ? styles.toggle_button_active : '')}></div>
              </div>
              <Typography
                fontWeight="fw-500"
                component="p"
                variant="bodyMed"
                colorVariant={toggleActive ? 'blue' : 'gray'}
              >
                Annual pricing (save 20%)
              </Typography>
            </div>
          </div>
        </div>
      </main>
      <PricingPlans />
      <Questions />
    </>
  )
}

export default Pricing
