import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

export interface QuotesLoaderRepository {
  loadFromFile(): Promise<QuotesCollection>
}
