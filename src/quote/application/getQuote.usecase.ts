import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { Quote } from '@gameContext/quote/domain/Quote'

export class GetQuoteUseCase {
  public currentQuote: Quote
  private quotesCollection: QuotesCollection

  constructor(quotesCollection: QuotesCollection) {
    this.quotesCollection = quotesCollection
    this.currentQuote = this.quotesCollection.getNextQuote()
  }

  moveToNextQuote() {
    this.currentQuote = this.quotesCollection.getNextQuote()
  }
}
