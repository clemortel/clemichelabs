export interface NavLink {
  readonly label: string
  readonly href: string
}

export interface HeroFact {
  readonly value: string
  readonly label: string
}

export interface OfferItem {
  readonly id: string
  readonly title: string
  readonly forWho: string
  readonly description: string
  readonly deliverables: readonly string[]
  readonly price: string
  readonly duration: string
  readonly note: string | null
}

export interface WorkItem {
  readonly period: string
  readonly title: string
  readonly url: string | null
  readonly role: string
  readonly description: string
  readonly stack: readonly string[]
}

export interface MethodStep {
  readonly number: string
  readonly title: string
  readonly description: string
}

export interface TimelineItem {
  readonly period: string
  readonly role: string
  readonly place: string
}

export interface SkillGroup {
  readonly label: string
  readonly items: readonly string[]
}

export interface FaqItem {
  readonly question: string
  readonly answer: string
}

export interface ExternalLink {
  readonly label: string
  readonly href: string
}

export interface FormLabels {
  readonly name: string
  readonly email: string
  readonly message: string
  readonly messagePlaceholder: string
  readonly submit: string
  readonly sending: string
  readonly sentTitle: string
  readonly sentBody: string
  readonly sendAnother: string
  readonly orEmail: string
  readonly errorFallback: string
}

export interface LegalSection {
  readonly title: string
  readonly body: string
}

export interface PricingItem {
  readonly name: string
  readonly price: string
  readonly paddleProductId: string
}
