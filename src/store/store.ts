import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Table } from '@/domain/Table/Table'
import { StartGameUseCase } from '@/application/startGame.usecase'
import { Store, InitialState } from './store.types'
import Lives from '/config/Lives.yaml'

const initialState: InitialState = {
	lives: Lives.lives,
	bonus: Lives.bonus,
	score: Lives.score,
	currentLevel: Lives.level,
}

const useStore = create<Store>()(devtools((set) => ({
	...initialState,
		table: new Table(),
		tutorialIsWatched: false,
		startGame: async () => {
			const startGame = StartGameUseCase()
			const table = await startGame.execute()
			set(() => ({ table }))
		},
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
		setScore: (value) => set(() => ({ score: value })),
		nextLevel: () => set((state) => ({ currentLevel: state.currentLevel + 1 })),
		resetGame: () => set(() => initialState),
	}),
))

useStore.getState().startGame()

export { useStore }
