import type { Response } from '@gameContext/shared/domain/utils/Response'
import { QuoteDTO } from './QuoteDTO'

export interface QuotesCollectionResponse extends Response {
  id: string
  items: QuoteDTO[]
}
