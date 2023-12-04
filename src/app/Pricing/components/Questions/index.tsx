import React from 'react'
import styles from './QuestionsStyles.module.sass'
import { Typography } from '@/components/Typography'
import { QuestionsAccordionData, QuestionsAccordionDataProps } from '@/data/AccordionData'
import { QuestionsAccordion } from './QuestionsAccordion'

export const Questions = () => {
  return (
    <div className={styles.questions}>
      <div className="container">
        <div className={styles.container_title}>
          <Typography variant="h2" component="h2">
            Frequently asked questions
          </Typography>
          <Typography variant="h6" component="h6" colorVariant="gray" fontWeight="fw-500">
            Everything you need to know about the product and billing.
          </Typography>
        </div>
        <div className={styles.questions_accordion}>
          {QuestionsAccordionData.map(({ ...questions }: QuestionsAccordionDataProps) => (
            <QuestionsAccordion key={questions.id} title={questions.title} text={questions.text} />
          ))}
        </div>
      </div>
    </div>
  )
}
