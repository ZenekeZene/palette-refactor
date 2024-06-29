import { QuotesCollection } from '@gameContext/domain/Quote/QuotesCollection'

export interface IQuotesRepository {
  getQuotes(): Promise<QuotesCollection>
}
