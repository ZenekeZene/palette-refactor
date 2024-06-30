import { IPlayerRepository } from '@gameContext/player/domain/IPlayerRepository'
import { IQuotesRepository } from '@gameContext/domain/Quote/IQuotesRepository'
import { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'

export class InitialGameService {
  constructor(private playerRepository: IPlayerRepository, private quotesRepository: IQuotesRepository, private levelsRepository: ILevelsRepository) {
    this.playerRepository = playerRepository
    this.quotesRepository = quotesRepository
    this.levelsRepository = levelsRepository
  }

  async launch() {
    const player = await this.playerRepository.getPlayer()
    const levels = await this.levelsRepository.getLevels()
    const quotes = await this.quotesRepository.getQuotes()
    return { player, levels, quotes }
  }

  async getPlayer() {
    return await this.playerRepository.getPlayer()
  }

  async getLevels() {
    return await this.levelsRepository.getLevels()
  }

  async getQuotes() {
    return await this.quotesRepository.getQuotes()
  }
}
