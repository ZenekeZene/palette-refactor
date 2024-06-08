import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
	lives: number,
	score: number,
	level: number,
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
		level: 1,
		tutorialIsWatched: false,
		incrementLive: (qty = 1) => set((state) => ({ lives: state.lives + qty })),
		decrementLive: (qty = 1) => set((state) => ({ lives: state.lives - qty })),
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
	}),
))

export { useStore }
