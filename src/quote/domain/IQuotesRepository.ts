import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

export interface IQuotesRepository {
  getQuotes(): Promise<QuotesCollection>
}
