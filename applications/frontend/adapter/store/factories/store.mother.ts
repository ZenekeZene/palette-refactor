import { Mock } from 'vitest'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse'
import { toLevelsCollectionResponse } from '@gameContext/level/application/mapper/LevelsCollectionMapper'
import { StoreState } from '@frontend/adapter/store/store.d'
import { createStore } from '@frontend/adapter/store/createStore'
import { StoreBuilder } from '@frontend/adapter/store/factories/store.builder'
import '@gameContext/shared/infrastructure/dependency-injection/container'
import { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { QuoteDTO } from '@gameContext/quote/application/dto/QuoteDTO'
import { actions } from '../actions/actions'

export class StoreMother {
  private static createDefaultLevels(): LevelsCollectionResponse {
    const { LEVELS_COUNT } = StoreMother.DEFAULT
    const levelsRaw = []
    for (let i = 0; i < LEVELS_COUNT; i++) {
      levelsRaw.push({
        id: 'level' + i,
        numberOfChips: 1,
        prize: { lives: 0, bonus: 0 },
      })
    }
    return toLevelsCollectionResponse(new LevelsCollection(levelsRaw))
  }

  // TODO: Search by 'test and domain' .
  private static createDefaultPlayer(): PlayerResponse {
    const { LIVES, SCORE, LEVEL, BONUS } = StoreMother.DEFAULT
    return {
      id: Uuid.random().valueOf(),
      lives: LIVES,
      score: SCORE,
      level: LEVEL,
      bonus: BONUS,
    }
  }

  private static createDefaultBuilder(): StoreBuilder {
    const builder = new StoreBuilder()
    builder.withLevels(StoreMother.createDefaultLevels())
    builder.withPlayer(StoreMother.createDefaultPlayer())
    return builder
  }

  private static mockStore(
    useStore: StoreMother.UseStore,
    state: StoreState
  ): void {
    const store = createStore(state)
    const mocked = (selector: Function) => selector(store.getState())
    useStore.mockImplementation(mocked)
    actions.registerInMemory(state.player, state.levels, state.quotes)
  }

  public static minimalStore(useStore: StoreMother.UseStore): void {
    const builder = StoreMother.createDefaultBuilder()
    StoreMother.mockStore(useStore, builder.currentState)
  }

  public static storeWithQuote(
    useStore: StoreMother.UseStore,
    quote: QuoteDTO
  ): void {
    const builder = StoreMother.createDefaultBuilder()
    builder.withQuote(quote)
    const { LIVES, SCORE, BONUS } = StoreMother.DEFAULT
    const player: PlayerResponse = {
      id: Uuid.random().valueOf(),
      lives: LIVES,
      score: SCORE,
      bonus: BONUS,
      level: 0,
    }
    builder.withPlayer(player)
    StoreMother.mockStore(useStore, builder.currentState)
  }

  public static storeMultipleLevels(
    useStore: StoreMother.UseStore,
    options: StoreMother.MultipleLevels
  ): void {
    const builder = new StoreBuilder()
    const levelsRaw = []
    for (let i = 0; i < options.levelsCount; i++) {
      levelsRaw.push({
        id: 'level' + i,
        numberOfChips: 1,
        prize: { lives: 0, bonus: 0 },
      })
    }
    const levels = toLevelsCollectionResponse(new LevelsCollection(levelsRaw))
    builder.withLevels(levels)
    const { LIVES, SCORE, BONUS } = StoreMother.DEFAULT
    const player = {
      id: Uuid.random().valueOf(),
      lives: LIVES,
      score: SCORE,
      bonus: BONUS,
      level: options.level,
    }
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
