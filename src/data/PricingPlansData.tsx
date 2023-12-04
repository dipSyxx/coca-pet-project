type IncludePlans = {
  text: string
  available: boolean
}

export type PricingPlansDataProps = {
  id: number
  icon: string
  activeIcon: string
  bestOffer?: boolean
  title: string
  subtitle: string
  cost: number
  include: IncludePlans[]
  isActive?: boolean
  onActivate?: () => void
}

export const PricingPlansData: PricingPlansDataProps[] = [
  {
    id: 918,
    icon: 'heartIcon',
    activeIcon: 'heartIconActive',
    title: 'Starter',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    cost: 100,
    include: [
      {
        text: 'Unlimited Upload',
        available: true,
      },
      {
        text: 'Advanced Statistic',
        available: true,
      },
      {
        text: 'Profile Badge',
        available: true,
      },
      {
        text: 'Access to the community',
        available: true,
      },
      {
        text: 'History of all Liked Photos',
        available: false,
      },
      {
        text: 'Directory Listing',
        available: false,
      },
      {
        text: 'Customize Your Profile',
        available: false,
      },
      {
        text: 'Display Your Workshops',
        available: false,
      },
    ],
  },

  {
    id: 8631,
    icon: 'lightIcon',
    activeIcon: 'lightIconActive',
    bestOffer: true,
    title: 'Popular',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    cost: 1400,
    include: [
      {
        text: 'Unlimited Upload',
        available: true,
      },
      {
        text: 'Advanced Statistic',
        available: true,
      },
      {
        text: 'Profile Badge',
        available: true,
      },
      {
        text: 'Access to the community',
        available: true,
      },
      {
        text: 'History of all Liked Photos',
        available: false,
      },
      {
        text: 'Directory Listing',
        available: true,
      },
      {
        text: 'Customize Your Profile',
        available: false,
      },
      {
        text: 'Display Your Workshops',
        available: false,
      },
    ],
  },

  {
    id: 1151,
    icon: 'crownIcon',
    activeIcon: 'crownIconActive',
    title: 'Enterprise',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    cost: 2100,
    include: [
      {
        text: 'Unlimited Upload',
        available: true,
      },
      {
        text: 'Advanced Statistic',
        available: true,
      },
      {
        text: 'Profile Badge',
        available: true,
      },
      {
        text: 'Access to the community',
        available: true,
      },
      {
        text: 'History of all Liked Photos',
        available: true,
      },
      {
        text: 'Directory Listing',
        available: true,
      },
      {
        text: 'Customize Your Profile',
        available: true,
      },
      {
        text: 'Display Your Workshops',
        available: true,
      },
    ],
  },
]
