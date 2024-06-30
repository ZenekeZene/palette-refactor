import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { Quote } from '@gameContext/domain/Quote/Quote'
import { QuotesCollection } from '@gameContext/domain/Quote/QuotesCollection'
import { Player } from '@gameContext/player/domain/Player'

export type State = {
  player: Player
  levels: LevelsCollection
  tutorialIsWatched: boolean
  quotes: QuotesCollection
  quote: Quote
}

type Actions = {
  setTutorialIsLaunched: (value: boolean) => void
  setScore: (value: number) => void
  nextQuote: () => void
  nextLevel: () => void
}

export type Store = State & Actions
