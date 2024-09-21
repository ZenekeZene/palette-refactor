import { injectable, inject } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { Loader } from '@gameContext/shared/domain/Loader'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import type { QuotesLoaderRepository } from '@gameContext/quote/domain/QuotesLoaderRepository'
import type { QuotesCollectionResponse } from './dto/QuotesCollectionResponse'
import { toQuotesCollectionResponse } from './mapper/QuotesCollectionMapper'

@injectable()
export class LoadQuotes implements Loader {
  constructor(
    @inject(Types.QuotesLoaderRepository)
    private repository: QuotesLoaderRepository,
  ) {}

  async execute(): Promise<QuotesCollectionResponse> {
    try {
      const quotesRaw = await this.repository.loadAllFromFile()
      const quotesCollection = new QuotesCollection(quotesRaw)
      return toQuotesCollectionResponse(quotesCollection)
    } catch (error) {
      console.error('Error loading quotes config', error)
      throw new Error('Error loading quotes config')
    }
  }
}
