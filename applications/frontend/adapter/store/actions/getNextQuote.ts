import { container } from 'tsyringe'
import { GetQuoteRequest } from '@gameContext/quote/application/dto/GetQuoteRequest'
import { GetQuote } from '@gameContext/quote/application/getQuote'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { Quotes, Quote } from '../types/store'

const getNextQuote = async (quotes: Quotes): Promise<Quote> => {
  const nextQuoteRequest = new GetQuoteRequest(quotes.id)
  const getQuote = container.resolve<GetQuote>(Types.GetQuote)
  try {
    return await getQuote.execute(nextQuoteRequest)
  } catch (error) {
    console.error('Failed to get next quote:', error)
    return quotes.items[0]
  }
}

export { getNextQuote }
