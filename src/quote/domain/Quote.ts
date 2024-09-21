import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { QuoteId } from './QuoteId'

export interface QuotePrimitive {
  text: string
  author: string
}

export class Quote extends Entity {
  readonly id: QuoteId

  constructor(
    public text: string,
    public author: string,
  ) {
    super()
    this.id = QuoteId.random()
  }

  static of(text: string, author: string): Quote {
    return new Quote(text, author)
  }
}
