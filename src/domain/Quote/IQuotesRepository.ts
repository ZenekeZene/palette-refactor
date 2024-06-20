import { QuotesCollection } from '@/domain/Quote/QuotesCollection'

export interface IQuotesRepository {
  getQuotes(): Promise<QuotesCollection>
}
