import { IQuotesRepository } from "@/domain/Quote/IQuotesRepository"
import { Quote } from "@/domain/Quote/Quote"

class QuotesRepository implements IQuotesRepository {
	async getQuotes(): Promise<Quote[]> {
		try {
			const QuotesConfig = await import('/config/Quotes.yaml')
			return QuotesConfig.default.quotes
		} catch (error) {
			console.error('Error loading quotes config', error)
			return []
		}
	}
}

export { QuotesRepository }
