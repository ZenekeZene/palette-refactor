import { AggregateRoot } from '@gameContext/shared/domain/utils/AggregateRoot'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { Quote } from '@gameContext/quote/domain/Quote'
import type { QuotePrimitive } from '@gameContext/quote/domain/Quote'
import type { QuoteId } from '@gameContext/quote/domain/QuoteId'

export class QuotesCollection extends AggregateRoot {
  readonly quotes: Map<QuoteId, Quote> = new Map()
  private queue: QuoteId[] = []
  readonly id: string

  constructor(initialQuotes: QuotePrimitive[] = [], id?: string) {
    super()
    this.id = id ? id : Uuid.randomValue()
    this.generate(initialQuotes)
  }

  getFirstQuote() {
    return this.quotes.values().next().value
  }

  private generate(initialQuotes: QuotePrimitive[]): void {
    initialQuotes.forEach((initialQuote): void => {
      const quote = Quote.of(initialQuote.text, initialQuote.author)
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

  private resetQueue() {
    this.queue = Array.from(this.quotes.keys())
  }

  static fromArray(quotes: QuotePrimitive[]) {
    const quotesCollection = new QuotesCollection(quotes)
    quotes.forEach((quote) => {
      quotesCollection.add(new Quote(quote.text, quote.author))
    })
    return quotesCollection
  }
}
