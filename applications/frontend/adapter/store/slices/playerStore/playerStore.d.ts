import type { Player, Levels } from '../../types/store'

export interface PlayerStoreState {
  player: Player
  levels: Levels
  levelIndex: number
  tutorialIsWatched: boolean
}

export interface PlayerStoreMethods {
  setTutorialIsLaunched: (value: boolean) => void
  setScore: (value: number) => void
  nextLevel: () => void
  decrementLives: (lives: number) => void
}

export type PlayerStore = PlayerStoreState & PlayerStoreMethods
