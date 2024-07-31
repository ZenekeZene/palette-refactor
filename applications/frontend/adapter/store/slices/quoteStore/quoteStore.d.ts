import { Quotes, Quote } from '../../types/store'

export interface QuoteStore {
  quotes: Quotes | undefined
  quote: Quote | undefined
  nextQuote: () => void
}
