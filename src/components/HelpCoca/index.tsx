import React from 'react'
import styles from './CocaHelp.module.sass'
import { Typography } from '../Typography'
import Image from 'next/image'
import { CocaHelpData, CocaHelpDataProps } from '@/data/CocaHelpData'

export const CocaHelp = () => {
  return (
    <div className={styles.cocaHelp}>
      <div className="container">
        <div className={styles.container_inner}>
          <div className={styles.content_title}>
            <Typography component="h2" variant="h2" colorVariant="white">
              Coca help our client solve complex customer problems with date that does more.
            </Typography>
            <Typography component="p" variant="h6" colorVariant="gray" fontWeight="fw-500">
              Our platform offers the modern enterprise full control of how date can be access and used with industry
              leading software solutions for identity, activation, and date collaboration
            </Typography>
          </div>
          <ul className={styles.items_list}>
            {CocaHelpData.map(({ ...coca }: CocaHelpDataProps) => (
              <li className={styles.list_item} key={coca.id}>
                <Image src={`/main/coca/${coca.icon}.svg`} width={40} height={40} alt={coca.title} />
                <div style={{ maxWidth: 274, width: '100%' }}>
                  <Typography variant="h4" component="h4" colorVariant="white">
                    {coca.title}
                  </Typography>
                </div>
                <Typography variant="bodyLarge" component="p" fontWeight="fw-500" colorVariant="gray">
                  {coca.subtitle}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
