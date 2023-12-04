import clsx from 'clsx'
import { createElement, ElementType, FC, ReactNode } from 'react'

import styles from './TypographyStyles.module.sass'

type TypographyProps = {
  children: ReactNode
  component?: ElementType
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyLarge' | 'bodyMed' | 'bodySmall'
  colorVariant?: 'white' | 'gray' | 'blue' | ''
  fontWeight?: 'fw-400' | 'fw-500' | 'fw-700'
}

export const Typography: FC<TypographyProps> = ({
  children,
  component = 'h1',
  variant = 'h1',
  colorVariant = '',
  fontWeight = '',
}) => {
  return createElement(
    component,
    {
      className: clsx(styles.typography, styles[variant], styles[colorVariant], styles[fontWeight]),
    },
    children,
  )
}
