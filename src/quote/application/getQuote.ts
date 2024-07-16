import { injectable } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { GetQuoteRequest } from '@gameContext/quote/application/dto/GetQuoteRequest'
import type { QuotesRepository } from '@gameContext/quote/domain/QuotesRepository'
import { inject } from 'tsyringe'
import { QuoteDTO } from './dto/QuoteDTO'
import { toQuoteResponse } from '@gameContext/quote/application/mapper/QuoteMapper'
import { QuotesCollectionId } from '../domain/QuotesCollectionId'

@injectable()
class GetQuote implements UseCase<QuoteDTO>{
  constructor(
    @inject(Types.QuotesRepository) private repository: QuotesRepository
  ) {}

  async execute(getQuoteRequest: GetQuoteRequest): Promise<QuoteDTO> {
    const quotesCollectionId = new QuotesCollectionId(getQuoteRequest.quotesCollectionId)
    const quotesCollection = await this.repository.searchById(quotesCollectionId)
    if (!quotesCollection) {
      throw new Error('Quotes collection not found')
    }
    const quote = quotesCollection.getNextQuote()
    this.repository.saveInMemory(quotesCollection)
    return toQuoteResponse(quote)
  }
}

export { GetQuote }
