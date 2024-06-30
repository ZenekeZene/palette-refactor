import { IQuotesRepository } from '@gameContext/quote/domain/IQuotesRepository'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

class QuotesRepository implements IQuotesRepository {
  async getQuotes(): Promise<QuotesCollection> {
    try {
      const QuotesConfig = await import('@resources/Quotes.yaml')
      const quotes = QuotesConfig.default.quotes
      return QuotesCollection.fromArray(quotes)
    } catch (error) {
      console.error('Error loading quotes config', error)
      return new QuotesCollection()
    }
  }
}

export { QuotesRepository }
