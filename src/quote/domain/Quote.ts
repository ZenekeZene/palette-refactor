import { QuoteId } from './QuoteId'

export interface QuoteProps {
  text: string
  author: string
}

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

  static fromPrimitives({ text, author }: QuoteProps) {
    return new Quote(text, author)
  }
}

export { Quote }
