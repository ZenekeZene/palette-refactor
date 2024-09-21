import { QuotePrimitive } from '@gameContext/quote/domain/Quote'

export interface QuotesLoaderRepository {
  loadAllFromFile(): Promise<QuotePrimitive[]>
}
