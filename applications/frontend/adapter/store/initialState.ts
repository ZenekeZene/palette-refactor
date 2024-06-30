import { QuotesCollection } from '@gameContext/domain/Quote/QuotesCollection'
import { Quote } from '@gameContext/domain/Quote/Quote'

import { PlayerRepository } from '@gameContext/player/infrastructure/PlayerRepository'
import { QuotesRepository } from '@gameContext/infra/QuotesRepository/QuotesRepository'
import { LevelsRepository } from '@gameContext/level/infrastructure/LevelsRepository'

import {
  GetPlayer,
  GetPlayerExecution,
} from '@gameContext/player/application/getPlayer.usecase'
import {
  StartGameUseCase,
  StartGameUseCaseExecution,
} from '@gameContext/application/startGame.usecase'
import {
  GetQuotesUseCase,
  GetQuotesUseCaseExecution,
} from '@gameContext/application/getQuotes.usecase'
import { GetQuoteUseCase } from '@gameContext/application/getQuote.usecase'

import { State } from '@frontend/adapter/store/store.types'

const getPlayer = async (): GetPlayerExecution => {
  const getPlayer = GetPlayer(new PlayerRepository())
  return await getPlayer.execute()
}

const getLevels = async (): StartGameUseCaseExecution => {
  const startGame = StartGameUseCase(new LevelsRepository())
  return await startGame.execute()
}

const getQuotes = async (): GetQuotesUseCaseExecution => {
  const getQuotes = GetQuotesUseCase(new QuotesRepository())
  const quotes = await getQuotes.execute()
  return quotes
}

const getQuote = (quotesCollection: QuotesCollection): Quote => {
  const getQuote = new GetQuoteUseCase(quotesCollection)
  return getQuote.currentQuote
}

export const createInitialState = async (): Promise<State> => {
  const [player, levels, quotes ] = await Promise.all([getPlayer(), getLevels(), getQuotes()])
  const quote = getQuote(quotes)

  return {
    player,
    levels,
    tutorialIsWatched: false,
    quotes,
    quote,
  }
}
