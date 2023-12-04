export type ReviewsDataProps = {
  id: number
  rating: number
  titleReview: string
  user: {
    userAvatar: string
    userFullName: string
    userProf: string
  }
}

export const ReviewsData: ReviewsDataProps[] = [
  {
    id: 2261,
    rating: 4,
    titleReview:
      '“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”',
    user: {
      userAvatar: 'user1',
      userFullName: 'Renee Wells',
      userProf: 'Product Designer, Quotient',
    },
  },

  {
    id: 4089,
    rating: 5,
    titleReview:
      '“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”',
    user: {
      userAvatar: 'user2',
      userFullName: 'Renee Wells',
      userProf: 'Product Designer, Quotient',
    },
  },

  {
    id: 509,
    rating: 2,
    titleReview:
      '“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”',
    user: {
      userAvatar: 'user1',
      userFullName: 'Yura Linetsky',
      userProf: 'React Front-end Developer',
    },
  },

  {
    id: 8501,
    rating: 3,
    titleReview:
      '“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”',
    user: {
      userAvatar: 'user2',
      userFullName: 'Renee Wells',
      userProf: 'Product Designer, Quotient',
    },
  },
]
