import { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'
import { IQuotesRepository } from '@gameContext/quote/domain/IQuotesRepository'
import { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'
import { Player } from '@gameContext/player/domain/Player'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

type LoadGameType = { player: Player, levels: LevelsCollection, quotes: QuotesCollection }
type LoadGameExecution = Promise<LoadGameType>

export class LoadGame {
  constructor(
    private playerRepository: IPlayerRepository,
    private quotesRepository: IQuotesRepository,
    private levelsRepository: ILevelsRepository) {
    this.playerRepository = playerRepository
    this.quotesRepository = quotesRepository
    this.levelsRepository = levelsRepository
  }

  async launch(): LoadGameExecution {
    const player = await this.getPlayer()
    const levels = await this.getLevels()
    const quotes = await this.getQuotes()
    return { player, levels, quotes }
  }

  private async getPlayer(): Promise<Player> {
    return await this.playerRepository.getPlayer()
  }

  private async getLevels(): Promise<LevelsCollection> {
    return await this.levelsRepository.getLevels()
  }

  private async getQuotes(): Promise<QuotesCollection> {
    return await this.quotesRepository.getQuotes()
  }

}
