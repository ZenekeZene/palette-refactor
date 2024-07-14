import { injectable, inject } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import type { QuotesLoaderRepository } from '@gameContext/quote/domain/QuotesLoaderRepository'

@injectable()
class LoadQuotesUseCase implements UseCase<QuotesCollection> {
  constructor(
    @inject(Types.QuotesLoaderRepository) private repository: QuotesLoaderRepository
  ) {}

  async execute(): Promise<QuotesCollection> {
    const quotes = await this.repository.loadFromFile()
    return quotes
  }
}

export { LoadQuotesUseCase }
