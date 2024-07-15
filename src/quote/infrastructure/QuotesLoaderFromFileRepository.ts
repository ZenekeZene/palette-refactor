import { injectable } from 'tsyringe'
import { QuotesLoaderRepository } from '@gameContext/quote/domain/QuotesLoaderRepository'
import { QuoteRawModel } from '@gameContext/quote/domain/Quote'

@injectable()
class QuotesLoaderFromFileRepository implements QuotesLoaderRepository {
  async loadAllFromFile(): Promise<QuoteRawModel[]> {
    const QuotesConfig = await import('@resources/Quotes.yaml')
    return QuotesConfig.default.quotes as Array<QuoteRawModel>
  }
}

export { QuotesLoaderFromFileRepository }
