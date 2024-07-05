import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

export interface IQuotesLoaderRepository {
  loadAllFromFile(): Promise<QuotesCollection>
}
