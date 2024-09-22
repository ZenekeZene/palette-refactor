import { StateCreator } from 'zustand'
import type { Store } from '../../types/store'
import { actions } from '../../actions/actions'
import { defaultState } from '../../defaultState'
import { PlayerStore, PlayerStoreState } from './playerStore.d'

export const createPlayerStore = (initialProps: PlayerStoreState) => {
  const create: StateCreator<Store, [], [], PlayerStore> = (set, get) => ({
    ...defaultState,
    ...initialProps,
    setTutorialIsLaunched: (tutorialIsWatched) =>
      set(() => ({ tutorialIsWatched })),
    setScore: (score) => {
      const player = get().score
      set((state: PlayerStore) => ({ ...state, player: { ...player, score } }))
    },
    decrementLives: (livesToDecrement) => {
      const player = get().player
      const currentLives = player.lives
      set((state: PlayerStore) => ({
        ...state,
        player: { ...player, lives: currentLives - livesToDecrement },
      }))
    },
    launchBonus: () => {
      const player = get().player
      const currentSwatchColor = get().swatchColor
      actions.launchBonus(player, currentSwatchColor)
    },
    consumeBonus: (bonusToConsume: number) => {
      const player = get().player
      const currentBonus = player.bonus
      set((state: PlayerStore) => ({
        ...state,
        player: { ...player, bonus: currentBonus - bonusToConsume },
      }))
    },
    nextLevel: () => {
      get().nextQuote()
      const player = get().player
      const playerWithLevelPassed = actions.nextLevel(player)
      set((state: PlayerStore) => ({ ...state, player: playerWithLevelPassed }))
    },
  })
  return create
}
