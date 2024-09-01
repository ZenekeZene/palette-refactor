import { injectable } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { GetQuoteRequest } from '@gameContext/quote/application/dto/GetQuoteRequest'
import type { QuotesRepository } from '@gameContext/quote/domain/QuotesRepository'
import { inject } from 'tsyringe'
import { QuoteDTO } from './dto/QuoteDTO'
import { toQuoteResponse } from '@gameContext/quote/application/mapper/QuoteMapper'
import { QuotesCollectionId } from '../domain/QuotesCollectionId'

@injectable()
class GetQuote implements UseCase<GetQuoteRequest, QuoteDTO> {
  constructor(
    @inject(Types.QuotesRepository) private repository: QuotesRepository,
  ) {}

  execute(getQuoteRequest: GetQuoteRequest): QuoteDTO {
    const quotesCollectionId = new QuotesCollectionId(
      getQuoteRequest.quotesCollectionId,
    )
    const quotesCollection = this.repository.findById(quotesCollectionId)
    if (!quotesCollection) {
      throw new Error('Quotes collection not found')
    }
    const quote = quotesCollection.getNextQuote()
    this.repository.save(quotesCollection)
    return toQuoteResponse(quote)
  }
}

export { GetQuote }
