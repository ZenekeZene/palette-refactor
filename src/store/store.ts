import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Levels } from '@/domain/Table/Table'
import { Table } from '@/domain/Table/Table'
import { StartGame } from '@/application/startGame.usecase'

StartGame()

type State = {
	lives: number,
	score: number,
	currentLevel: number,
	levels: Levels,
	tutorialIsWatched: boolean,
}

type Actions = {
	incrementLive: (qty?: number) => void,
	decrementLive: (qty?: number ) => void,
	setTutorialIsLaunched: (value: boolean) => void,
}

type Store = State & Actions;

const useStore = create<Store>()(devtools((set) => ({
		lives: 10,
		score: 0,
		currentLevel: 1,
		levels: new Map(),
		tutorialIsWatched: false,
		startGame: () => {
			const table: Table = StartGame().execute()
			set(() => ({ levels: table.getLevels() }))
		},
		setLevels: (levels: Levels) => set(() => ({ levels })),
		incrementLive: (qty = 1) => set((state) => ({ lives: state.lives + qty })),
		decrementLive: (qty = 1) => set((state) => ({ lives: state.lives - qty })),
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
	}),
))

export { useStore }
