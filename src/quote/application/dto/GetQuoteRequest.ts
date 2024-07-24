import { Request } from '@gameContext/shared/domain/utils/Request'

export class GetQuoteRequest implements Request {
  constructor(public readonly quotesCollectionId: string) {}
}
