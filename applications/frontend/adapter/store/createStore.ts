import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Store, StoreState } from './store.types'
import { actions } from './actions/actions'

function createStore(propsState: StoreState) {
  actions.registerInMemory(propsState)

  const useStore = create<Store>()(
    devtools((set, get) => {

      return ({
        ...propsState,
        setTutorialIsLaunched: (value) =>
          set(() => ({ tutorialIsWatched: value })),
        setScore: (value) => set((state) => ({ ...state, score: value })),
        nextQuote: async () => {
          const quote = await actions.getNextQuote(get().quotes)
          set((state) => ({ ...state, quote }))
        },
        nextLevel: async () => {
          get().nextQuote()
          const playerWithLevelPassed = await actions.nextLevel(get().player)
          set((state) => ({ ...state, player: playerWithLevelPassed }))
        },
      })
    })
  )
  return useStore
}

export { createStore }