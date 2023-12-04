export type FooterDataProps = {
  id: number
  linksTitle: string
  linksHref: string[]
  links: string[]
}

export const FooterData: FooterDataProps[] = [
  {
    id: 9609,
    linksTitle: 'Company',
    linksHref: ['/About', '/Pricing', '/Jobs', '/Blog'],
    links: ['About', 'Pricing', 'Jobs', 'Blog'],
  },

  {
    id: 2643,
    linksTitle: 'Product',
    linksHref: ['/About', '/Pricing', '/Jobs', '/Blog'],
    links: ['Sales Software', 'Marketplace', 'Terms & Conditions', 'Privacy Policy'],
  },

  {
    id: 6518,
    linksTitle: 'Discover',
    linksHref: ['/About', '/Pricing', '/Jobs', '/Blog'],
    links: ['CRM Comparision', 'Partner Program', 'What is CRM', 'Resource'],
  },

  {
    id: 3075,
    linksTitle: 'Help Center',
    linksHref: ['/About', '/Pricing', '/Jobs', '/Blog'],
    links: ['Community', 'Knowledge Base', 'Academy', 'Support'],
  },
]
