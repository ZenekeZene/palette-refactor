import { injectable } from 'tsyringe'
import { QuotesLoaderRepository } from '@gameContext/quote/domain/QuotesLoaderRepository'
import { QuotePrimitive } from '@gameContext/quote/domain/Quote'

@injectable()
class QuotesLoaderFromFileRepository implements QuotesLoaderRepository {
  async loadAllFromFile(): Promise<QuotePrimitive[]> {
    const QuotesConfig = await import('@resources/Quotes.yaml')
    return QuotesConfig.default.quotes as Array<QuotePrimitive>
  }
}

export { QuotesLoaderFromFileRepository }
