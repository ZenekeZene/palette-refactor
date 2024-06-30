import { UseCase } from '@gameContext/shared/utils/UseCase'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { IQuotesRepository } from '@gameContext/quote/domain/IQuotesRepository'

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
