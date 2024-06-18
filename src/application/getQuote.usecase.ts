import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { Quote } from '@/domain/Quote/Quote'

export class GetQuoteUseCase {
	private _currentQuote: Quote
	private _quotesCollection: QuotesCollection

	constructor(quotesCollection: QuotesCollection) {
		this._quotesCollection = quotesCollection
		this._currentQuote = this._quotesCollection.getNextQuote()
	}

	get currentQuote(): Quote {
		return this._currentQuote
	}

	moveToNextQuote() {
		this._currentQuote = this._quotesCollection.getNextQuote()
	}
}
