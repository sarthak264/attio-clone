import { flagContent, navItem, tagContent } from './types'

let tag: tagContent = {
  headline: "We've raised a $23.5m Series A led by Redpoint Ventures!",
  link: '/',
}

let flag: flagContent = {
  headline: 'How Pallet uses Attio to power their GTM',
  link: '/',
}

let navItems: navItem[] = [
  {
    title: 'Customer',
    link: '/',
  },
  {
    title: 'Changelog',
    link: '/',
  },
  {
    title: 'Help',
    link: '/',
  },
  {
    title: 'Careers',
    link: '/',
    badgeNumber: 4,
  },
  {
    title: 'Pricing',
    link: '/',
  },
]

export { tag, flag, navItems }
