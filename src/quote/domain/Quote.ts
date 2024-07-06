import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { QuoteId } from './QuoteId'

export interface QuoteProps {
  text: string
  author: string
}

class Quote extends Entity {
  protected id: QuoteId

  constructor(
    public text: string,
    public author: string
  ) {
    super()
    this.id = QuoteId.random()
  }

  static fromPrimitives({ text, author }: QuoteProps) {
    return new Quote(text, author)
  }
}

export { Quote }
