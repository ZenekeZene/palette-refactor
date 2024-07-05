import { injectable } from 'tsyringe'
import { IQuotesLoaderRepository } from '@gameContext/quote/domain/IQuotesLoaderRepository'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

@injectable()
class QuotesRepository implements IQuotesLoaderRepository {
  async loadAllFromFile(): Promise<QuotesCollection> {
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
