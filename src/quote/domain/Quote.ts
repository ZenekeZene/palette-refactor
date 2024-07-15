import { Entity } from '@gameContext/shared/domain/utils/Entity'
import { QuoteId } from './QuoteId'

export interface QuoteRawModel {
  text: string
  author: string
}

class Quote extends Entity {
  public id: QuoteId

  constructor(
    public text: string,
    public author: string
  ) {
    super()
    this.id = QuoteId.random()
  }

  static fromPrimitives(text: string, author:string): Quote {
    return new Quote(text, author)
  }

  getId(): QuoteId {
    return this.id
  }
}

export { Quote }
