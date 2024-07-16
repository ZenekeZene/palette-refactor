import type {
  Player,
  Levels,
  Quotes,
  Quote,
} from '@gameContext/shared/infrastructure/store/store.types'

export interface State {
  player: Player
  levels: Levels
  quotes: Quotes
  quote: Quote
}

export interface StoreState extends State {
  tutorialIsWatched: boolean
}

type Actions = {
  setTutorialIsLaunched: (value: boolean) => void
  setScore: (value: number) => void
  nextQuote: () => void
  nextLevel: () => void
}

export type Store = StoreState & Actions

export type { Player, Levels, Quotes, Quote }
