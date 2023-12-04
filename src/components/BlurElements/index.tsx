import React from 'react'
import styles from './BlurElements.module.sass'

type BlurProps = {
  blurE1Top: number
  blurE1Left: number
  blurE2Right: number
  blurE2Bottom: number
  visibleElem1?: 'none'
  visibleElem2?: 'none'
}

export const BlurElements = ({
  blurE1Top,
  blurE1Left,
  blurE2Right,
  blurE2Bottom,
  visibleElem1,
  visibleElem2,
}: BlurProps) => {
  return (
    <>
      <div className={styles.blurElements1} style={{ top: blurE1Top, left: blurE1Left, display: visibleElem1 }} />
      <div
        className={styles.blurElements2}
        style={{ right: blurE2Right, bottom: blurE2Bottom, display: visibleElem2 }}
      />
    </>
  )
}
