import { StateCreator } from 'zustand'
import type { Store } from '../../types/store'
import { actions } from '../../actions/actions'
import { defaultState } from '../../defaultState'
import { PlayerStore, PlayerStoreProps } from './playerStore.d'

export const createPlayerStore = (initialProps: PlayerStoreProps) => {
  const create: StateCreator<Store, [], [], PlayerStore> = (set, get) => ({
    ...defaultState,
    ...initialProps,
    setTutorialIsLaunched: (tutorialIsWatched) =>
      set(() => ({ tutorialIsWatched })),
    setScore: (score) => set((state: PlayerStore) => ({ ...state, score })),
    nextLevel: () => {
      get().nextQuote()
      const player = get().player
      const playerWithLevelPassed = actions.nextLevel(player)
      set((state: PlayerStore) => ({ ...state, player: playerWithLevelPassed }))
    },
  })
  return create
}
