import { QuoteDTO } from './QuoteDTO'

export interface QuotesCollectionResponse {
  id: string
  items: QuoteDTO[]
}
