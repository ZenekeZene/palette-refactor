import { injectable } from 'tsyringe'
import { QuotesRepository } from '@gameContext/quote/domain/QuotesRepository'
import type { QuotesCollectionId } from '../domain/QuotesCollectionId'
import type { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

@injectable()
class QuotesInMemoryRepository implements QuotesRepository {
  private quotesCollection: Map<string, QuotesCollection> = new Map()

  async saveInMemory(quotesCollection: QuotesCollection): Promise<void> {
    this.quotesCollection.set(quotesCollection.id, quotesCollection)
  }

  async searchById(
    id: QuotesCollectionId,
  ): Promise<QuotesCollection | undefined> {
    return this.quotesCollection.get(id.valueOf())
  }
}

export { QuotesInMemoryRepository }
