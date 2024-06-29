import { LevelsCollection } from '@gameContext/domain/Level/LevelsCollection'
import { Quote } from '@gameContext/domain/Quote/Quote'
import { QuotesCollection } from '@gameContext/domain/Quote/QuotesCollection'
import { GameSession } from '@gameContext/domain/GameSession/GameSession'

export type State = {
  gameSession: GameSession
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
