import clsx from 'clsx'
import styles from './ReviewsStyles.module.sass'

type RatingProps = {
  rating: number
}

// Active stars
export const ActiveStars = ({ rating }: RatingProps) => {
  const MAX_STARS = 5
  const activeStars = Math.floor(rating) // Кількість активних зірочок

  const renderStars = () => {
    const stars = []

    for (let i = 1; i <= MAX_STARS; i++) {
      stars.push(
        <li key={i}>
          <i className={clsx('fa-solid fa-star', styles.stars, i > activeStars ? styles.gray : '')} />
        </li>,
      )
    }

    return stars
  }

  return (
    <ul className={styles.review_stars}>
      {renderStars()}
      <span>{rating.toFixed(1)}/5.0</span>
    </ul>
  )
}
