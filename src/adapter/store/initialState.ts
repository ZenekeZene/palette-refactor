import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { Quote } from '@/domain/Quote/Quote'

import { GameSessionRepository } from '@/infra/GameSessionRepository/GameSessionRepository'
import { QuotesRepository } from '@/infra/QuotesRepository/QuotesRepository'
import { LevelsRepository } from '@/infra/LevelsRepository/LevelsRepository'

import {
  GetGameSessionUseCase,
  GetGameSessionExecution,
} from '@/application/getGameSession.usecase'
import {
  StartGameUseCase,
  StartGameUseCaseExecution,
} from '@/application/startGame.usecase'
import {
  GetQuotesUseCase,
  GetQuotesUseCaseExecution,
} from '@/application/getQuotes.usecase'
import { GetQuoteUseCase } from '@/application/getQuote.usecase'

import { State } from '@/adapter/store/store.types'

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
  const quotes = await getQuotes()
  const quote = getQuote(quotes)
  const gameSession = await getGameSession()
  const levels = await getLevels()

  return {
    gameSession,
    levels,
    tutorialIsWatched: false,
    quotes,
    quote,
  }
}
