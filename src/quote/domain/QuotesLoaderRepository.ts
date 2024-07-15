import { QuoteRawModel } from '@gameContext/quote/domain/Quote'

export interface QuotesLoaderRepository {
  loadAllFromFile(): Promise<QuoteRawModel[]>
}
