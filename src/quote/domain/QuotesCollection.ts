import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { Quote } from '@gameContext/quote/domain/Quote'
import type { QuoteRawModel } from '@gameContext/quote/domain/Quote'
import type { QuoteId } from '@gameContext/quote/domain/QuoteId'

export class QuotesCollection extends AggregateRoot {
  private quotes: Map<QuoteId, Quote> = new Map()
  private queue: QuoteId[] = []
  private aggregateId: string

  constructor(initialQuotes: QuoteRawModel[] = [], id?: string) {
    super()
    this.aggregateId = id ? id : Uuid.random().toPrimitive()
    this.generate(initialQuotes)
  }

  getFirstQuote() {
    return this.quotes.values().next().value
  }

  private generate(initialQuotes: QuoteRawModel[]): void {
    initialQuotes.forEach((initialQuote): void => {
      const quote = Quote.fromPrimitives(initialQuote.text, initialQuote.author)
      this.quotes.set(quote.id, quote)
    })
  }

  add(quote: Quote) {
    if (!this.quotes.has(quote.id)) {
      this.quotes.set(quote.id, quote)
      this.queue.push(quote.id)
    }
  }

  getNextQuote() {
    if (this.queue.length === 0) {
      this.resetQueue()
    }

    const nextQuoteId = this.queue.shift()
    if (nextQuoteId === undefined) {
      throw new Error('No more quotes in the queue')
    }
    return this.quotes.get(nextQuoteId)!
  }

  getQuotes() {
    return Array.from(this.quotes.values())
  }

  forEach(callback: (level: Quote) => void): void {
    return this.quotes.forEach(callback)
  }

  getId() {
    return this.aggregateId
  }

  private resetQueue() {
    this.queue = Array.from(this.quotes.keys())
  }

  static fromArray(quotes: QuoteRawModel[]) {
    const quotesCollection = new QuotesCollection(quotes)
    quotes.forEach((quote) => {
      quotesCollection.add(new Quote(quote.text, quote.author))
    })
    return quotesCollection
  }
}
