import { injectable } from 'tsyringe'
import { QuotesLoaderRepository } from '@gameContext/quote/domain/QuotesLoaderRepository'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

@injectable()
class QuotesLoaderFromFileRepository implements QuotesLoaderRepository {
  async loadFromFile(): Promise<QuotesCollection> {
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

export { QuotesLoaderFromFileRepository }
