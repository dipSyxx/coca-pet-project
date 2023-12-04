import React from 'react'
import styles from './FooterStyles.module.sass'
import { Typography } from '../Typography'
import { SubtitlesPagesTextFooter } from '../SubtitlesPagesTextFooter'
import { Button } from '../Button'
import { SubtitlesPagesTextHero } from '../SubtitlesPagesTextHero'

type Path = {
  pathname: string
}

export const AskBlock = ({ pathname }: Path) => {
  const pathnamePages =
    pathname === '/About' || pathname === '/Pricing' || pathname === '/Contact' || pathname === '/Blog'

  return (
    <>
      <div className={styles.block_ask}>
        <div className={styles.ask_content}>
          <Typography variant="h2" component="h2" colorVariant={pathnamePages ? 'white' : ''}>
            Think beyond the wave
          </Typography>
          {pathnamePages ? (
            <SubtitlesPagesTextFooter text="Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help" />
          ) : (
            <SubtitlesPagesTextHero text="Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help" />
          )}
        </div>
        <Button component="a" href="/" variant={pathnamePages ? 'secondary' : 'primary'} classNameStyles="button">
          Try for free
        </Button>
      </div>
    </>
  )
}
