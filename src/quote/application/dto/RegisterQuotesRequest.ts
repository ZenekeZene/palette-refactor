import { Request } from '@gameContext/shared/domain/utils/Request'
import { QuoteDTO } from './QuoteDTO'

class RegisterQuotesRequest implements Request {
  constructor(
    public readonly quotesId: string,
    public readonly quotesData: QuoteDTO[],
  ) {}
}

export { RegisterQuotesRequest }
