import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Store, State } from './store.types'

function createStore (propsState: State) {
	const useStore = create<Store>()(devtools((set, get) => ({
		...propsState,
		setTutorialIsLaunched: (value) => set(() => ({ tutorialIsWatched: value })),
		setScore: (value) => set((state) => ({ ...state, score: value })),
		nextQuote: () => {
			set((state) => ({ ...state, quote: get().quotes.getNextQuote() }))
		},
		nextLevel: () => {
			get().nextQuote()
			get().gameSession.nextLevel()
		},
	})))
	return useStore
}

export { createStore }
