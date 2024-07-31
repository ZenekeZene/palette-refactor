import { container } from 'tsyringe'
import { GetQuoteRequest } from '@gameContext/quote/application/dto/GetQuoteRequest'
import type { GetQuote } from '@gameContext/quote/application/getQuote'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { Quotes, Quote } from '../types/store'

export const getNextQuote = (quotes: Quotes): Quote => {
  const nextQuoteRequest = new GetQuoteRequest(quotes.id)
  const getQuote = container.resolve<GetQuote>(Types.GetQuote)
  try {
    return getQuote.execute(nextQuoteRequest)
  } catch (error) {
    console.error('Failed to get next quote:', error)
    return quotes.items[0]
  }
}
