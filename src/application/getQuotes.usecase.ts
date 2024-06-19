import { UseCase } from '@/domain/shared/UseCase'
import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { IQuotesRepository } from '@/domain/Quote/IQuotesRepository'

export type GetQuotesUseCaseExecution = Promise<QuotesCollection>

const GetQuotesUseCase = (repository: IQuotesRepository): UseCase<QuotesCollection> => ({
	execute: async (): GetQuotesUseCaseExecution => {
		const quotes = await repository.getQuotes()
		return quotes
	}
})

export { GetQuotesUseCase }
