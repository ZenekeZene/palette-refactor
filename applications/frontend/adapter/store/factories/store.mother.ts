import { Mock } from 'vitest'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse'
import { toLevelsCollectionResponse } from '@gameContext/level/application/mapper/LevelsCollectionMapper'
import type { StoreProps } from '@frontend/adapter/store/types/store'
import { createStore } from '@frontend/adapter/store/createStore'
import { StoreBuilder } from '@frontend/adapter/store/factories/store.builder'
import '@gameContext/shared/infrastructure/dependency-injection/container'
import { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { QuoteDTO } from '@gameContext/quote/application/dto/QuoteDTO'
import { actions } from '../actions/actions'

export class StoreMother {
  private static createDefaultLevels(): LevelsCollectionResponse {
    const { LEVELS_COUNT } = defaultState
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

  private static createDefaultPlayer(): PlayerResponse {
    const { LIVES, SCORE, LEVEL, BONUS } = defaultState
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

  private static mockStore(useStore: UseStore, state: StoreProps): void {
    const store = createStore(state)
    const mocked = (selector: (state: StoreProps) => void) =>
      selector(store.getState())
    useStore.mockImplementation(mocked)
    actions.registerInMemory(state.player, state.levels, state.quotes)
  }

  public static minimalStore(useStore: UseStore): void {
    const builder = StoreMother.createDefaultBuilder()
    StoreMother.mockStore(useStore, builder.currentState)
  }

  public static storeWithQuote(useStore: UseStore, quote: QuoteDTO): void {
    const builder = StoreMother.createDefaultBuilder()
    builder.withQuote(quote)
    const { LIVES, SCORE, BONUS } = defaultState
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
    useStore: UseStore,
    options: MultipleLevels,
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
    const { LIVES, SCORE, BONUS } = defaultState
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

export const defaultState = {
  LIVES: 10,
  LEVELS_COUNT: 1,
  LEVEL: 0,
  BONUS: 0,
  SCORE: 0,
}

type MultipleLevels = { level: number; levelsCount: number }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UseStore = Mock<any, any>
