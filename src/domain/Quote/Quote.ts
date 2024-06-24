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

  static fromPrimitives({ text, author }: { text: string, author: string }) {
    return new Quote(text, author)
  }
}

export { Quote }
