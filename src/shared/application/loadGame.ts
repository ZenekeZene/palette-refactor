import { injectable, inject } from "tsyringe"
import { Types } from "@gameContext/shared/infrastructure/identifiers"
import type { Player } from '@gameContext/player/domain/Player'
import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import type { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'

import type { LoadPlayerUseCase } from '@gameContext/player/application/loadPlayer.usecase'
import type { LoadLevelsUseCase } from '@gameContext/level/application/loadLevels.usecase'
import type { LoadQuotesUseCase } from '@gameContext/quote/application/loadQuotes.usecase'

type LoadGameType = { player: Player, levels: LevelsCollection, quotes: QuotesCollection }

@injectable()
export class LoadGame {
  constructor(
    @inject(Types.LoadPlayerUseCase) private loadPlayerUseCase: LoadPlayerUseCase,
    @inject(Types.LoadQuotesUseCase) private loadQuotesUseCase: LoadQuotesUseCase,
    @inject(Types.LoadLevelsUseCase) private loadLevelsUseCase: LoadLevelsUseCase,
  ) {}

  async launch(): Promise<LoadGameType> {
    const player = await this.getPlayer()
    const levels = await this.getLevels()
    const quotes = await this.getQuotes()
    return { player, levels, quotes }
  }

  private async getPlayer(): Promise<Player> {
    return await this.loadPlayerUseCase.execute()
  }

  private async getLevels(): Promise<LevelsCollection> {
    return await this.loadLevelsUseCase.execute()
  }

  private async getQuotes(): Promise<QuotesCollection> {
    return await this.loadQuotesUseCase.execute()
  }
}
