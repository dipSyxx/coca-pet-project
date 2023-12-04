'use client'
import React, { useState } from 'react'
import styles from './QuestionsAccordion.module.sass'
import { Typography } from '@/components/Typography'

export const QuestionsAccordion = ({ ...questions }) => {
  const [openAccordion, setOpenAccordion] = useState(false)

  const toggleHendler = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <div onClick={toggleHendler} className={styles.questions_accordion}>
      <div className={styles.questions_accordion_heading}>
        <Typography component="h5" variant="h5">
          {questions.title}
        </Typography>

        <button className={styles.questions_accordion_icon} onClick={toggleHendler}>
          {openAccordion ? <span>-</span> : <span>+</span>}
        </button>
      </div>
      <div aria-expanded={!openAccordion} className={styles.questions_accordion_content}>
        <div className={styles.content_text}>
          <Typography component="h6" variant="h6" colorVariant="gray" fontWeight="fw-500">
            {questions.text}
          </Typography>
        </div>
      </div>
    </div>
  )
}
