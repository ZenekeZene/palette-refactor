import { QuoteDTO } from './QuoteDTO'

class RegisterQuotesRequest {
  constructor(
    public readonly quotesId: string,
    public readonly quotesData: QuoteDTO[],
  ) {}
}

export { RegisterQuotesRequest }
