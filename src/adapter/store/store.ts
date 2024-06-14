import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Table } from '@/domain/Table/Table'
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
			const startGame = StartGameUseCase()
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
			const getQuote = GetQuoteUseCase()
			const quote = await getQuote.execute()
			set(() => ({ quote }))
		},
		getInitialLives: async () => {
			const getLives = GetLivesUseCase()
			const initialLives = await getLives.execute()
			set(() => ({ ...initialLives }))
		},
	}),
))

export { useStore }
