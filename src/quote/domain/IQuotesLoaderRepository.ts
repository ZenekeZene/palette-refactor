import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

export interface IQuotesLoaderRepository {
  loadFromFile(): Promise<QuotesCollection>
}
