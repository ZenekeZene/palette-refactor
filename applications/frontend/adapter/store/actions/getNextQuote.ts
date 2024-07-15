import { container } from "tsyringe"
import { GetQuoteRequest } from '@gameContext/quote/application/dto/GetQuoteRequest'
import { GetQuoteUseCase } from '@gameContext/quote/application/getQuote.usecase'
import { Quotes, Quote } from '../store.types'

const getNextQuote = async (quotes: Quotes): Promise<Quote> => {
  const nextQuoteRequest = new GetQuoteRequest(quotes.id)
  const getQuote = container.resolve(GetQuoteUseCase)
  try {
    return await getQuote.execute(nextQuoteRequest)
  } catch (error) {
    console.error('Failed to get next quote:', error)
    return quotes.quotes[0]
  }
}

export { getNextQuote }
