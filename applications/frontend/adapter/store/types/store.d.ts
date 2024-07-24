import type {
  Player,
  Levels,
  Quotes,
  Quote,
} from '@gameContext/shared/infrastructure/store/store'

export interface StoreProps {
  player: Player
  levels: Levels
  quotes: Quotes
  quote: Quote
  tutorialIsWatched: boolean
}

export interface StoreState extends StoreProps {
  setTutorialIsLaunched: (value: boolean) => void
  setScore: (value: number) => void
  nextQuote: () => void
  nextLevel: () => void
}

export type { Player, Levels, Quotes, Quote }
