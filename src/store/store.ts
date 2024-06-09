import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
	lives: number,
	score: number,
	currentLevel: number,
	levels: any[],
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
		levels: ['fake level', 'fake level', 'fake level', 'fake level', 'fake level'],
		tutorialIsWatched: false,
		incrementLive: (qty = 1) => set((state) => ({ lives: state.lives + qty })),
		decrementLive: (qty = 1) => set((state) => ({ lives: state.lives - qty })),
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
	}),
))

export { useStore }
