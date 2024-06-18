import { IQuotesRepository } from "@/domain/Quote/IQuotesRepository"
import { Quote } from "@/domain/Quote/Quote"
import { QuotesCollection } from "@/domain/Quote/QuotesCollection"

class QuotesRepository implements IQuotesRepository {
	async getQuotes(): Promise<QuotesCollection> {
		try {
			const quotesCollection = new QuotesCollection()
			const QuotesConfig = await import('/config/Quotes.yaml')
			const quotes = QuotesConfig.default.quotes
			quotes.forEach((quote: Quote) => {
				quotesCollection.add(new Quote(quote.text, quote.author))
			})
			return quotesCollection
		} catch (error) {
			console.error('Error loading quotes config', error)
			return new QuotesCollection()
		}
	}
}

export { QuotesRepository }
