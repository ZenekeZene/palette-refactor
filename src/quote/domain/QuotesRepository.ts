import type { QuotesCollection } from './QuotesCollection'
import type { QuotesCollectionId } from './QuotesCollectionId'

export interface QuotesRepository {
  saveInMemory(quotes: QuotesCollection): Promise<void>
  searchById(id: QuotesCollectionId): Promise<QuotesCollection | undefined>
}
