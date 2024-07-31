import { injectable } from 'tsyringe'
import type { QuotesRepository } from '@gameContext/quote/domain/QuotesRepository'
import type { QuotesCollectionId } from '../domain/QuotesCollectionId'
import type { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

@injectable()
class QuotesInMemoryRepository implements QuotesRepository {
  private quotesCollection: Map<string, QuotesCollection> = new Map()

  save(quotesCollection: QuotesCollection): void {
    this.quotesCollection.set(quotesCollection.id, quotesCollection)
  }

  findById(id: QuotesCollectionId): QuotesCollection | undefined {
    return this.quotesCollection.get(id.valueOf())
  }
}

export { QuotesInMemoryRepository }
