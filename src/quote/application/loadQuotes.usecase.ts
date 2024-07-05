import { injectable, inject } from 'tsyringe'
import type { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import type { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import type { IQuotesLoaderRepository } from '@gameContext/quote/domain/IQuotesLoaderRepository'

export interface LoadQuotesUseCaseType extends UseCase<QuotesCollection> {}

@injectable()
class LoadQuotesUseCase implements LoadQuotesUseCaseType {
  constructor(
    @inject('IQuotesLoaderRepository') private repository: IQuotesLoaderRepository
  ) {}

  async execute(): Promise<QuotesCollection> {
    const quotes = await this.repository.loadAllFromFile()
    return quotes
  }
}

export { LoadQuotesUseCase }
