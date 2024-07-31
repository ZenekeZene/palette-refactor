import type { QuotesCollection } from './QuotesCollection'
import type { QuotesCollectionId } from './QuotesCollectionId'

export interface QuotesRepository {
  save(quotes: QuotesCollection): void
  findById(id: QuotesCollectionId): QuotesCollection | undefined
}
