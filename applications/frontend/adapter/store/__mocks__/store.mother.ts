import { Mock } from 'vitest'
import { LevelsCollection } from '@gameContext/domain/Level/LevelsCollection'
import { Level } from '@gameContext/domain/Level/Level'
import { QuoteProps } from '@gameContext/domain/Quote/Quote'
import { GameSession } from '@gameContext/domain/GameSession/GameSession'
import { State } from '@frontend/adapter/store/store.types'
import { createStore } from '@frontend/adapter/store/useStore'
import { StoreBuilder } from '@frontend/adapter/store/__mocks__/store.builder'

export class StoreMother {
  private static createDefaultLevels(): LevelsCollection {
    const levels = new LevelsCollection()
    const { LEVELS_COUNT } = StoreMother.DEFAULT
    for (let i = 0; i < LEVELS_COUNT; i++) {
      levels.add(Level.fromPrimitive({ numberOfChips: 0 }))
    }
    return levels
  }

  private static createDefaultGameSession(): GameSession {
    const { LIVES, SCORE, LEVEL, BONUS } = StoreMother.DEFAULT
    return GameSession.fromPrimitives({
      lives: LIVES,
      score: SCORE,
      level: LEVEL,
      bonus: BONUS,
    })
  }

  private static createDefaultBuilder(): StoreBuilder {
    const builder = new StoreBuilder()
    builder.withLevels(StoreMother.createDefaultLevels())
    builder.withGameSession(StoreMother.createDefaultGameSession())
    return builder
  }

  private static mockStore(
    useStore: StoreMother.UseStore,
    state: State
  ): void {
    const store = createStore(state)
    const mocked = (selector: Function) => selector(store.getState())
    useStore.mockImplementation(mocked)
  }

  public static minimalStore(useStore: StoreMother.UseStore): void {
    const builder = StoreMother.createDefaultBuilder()
    StoreMother.mockStore(useStore, builder.currentState)
  }

  public static storeWithQuote(
    useStore: StoreMother.UseStore,
    quote: QuoteProps
  ): void {
    const builder = StoreMother.createDefaultBuilder()
    builder.withQuote(quote)
    StoreMother.mockStore(useStore, builder.currentState)
  }

  public static storeMultipleLevels(
    useStore: StoreMother.UseStore,
    options: StoreMother.MultipleLevels
  ): void {
    const builder = new StoreBuilder()
    const levels = new LevelsCollection()
    for (let i = 0; i < options.levelsCount; i++) {
      levels.add(Level.fromPrimitive({ numberOfChips: 0 }))
    }
    builder.withLevels(levels)
    const { LIVES, SCORE, BONUS } = StoreMother.DEFAULT
    const gameSession = GameSession.fromPrimitives({
      lives: LIVES,
      score: SCORE,
      bonus: BONUS,
      level: options.level,
    })
    builder.withGameSession(gameSession)
    StoreMother.mockStore(useStore, builder.currentState)
  }
}

export namespace StoreMother {
  export enum DEFAULT {
    LIVES = 10,
    LEVELS_COUNT = 1,
    LEVEL = 0,
    BONUS = 0,
    SCORE = 0,
  }
  export type MultipleLevels = { level: number; levelsCount: number }
  export type UseStore = Mock<any, any>
}
