import React from 'react'
import styles from './PlanStyles.module.sass'
import Image from 'next/image'
import { PricingPlansDataProps } from '@/data/PricingPlansData'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { Typography } from '@/components/Typography'

export const Plan = ({ isActive, onActivate, ...plans }: PricingPlansDataProps) => {
  return (
    <div className={clsx(styles.plan, isActive ? styles.plan_active : '')} onClick={onActivate} key={plans.id}>
      <div className={styles.card_content}>
        <div className={styles.content_icon_bestOffer}>
          <div className={clsx(styles.icon, isActive ? styles.iconActive : '')}>
            <Image
              src={`/pricing/pricingPlans/${isActive ? plans.activeIcon : plans.icon}.svg`}
              width={20}
              height={20}
              alt={plans.title}
            />
          </div>
          {plans.bestOffer ? <div className={styles.bestOffer}>Best Offers 🔥</div> : ''}
        </div>
        <div className={styles.content_texts}>
          <div className={styles.content_title}>
            <Typography variant="h5" component="h5" colorVariant={isActive ? 'white' : ''}>
              {plans.title}
            </Typography>
          </div>
          <div className={styles.content_subtitle}>
            <Typography variant="bodyLarge" component="p" colorVariant="gray" fontWeight="fw-500">
              {plans.subtitle}
            </Typography>
          </div>
        </div>
        <div className={styles.content_cost}>
          <Typography variant="h2" component="h2" colorVariant={isActive ? 'white' : ''}>
            ${plans.cost}
          </Typography>
          <Typography variant="bodyLarge" component="p" colorVariant={isActive ? 'white' : 'gray'} fontWeight="fw-500">
            /mo
          </Typography>
        </div>
        <ul className={styles.content_include}>
          <Typography variant="bodyLarge" component="p" colorVariant={isActive ? 'white' : ''}>
            What's included:
          </Typography>
          {plans.include.map(({ ...includeItem }, index) => (
            <li key={index} className={styles.include_item}>
              <div className={styles.item_icon}>
                <Image
                  src={`/pricing/pricingPlans/${includeItem.available ? 'activeTick' : 'disabledTick'}.svg`}
                  width={19}
                  height={19}
                  alt={includeItem.text}
                />
              </div>
              <div className={styles.item_text}>
                <Typography
                  variant="bodyLarge"
                  component="p"
                  colorVariant={isActive ? 'white' : ''}
                  fontWeight="fw-500"
                >
                  <span className={includeItem.available ? '' : styles.disabled_text}>{includeItem.text}</span>
                </Typography>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.content_btn}>
          <Button variant={isActive ? 'planButtonActive' : 'planButton'} component="button" classNameStyles="button">
            Choose Plan
          </Button>
        </div>
      </div>
    </div>
  )
}
