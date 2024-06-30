import { QuotesCollection } from '@gameContext/domain/Quote/QuotesCollection'
import { Quote } from '@gameContext/domain/Quote/Quote'

import { GameSessionRepository } from '@gameContext/infra/GameSessionRepository/GameSessionRepository'
import { QuotesRepository } from '@gameContext/infra/QuotesRepository/QuotesRepository'
import { LevelsRepository } from '@gameContext/infra/LevelsRepository/LevelsRepository'

import {
  GetGameSessionUseCase,
  GetGameSessionExecution,
} from '@gameContext/application/getGameSession.usecase'
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

const getGameSession = async (): GetGameSessionExecution => {
  const getGameSession = GetGameSessionUseCase(new GameSessionRepository())
  return await getGameSession.execute()
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
  const [gameSession, levels, quotes ] = await Promise.all([getGameSession(), getLevels(), getQuotes()])
  const quote = getQuote(quotes)

  return {
    gameSession,
    levels,
    tutorialIsWatched: false,
    quotes,
    quote,
  }
}
