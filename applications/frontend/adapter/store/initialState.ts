import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { Quote } from '@gameContext/quote/domain/Quote'

import { PlayerRepository } from '@gameContext/player/infrastructure/PlayerRepository'
import { QuotesRepository } from '@gameContext/quote/infrastructure/QuotesRepository'
import { LevelsRepository } from '@gameContext/level/infrastructure/LevelsRepository'
import { PrizesRepository } from '@gameContext/prize/infrastructure/PrizesRepository'

import { LoadLevelsUseCase } from '@gameContext/level/application/loadLevels.usecase'
import { GetQuoteUseCase } from '@gameContext/quote/application/getQuote.usecase'

import { LoadGame } from '@gameContext/shared/application/loadGame'
import { State } from '@frontend/adapter/store/store.types'

const getQuote = (quotesCollection: QuotesCollection): Quote => {
  const getQuote = new GetQuoteUseCase(quotesCollection)
  return getQuote.currentQuote
}

export const createInitialState = async (): Promise<State> => {
  const playerRepository = new PlayerRepository()
  const quotesRepository = new QuotesRepository()
  const levelsRepository = new LevelsRepository()
  const prizesRepository = new PrizesRepository()
  const loadLevelsUseCase = new LoadLevelsUseCase(levelsRepository, prizesRepository)
  const loadGame = new LoadGame(playerRepository, quotesRepository, loadLevelsUseCase)
  const { player, levels, quotes } = await loadGame.launch()
  const quote = getQuote(quotes)

  return {
    player,
    levels,
    tutorialIsWatched: false,
    quotes,
    quote,
  }
}
