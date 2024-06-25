import { Mock } from 'vitest'
import { State } from '@/adapter/store/store.types'
import { LevelsCollection } from '@/domain/Level/LevelsCollection'
import { Level } from '@/domain/Level/Level'
import { QuoteProps } from '@/domain/Quote/Quote'
import { GameSession } from '@/domain/GameSession/GameSession'
import { createStore } from '@/adapter/store/useStore'
import { StoreBuilder } from '@/adapter/store/__mocks__/store.builder'

class StoreMother {
  public static minimalStore(useStore: Mock<any, any>): void {
    const builder = new StoreBuilder()
    const levels = new LevelsCollection()
    levels.add(Level.fromPrimitive({ numberOfChips: 0 }))
    builder.withLevels(levels)
    const gameSession = GameSession.fromPrimitives({ lives: 10, score: 0, level: 0, bonus: 0 })
    builder.withGameSession(gameSession)
    StoreMother.createStore(useStore, builder.currentState)
  }

  public static storeWithQuote(useStore: Mock<any, any>, quote:QuoteProps): void {
    const builder = new StoreBuilder()
    const levels = new LevelsCollection()
    levels.add(Level.fromPrimitive({ numberOfChips: 0 }))
    builder.withLevels(levels)
    const gameSession = GameSession.fromPrimitives({ lives: 10, score: 0, level: 0, bonus: 0 })
    builder.withGameSession(gameSession)
    builder.withQuote(quote)
    StoreMother.createStore(useStore, builder.currentState)
  }

  public static storeMultipleLevels(useStore: Mock<any, any>, { level, levelsCount }: { level: number, levelsCount: number }): void {
    const builder = new StoreBuilder()
    const levels = new LevelsCollection()
    for (let i = 0; i < levelsCount; i++) {
      levels.add(Level.fromPrimitive({ numberOfChips: 0 }))
    }
    builder.withLevels(levels)
    const gameSession = GameSession.fromPrimitives({ lives: 1, score: 0, level, bonus: 0 })
    builder.withGameSession(gameSession)
    StoreMother.createStore(useStore, builder.currentState)
  }

  private static createStore(useStore: Mock<any, any>, state: State): void {
    const store = createStore(state)
    const mocked = (selector: Function) => selector(store.getState())
    useStore.mockImplementation(mocked)
  }
}

export { StoreMother }
