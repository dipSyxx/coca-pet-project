import React from 'react'
import styles from './StaticticsAboutCompStyles.module.sass'
import { StatAboutCompData, StatAboutCompDataProps } from '@/data/StatAboutCompData'
import { StaticticsComponents } from './StaticticsComponents'

export const StaticticsAboutComp = () => {
  return (
    <div className={styles.statictics}>
      <div className="container">
        <ul className={styles.container_list}>
          {StatAboutCompData.map(({ ...stat }: StatAboutCompDataProps) => (
            <li key={stat.id} className={styles.list_item}>
              <StaticticsComponents text={stat.text} info={stat.info} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
