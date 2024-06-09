import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { LevelsGenerator, Levels } from '@/domain/Level/LevelsGenerator'

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

const levelsGenerator = new LevelsGenerator({ numberOfLevels: 10 })

const useStore = create<Store>()(devtools((set) => ({
		lives: 10,
		score: 0,
		currentLevel: 1,
		levels: levelsGenerator.getLevels(),
		tutorialIsWatched: false,
		incrementLive: (qty = 1) => set((state) => ({ lives: state.lives + qty })),
		decrementLive: (qty = 1) => set((state) => ({ lives: state.lives - qty })),
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
	}),
))

export { useStore }
