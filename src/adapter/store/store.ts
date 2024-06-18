import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { Table } from '@/domain/Table/Table'
import { GameSession } from '@/domain/GameSession/GameSession'
import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { Quote } from '@/domain/Quote/Quote'

import { GameSessionRepository } from '@/infra/GameSessionRepository/GameSessionRepository'
import { QuotesRepository } from '@/infra/QuotesRepository/QuotesRepository'
import { LevelsRepository } from '@/infra/LevelsRepository/LevelsRepository'

import { GetGameSessionUseCase } from '@/application/getGameSession.usecase'
import { StartGameUseCase } from '@/application/startGame.usecase'
import { GetQuotesUseCase } from '@/application/getQuotes.usecase'
import { GetQuoteUseCase } from '@/application/getQuote.usecase'

import { Store } from './store.types'

const getGameSession = async ():Promise<GameSession> => {
	const getGameSession = GetGameSessionUseCase(new GameSessionRepository())
	const gameSession = await getGameSession.execute()
	return gameSession
}

const getTable = async ():Promise<Table> => {
	const startGame = StartGameUseCase(new LevelsRepository())
	const table = await startGame.execute()
	return table
}

const getQuotes = async ():Promise<QuotesCollection> => {
	const getQuotes = GetQuotesUseCase(new QuotesRepository())
	const quotes = await getQuotes.execute()
	return quotes
}

const getQuote = async (quotesCollection: QuotesCollection):Promise<Quote> => {
	const getQuote = new GetQuoteUseCase(quotesCollection)
	return getQuote.currentQuote
}

const initialGameSession = await getGameSession()
const initialTable = await getTable()
const quotes = await getQuotes()
const initialQuote = await getQuote(quotes)

const useStore = create<Store>()(devtools((set, get) => ({
		gameSession: initialGameSession,
		table: initialTable,
		quotes,
		quote: initialQuote,
		tutorialIsWatched: false,
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
		setScore: (value) => set((state) => ({ ...state, score: value })),
		nextQuote: () => {
			set((state) => ({ ...state, quote: get().quotes.getNextQuote() }))
		},
		nextLevel: () => {
			get().nextQuote()
			get().gameSession.nextLevel()
		},
		resetGame: () => get().gameSession.reset(),
		getGameSession: async () => {
			const getGameSession = GetGameSessionUseCase(new GameSessionRepository())
			const gameSession = await getGameSession.execute()
			set(() => ({ gameSession }))
		},
	}),
))

export { useStore }
