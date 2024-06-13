import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Table } from '@/domain/Table/Table'
import { StartGameUseCase } from '@/application/startGame.usecase'
import { GetQuoteUseCase } from '@/application/getQuote.usecase'
import { Store, InitialState } from './store.types'
import InitialLives from '/config/Lives.yaml'
const Lives = InitialLives.initial

const initialState: InitialState = {
	lives: Lives.lives,
	bonus: Lives.bonus,
	score: Lives.score,
	currentLevel: Lives.level,
}

const useStore = create<Store>()(devtools((set, get) => ({
	...initialState,
		table: new Table(),
		tutorialIsWatched: false,
		quote: null,
		startGame: async () => {
			const startGame = StartGameUseCase()
			const table = await startGame.execute()
			set(() => ({ table }))
			get().getQuote()
		},
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
		setScore: (value) => set(() => ({ score: value })),
		nextLevel: () => {
			get().getQuote()
			set((state) => ({ currentLevel: state.currentLevel + 1 }))
		},
		resetGame: () => set(() => initialState),
		getQuote: async () => {
			const getQuote = GetQuoteUseCase()
			const quote = await getQuote.execute()
			set(() => ({ quote }))
		}
	}),
))

export { useStore }
