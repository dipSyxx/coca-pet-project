'use client'
import React, { useState } from 'react'
import styles from './PricingPlansStyles.module.sass'
import { PricingPlansData, PricingPlansDataProps } from '@/data/PricingPlansData'
import { Plan } from './Plan'

export const PricingPlans = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)

  const handleActivateCard = (indexCard: number) => {
    setActiveCardIndex(indexCard)
  }

  return (
    <div className={styles.plans}>
      <div className="container">
        <ul className={styles.plans_list}>
          {PricingPlansData.map(({ ...plans }: PricingPlansDataProps, indexCard) => (
            <Plan
              id={plans.id}
              key={plans.id}
              title={plans.title}
              subtitle={plans.subtitle}
              cost={plans.cost}
              include={plans.include}
              isActive={activeCardIndex === indexCard}
              onActivate={() => handleActivateCard(indexCard)}
              icon={plans.icon}
              activeIcon={plans.activeIcon}
              bestOffer={plans.bestOffer}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
