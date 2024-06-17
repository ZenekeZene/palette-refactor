import { UseCase } from '@/domain/shared/UseCase'
import { Quote } from '@/domain/Quote/Quote'
import { IQuotesRepository } from '@/domain/Quote/IQuotesRepository'

const GetQuoteUseCase = (repository: IQuotesRepository): UseCase<Quote> => ({
	execute: async (): Promise<Quote> => {
		const quotes = await repository.getQuotes()

		const randomIndex = Math.floor(Math.random() * quotes.length)
		const quote = quotes[randomIndex]

		return new Quote(quote.id, quote.text, quote.author)
	}
})

export { GetQuoteUseCase }
