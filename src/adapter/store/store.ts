import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Table } from '@/domain/Table/Table'

import { LivesRepository } from '@/infra/LivesRepository/LivesRepository'
import { QuotesRepository } from '@/infra/QuotesRepository/QuotesRepository'
import { LevelsRepository } from '@/infra/LevelsRepository/LevelsRepository'

import { GetLivesUseCase } from '@/application/getLives.usecase'
import { StartGameUseCase } from '@/application/startGame.usecase'
import { GetQuoteUseCase } from '@/application/getQuote.usecase'

import { Store, InitialState } from './store.types'

const getInitialState = ():InitialState => ({
	lives: 0,
	bonus: 0,
	score: 0,
	currentLevel: 0,
})

const useStore = create<Store>()(devtools((set, get) => ({
	...getInitialState(),
		table: new Table(),
		tutorialIsWatched: false,
		quote: null,
		startGame: async () => {
			const startGame = StartGameUseCase(new LevelsRepository())
			const table = await startGame.execute()
			set(() => ({ table }))
			get().getQuote()
			get().getInitialLives()
		},
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
		setScore: (value) => set(() => ({ score: value })),
		nextLevel: () => {
			get().getQuote()
			set((state) => ({ currentLevel: state.currentLevel + 1 }))
		},
		resetGame: () => get().getInitialLives(),
		getQuote: async () => {
			const getQuote = GetQuoteUseCase(new QuotesRepository())
			const quote = await getQuote.execute()
			set(() => ({ quote }))
		},
		getInitialLives: async () => {
			const getLives = GetLivesUseCase(new LivesRepository())
			const initialLives = await getLives.execute()
			set(() => ({ ...initialLives }))
		},
	}),
))

export { useStore }
