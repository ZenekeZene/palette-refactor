import { UseCase } from '@/domain/shared/UseCase'
import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { IQuotesRepository } from '@/domain/Quote/IQuotesRepository'

const GetQuotesUseCase = (repository: IQuotesRepository): UseCase<QuotesCollection> => ({
	execute: async (): Promise<QuotesCollection> => {
		const quotes = await repository.getQuotes()
		return quotes
	}
})

export { GetQuotesUseCase }
