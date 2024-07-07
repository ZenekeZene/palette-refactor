import { Mock } from 'vitest'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse.dto'
import { toLevelsCollectionResponse } from '@gameContext/level/application/mapper/LevelsCollectionMapper'
import { QuoteProps } from '@gameContext/quote/domain/Quote'
import { Player } from '@gameContext/player/domain/Player'
import { State } from '@frontend/adapter/store/store.types'
import { createStore } from '@frontend/adapter/store/useStore'
import { StoreBuilder } from '@frontend/adapter/store/__mocks__/store.builder'

export class StoreMother {
  private static createDefaultLevels(): LevelsCollectionResponse {
    const { LEVELS_COUNT } = StoreMother.DEFAULT
    const levelsRaw = []
    for (let i = 0; i < LEVELS_COUNT; i++) {
      levelsRaw.push({ id: 'level' + i, numberOfChips: 1, prize: { lives: 0, bonus: 0 } })
    }
    return toLevelsCollectionResponse(new LevelsCollection(levelsRaw))
  }

  private static createDefaultPlayer(): Player {
    const { LIVES, SCORE, LEVEL, BONUS } = StoreMother.DEFAULT
    return Player.fromPrimitives({
      lives: LIVES,
      score: SCORE,
      level: LEVEL,
      bonus: BONUS,
    })
  }

  private static createDefaultBuilder(): StoreBuilder {
    const builder = new StoreBuilder()
    builder.withLevels(StoreMother.createDefaultLevels())
    builder.withPlayer(StoreMother.createDefaultPlayer())
    return builder
  }

  private static mockStore(
    useStore: StoreMother.UseStore,
    state: State
  ): void {
    // TODO: pass the dependencies to the store.
    // Maybe we can pass fake dependencies to the store
    // in testing environment.
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
    const levelsRaw = []
    for (let i = 0; i < options.levelsCount; i++) {
      levelsRaw.push({ id: 'level' + i, numberOfChips: 1, prize: { lives: 0, bonus: 0 } })
    }
    const levels = toLevelsCollectionResponse(new LevelsCollection(levelsRaw))
    builder.withLevels(levels)
    const { LIVES, SCORE, BONUS } = StoreMother.DEFAULT
    const player = Player.fromPrimitives({
      lives: LIVES,
      score: SCORE,
      bonus: BONUS,
      level: options.level,
    })
    builder.withPlayer(player)
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
