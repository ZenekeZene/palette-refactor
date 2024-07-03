import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { IQuotesRepository } from '@gameContext/quote/domain/IQuotesRepository'

const GetQuotesUseCase = (
  repository: IQuotesRepository
): UseCase<QuotesCollection> => ({
  execute: async (): Promise<QuotesCollection> => {
    const quotes = await repository.getQuotes()
    return quotes
  },
})

export { GetQuotesUseCase }
