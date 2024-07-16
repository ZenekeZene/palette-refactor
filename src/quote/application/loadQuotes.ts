import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { Loader } from '@gameContext/shared/domain/Loader'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import type { QuotesLoaderRepository } from '@gameContext/quote/domain/QuotesLoaderRepository'
import type { QuotesCollectionResponse } from './dto/QuotesCollectionResponse'
import { toQuotesCollectionResponse } from './mapper/QuotesCollectionMapper'

@injectable()
class LoadQuotes implements Loader<QuotesCollectionResponse> {
  constructor(
    @inject(Types.QuotesLoaderRepository)
    private repository: QuotesLoaderRepository
    // @inject(Types.IEventBus) private eventBus: IEventBus,
  ) {}

  async execute(): Promise<QuotesCollectionResponse> {
    try {
      const quotesRaw = await this.repository.loadAllFromFile()
      const quotesCollection = new QuotesCollection(quotesRaw)
      // this.eventBus.publish(quotesCollection.pullDomainEvents())
      return toQuotesCollectionResponse(quotesCollection)
    } catch (error) {
      console.error('Error loading quotes config', error)
      throw new Error('Error loading quotes config')
    }
  }
}

export { LoadQuotes }
