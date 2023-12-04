import React from 'react'
import styles from './LiftBusinessStyles.module.sass'
import { TextIformation } from '../TextIformation'
import Image from 'next/image'

export const LiftBusiness = () => {
  return (
    <div className={styles.liftBusiness}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.inner_img}>
            <Image src="/main/liftBusiness/people.png" alt="people" width={1104} height={489} />
          </div>
          <TextIformation
            title="Lift your business to new heights with our digital marketing services"
            text="To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers"
          />
        </div>
      </div>
    </div>
  )
}
