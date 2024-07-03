import { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'
import { IQuotesRepository } from '@gameContext/quote/domain/IQuotesRepository'
import { Player } from '@gameContext/player/domain/Player'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { LoadLevelsUseCase } from '@gameContext/level/application/loadLevels.usecase'

type LoadGameType = { player: Player, levels: LevelsCollection, quotes: QuotesCollection }

export class LoadGame {
  constructor(
    private playerRepository: IPlayerRepository,
    private quotesRepository: IQuotesRepository,
    private loadLevelsUseCase: LoadLevelsUseCase,
  ) {
    this.playerRepository = playerRepository
    this.quotesRepository = quotesRepository
    this.loadLevelsUseCase = loadLevelsUseCase
  }

  async launch(): Promise<LoadGameType> {
    const player = await this.getPlayer()
    const levels = await this.getLevels()
    const quotes = await this.getQuotes()
    return { player, levels, quotes }
  }

  private async getPlayer(): Promise<Player> {
    return await this.playerRepository.getPlayer()
  }

  private async getLevels(): Promise<LevelsCollection> {
    return await this.loadLevelsUseCase.execute()
  }

  private async getQuotes(): Promise<QuotesCollection> {
    return await this.quotesRepository.getQuotes()
  }
}
