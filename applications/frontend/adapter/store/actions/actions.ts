import { UseCase } from '@gameContext/shared/domain/utils/UseCase'
import { RegisterPlayerRequest } from '@gameContext/player/application/dto/RegisterPlayerRequest'
import { RegisterLevelsUseCase } from '@gameContext/level/application/registerLevels.usecase'
import { RegisterLevelsRequest } from '@gameContext/level/application/dto/RegisterLevelsRequest'
import { RegisterPlayerUseCase } from '@gameContext/player/application/registerPlayer.usecase'
import type { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import type { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse'
import type { StoreDependencies } from '../store.dependencies'
import { State, StoreAPI } from '../store.types'

const registerInMemory = (playerResponse: PlayerResponse, levelsResponse: LevelsCollectionResponse, dependencies: StoreDependencies):void => {
  const { playerRepository, levelsRepository } = dependencies
  const registerPlayerRequest = new RegisterPlayerRequest(playerResponse.id, playerResponse)
  const registerPlayer = new RegisterPlayerUseCase(playerRepository, registerPlayerRequest)

  const registerLevelsRequest = new RegisterLevelsRequest(levelsResponse)
  const registerLevels = new RegisterLevelsUseCase(levelsRepository, registerLevelsRequest)

  registerPlayer.execute()
  registerLevels.execute()
}

const nextLevel = async (apiStore: StoreAPI, usecase: UseCase<any>): Promise<void> => {
  apiStore.get().nextQuote()
  try {
    const player = await usecase.execute()
    apiStore.set((state: State) => ({ ...state, player }))
  } catch (error) {
    console.error('Failed to pass level:', error)
  }
}

export const actions = {
  nextLevel,
  registerInMemory,
}
