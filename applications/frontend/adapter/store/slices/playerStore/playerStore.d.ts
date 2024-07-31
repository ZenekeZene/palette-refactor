import type { Player, Levels } from '../../types/store'

export interface PlayerStoreProps {
  player: Player
  levels: Levels
  levelIndex: number
  tutorialIsWatched: boolean
}

export interface PlayerStore extends PlayerStoreProps {
  setTutorialIsLaunched: (value: boolean) => void
  setScore: (value: number) => void
  nextLevel: () => void
}
