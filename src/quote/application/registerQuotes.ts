import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import type { QuotesRepository } from '@gameContext/quote/domain/QuotesRepository'
import type { QuotesCollectionResponse } from './dto/QuotesCollectionResponse'
import type { RegisterQuotesRequest } from './dto/RegisterQuotesRequest'
import { toQuotesCollectionResponse } from './mapper/QuotesCollectionMapper'

@injectable()
class RegisterQuotes implements UseCase<QuotesCollectionResponse> {
  constructor(
    @inject(Types.QuotesRepository) private quotesRepository: QuotesRepository
  ) {}

  async execute(
    registerLevelsRequest: RegisterQuotesRequest
  ): Promise<QuotesCollectionResponse> {
    const quotesId = registerLevelsRequest.quotesId
    const quotesRaw = registerLevelsRequest.quotesData
    const quotesCollection = new QuotesCollection(quotesRaw, quotesId)
    this.quotesRepository.saveInMemory(quotesCollection)
    return toQuotesCollectionResponse(quotesCollection)
  }
}

export { RegisterQuotes }
