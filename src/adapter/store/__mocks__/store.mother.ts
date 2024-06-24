import { State } from '@/adapter/store/store.types'
import { LevelsCollection } from '@/domain/Level/LevelsCollection'
import { Level } from '@/domain/Level/Level'
import { Quote } from '@/domain/Quote/Quote'
import { QuotesCollection } from '@/domain/Quote/QuotesCollection'
import { GameSession } from '@/domain/GameSession/GameSession'
import { createStore } from '@/adapter/store/useStore'

class StoreMother {
  private static createInitialState(payload?: any): State {
    const levels = new LevelsCollection()
    levels.add(Level.fromPrimitive({ numberOfChips: 0 }))
    const quotes = QuotesCollection.fromArray([{ text: 'quote', author: 'author' }])
    const quote = payload && Quote.fromPrimitives(payload)
    const gameSession = GameSession.fromPrimitives({ lives: 0, score: 0, level: 0, bonus: 0 })

    return {
      gameSession,
      levels,
      tutorialIsWatched: false,
      quotes,
      quote,
      ...payload,
    }
  }

  static createStore(payload?: any) {
    const initialState = StoreMother.createInitialState(payload)
    const store = createStore(initialState)
    return (selector: Function) => selector(store.getState())
  }
}

export { StoreMother }

export const mockStore = (useStore: any, payload?: any) => {
  const store = StoreMother.createStore(payload)
  useStore.mockImplementation(store)
}
