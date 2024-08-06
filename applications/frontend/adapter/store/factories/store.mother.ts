import { Mock } from 'vitest'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'
import { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse'
import { toLevelsCollectionResponse } from '@gameContext/level/application/mapper/LevelsCollectionMapper'
import type { Store } from '@frontend/adapter/store/types/store'
import { createStore } from '@frontend/adapter/store/createStore'
import { StoreBuilder } from '@frontend/adapter/store/factories/store.builder'
import {
  PlayerResponse,
  PlayerResponseProps,
} from '@gameContext/player/application/dto/PlayerResponse'
import { Uuid } from '@gameContext/shared/domain/utils/Uuid'
import { QuoteDTO } from '@gameContext/quote/application/dto/QuoteDTO'
import { actions } from '../actions/actions'

export class StoreMother {
  private static readonly defaultPlayer: PlayerResponseProps = {
    lives: 10,
    levelIndex: 0,
    bonus: 0,
    score: 0,
  }

  private static createDefaultLevels(): LevelsCollectionResponse {
    const levelsRaw = []
    const defaultLevelsCount = 1
    for (let i = 0; i < defaultLevelsCount; i++) {
      levelsRaw.push({
        id: 'level' + i,
        numberOfChips: 1,
        prize: { lives: 0, bonus: 0 },
      })
    }
    return toLevelsCollectionResponse(new LevelsCollection(levelsRaw))
  }

  private static createDefaultPlayer(): PlayerResponse {
    return {
      id: Uuid.random().valueOf(),
      ...StoreMother.defaultPlayer,
    }
  }

  private static createDefaultBuilder(): StoreBuilder {
    const builder = new StoreBuilder()
    builder.withLevels(StoreMother.createDefaultLevels())
    builder.withPlayer(StoreMother.createDefaultPlayer())
    return builder
  }

  private static mockStore(useStore: UseStore, state: Store): void {
    const store = createStore(state)
    const mocked = (selector: (state: Store) => void) =>
      selector(store.getState())
    useStore.mockImplementation(mocked)
    actions.registerInMemory(state.player, state.levels, state.quotes)
  }

  public static minimalStore(useStore: UseStore): void {
    const builder = StoreMother.createDefaultBuilder()
    StoreMother.mockStore(useStore, builder.currentState)
  }

  public static storeWithPlayerProps(
    useStore: UseStore,
    props: Partial<PlayerResponseProps>,
  ): void {
    const builder = StoreMother.createDefaultBuilder()
    const defaultPlayer = this.createDefaultPlayer()
    builder.withPlayer({ ...defaultPlayer, ...props })
    StoreMother.mockStore(useStore, builder.currentState)
  }

  public static storeWithQuote(useStore: UseStore, quote: QuoteDTO): void {
    const builder = StoreMother.createDefaultBuilder()
    builder.withQuote(quote)
    StoreMother.mockStore(useStore, builder.currentState)
  }

  public static storeMultipleLevels(
    useStore: UseStore,
    options: MultipleLevels,
  ): void {
    const builder = StoreMother.createDefaultBuilder()
    const levelsRaw = []
    for (let i = 0; i < options.levelsCount; i++) {
      levelsRaw.push({
        id: 'level' + i,
        numberOfChips: i,
        prize: { lives: 0, bonus: 0 },
      })
    }
    const levels = toLevelsCollectionResponse(new LevelsCollection(levelsRaw))
    builder.withLevels(levels)
    const defaultPlayer = this.createDefaultPlayer()
    const player: PlayerResponse = {
      ...defaultPlayer,
      levelIndex: options.levelIndex,
    }
    builder.withPlayer(player)
    StoreMother.mockStore(useStore, builder.currentState)
  }
}

type MultipleLevels = { levelIndex: number; levelsCount: number }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UseStore = Mock<any, any>
