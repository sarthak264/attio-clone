interface Icon {
  className?: string
}

interface tagContent {
  headline: string
  link: string
}

interface flagContent {
  headline: string
  link: string
}

interface navItem {
  title: string
  link: string
  badgeNumber?: number
}

export type { Icon, tagContent, flagContent, navItem }
