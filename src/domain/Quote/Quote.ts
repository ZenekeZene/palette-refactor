import { QuoteId } from './QuoteId'

class Quote {
  private readonly _id: QuoteId

  constructor(
    public text: string,
    public author: string
  ) {
    this._id = QuoteId.random()
  }

  get id() {
    return this._id
  }
}

export { Quote }
