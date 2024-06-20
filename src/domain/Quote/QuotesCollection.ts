import { Quote } from '@/domain/Quote/Quote'
import { QuoteId } from '@/domain/Quote/QuoteId'

export class QuotesCollection {
  private _quotes: Map<QuoteId, Quote> = new Map()
  private _queue: QuoteId[] = []

  constructor() {}

  add(quote: Quote) {
    if (!this._quotes.has(quote.id)) {
      this._quotes.set(quote.id, quote)
      this._queue.push(quote.id)
    }
  }

  getNextQuote() {
    if (this._queue.length === 0) {
      this.resetQueue()
    }

    const nextQuoteId = this._queue.shift()
    if (nextQuoteId === undefined) {
      throw new Error('No more quotes in the queue')
    }
    return this._quotes.get(nextQuoteId)!
  }

  private resetQueue() {
    this._queue = Array.from(this._quotes.keys())
  }

  static fromArray(quotes: Quote[]) {
    const quotesCollection = new QuotesCollection()
    quotes.forEach((quote) => {
      quotesCollection.add(new Quote(quote.text, quote.author))
    })
    return quotesCollection
  }
}
