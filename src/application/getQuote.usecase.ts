import { Quote } from '@/domain/Quote/Quote'
import { QuotesRepository } from '@/infra/QuotesRepository/QuotesRepository'

interface UseCase<T> {
	execute: () => Promise<T>;
}

const GetQuoteUseCase = (): UseCase<Quote> => ({
	execute: async (): Promise<Quote> => {
		const repository = new QuotesRepository()
		const quotes = await repository.getQuotes()

		const randomIndex = Math.floor(Math.random() * quotes.length)
		const quote = quotes[randomIndex]

		return new Quote(quote.id, quote.text, quote.author)
	}
})

export { GetQuoteUseCase }
