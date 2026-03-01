export interface StatItem {
  readonly value: string
  readonly label: string
}

export interface ServiceItem {
  readonly icon: string
  readonly title: string
  readonly description: string
  readonly features: readonly string[]
}

export interface ProjectItem {
  readonly title: string
  readonly url: string | null
  readonly description: string
  readonly tags: readonly string[]
  readonly status: 'Live' | 'Building'
}

export interface ProcessStep {
  readonly number: string
  readonly title: string
  readonly description: string
}

export interface TestimonialItem {
  readonly quote: string
  readonly author: string
  readonly role: string
}

export interface LegalSection {
  readonly title: string
  readonly body: string
}
