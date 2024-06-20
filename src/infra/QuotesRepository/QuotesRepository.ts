import { IQuotesRepository } from '@/domain/Quote/IQuotesRepository'
import { QuotesCollection } from '@/domain/Quote/QuotesCollection'

class QuotesRepository implements IQuotesRepository {
  async getQuotes(): Promise<QuotesCollection> {
    try {
      const QuotesConfig = await import('/config/Quotes.yaml')
      const quotes = QuotesConfig.default.quotes
      return QuotesCollection.fromArray(quotes)
    } catch (error) {
      console.error('Error loading quotes config', error)
      return new QuotesCollection()
    }
  }
}

export { QuotesRepository }
