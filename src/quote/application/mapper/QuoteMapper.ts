import { QuoteDTO } from '../dto/QuoteDTO'
import { Quote } from '@gameContext/quote/domain/Quote'

export const toQuoteResponse = (quote: Quote): QuoteDTO => ({
  id: quote.id.valueOf(),
  text: quote.text,
  author: quote.author,
})
