import { create } from 'zustand'
import type { StoreProps, StoreState, Color } from './types/store'
import { actions } from './actions/actions'
import { defaultState } from './defaultState'

export const createStore = (initProps: StoreProps) =>
  create<StoreState>()((set, get) => ({
    ...defaultState,
    ...initProps,
    setTutorialIsLaunched: (tutorialIsWatched) =>
      set(() => ({ tutorialIsWatched })),
    setScore: (score) => set((state) => ({ ...state, score })),
    nextQuote: async () => {
      const quotes = get().quotes
      const quote = await actions.getNextQuote(quotes)
      set((state) => ({ ...state, quote }))
    },
    nextLevel: async () => {
      get().nextQuote()
      const player = get().player
      const playerWithLevelPassed = await actions.nextLevel(player)
      set((state) => ({ ...state, player: playerWithLevelPassed }))
    },
    mixColor: (color1: Color, color2: Color): Color =>
      actions.mixColor(color1, color2),
  }))
