import { UseCase } from '@gameContext/domain/shared/UseCase'
import { QuotesCollection } from '@gameContext/domain/Quote/QuotesCollection'
import { IQuotesRepository } from '@gameContext/domain/Quote/IQuotesRepository'

export type GetQuotesUseCaseExecution = Promise<QuotesCollection>

const GetQuotesUseCase = (
  repository: IQuotesRepository
): UseCase<QuotesCollection> => ({
  execute: async (): GetQuotesUseCaseExecution => {
    const quotes = await repository.getQuotes()
    return quotes
  },
})

export { GetQuotesUseCase }
