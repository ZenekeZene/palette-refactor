import { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse.dto'
import { Quote } from '@gameContext/quote/domain/Quote'
import { QuotesCollection } from '@gameContext/quote/domain/QuotesCollection'
import { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'

export interface StoreAPI {
  set: (fn: (state: State) => State) => void
  get: () => Store
}

export type State = {
  player: PlayerResponse
  levels: LevelsCollectionResponse
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
