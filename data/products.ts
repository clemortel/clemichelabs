import type { PricingItem } from '~/types/content'

export const pricingItems: readonly PricingItem[] = [
  {
    name: 'Solo CTO-OS Notion Workspace',
    price: '29€',
    paddleProductId: 'solo-cto-os',
  },
  {
    name: 'CTO OS Developer Boilerplate',
    price: '49€',
    paddleProductId: 'cto-os-boilerplate',
  },
] as const
