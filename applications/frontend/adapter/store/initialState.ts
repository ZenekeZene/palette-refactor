import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { Quote } from '@gameContext/quote/domain/Quote'

import { PlayerRepository } from '@gameContext/player/infrastructure/PlayerRepository'
import { QuotesRepository } from '@gameContext/quote/infrastructure/QuotesRepository'
import { LevelsRepository } from '@gameContext/level/infrastructure/LevelsRepository'

import {
  GetPlayer,
  GetPlayerExecution,
} from '@gameContext/player/application/getPlayer.usecase'
import {
  LoadLevelsUseCase,
  LoadLevelsUseCaseExecution,
} from '@gameContext/level/application/loadLevels.usecase'
import {
  GetQuotesUseCase,
  GetQuotesUseCaseExecution,
} from '@gameContext/quote/application/getQuotes.usecase'
import { GetQuoteUseCase } from '@gameContext/quote/application/getQuote.usecase'

import { State } from '@frontend/adapter/store/store.types'

const getPlayer = async (): GetPlayerExecution => {
  const getPlayer = GetPlayer(new PlayerRepository())
  return await getPlayer.execute()
}

const getLevels = async (): LoadLevelsUseCaseExecution => {
  const loadLevels = LoadLevelsUseCase(new LevelsRepository())
  return await loadLevels.execute()
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