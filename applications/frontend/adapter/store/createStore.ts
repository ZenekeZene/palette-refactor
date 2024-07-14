import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Store, State } from './store.types'
import { actions } from './actions/actions'

function createStore(propsState: State) {
  const { player, levels } = propsState
  actions.registerInMemory(player, levels)

  const useStore = create<Store>()(
    devtools((set, get) => {
      return ({
        ...propsState,
        setTutorialIsLaunched: (value) =>
          set(() => ({ tutorialIsWatched: value })),
        setScore: (value) => set((state) => ({ ...state, score: value })),
        nextQuote: () => {
          set((state) => ({ ...state, quote: get().quotes.getNextQuote() }))
        },
        nextLevel: async () => {
          get().nextQuote()
          const playerWithLevelPassed = await actions.nextLevel(player)
          set((state) => ({ ...state, player: playerWithLevelPassed }))
        },
      })
    })
  )
  return useStore
}

export { createStore }
