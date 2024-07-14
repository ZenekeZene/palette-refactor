import { container } from "tsyringe"
import { Types } from '@gameContext/shared/infrastructure/identifiers'
import { PassLevelUseCase } from '@gameContext/player/application/passLevel.usecase'
import { PassLevelRequest } from '@gameContext/player/application/dto/PassLevelRequest'
import { RegisterPlayerRequest } from '@gameContext/player/application/dto/RegisterPlayerRequest'
import { RegisterLevelsRequest } from '@gameContext/level/application/dto/RegisterLevelsRequest'
import type { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'
import type { LevelsCollectionResponse } from '@gameContext/level/application/dto/LevelsCollectionResponse'
import type { RegisterLevelsUseCase } from '@gameContext/level/application/registerLevels.usecase'
import type { RegisterPlayerUseCase } from "@gameContext/player/application/registerPlayer.usecase"

const registerInMemory = (playerResponse: PlayerResponse, levelsResponse: LevelsCollectionResponse):void => {
  const registerPlayerRequest = new RegisterPlayerRequest(playerResponse.id, playerResponse)
  const registerPlayer: RegisterPlayerUseCase = container.resolve(Types.RegisterPlayer)

  const registerLevelsRequest = new RegisterLevelsRequest(levelsResponse)
  const registerLevels: RegisterLevelsUseCase = container.resolve(Types.RegisterLevels)

  registerPlayer.execute(registerPlayerRequest)
  registerLevels.execute(registerLevelsRequest)
}

const nextLevel = async (player: PlayerResponse): Promise<PlayerResponse> => {
  const passLevelRequest = new PassLevelRequest(player.id)
  const passLevel: PassLevelUseCase = container.resolve(Types.PassLevel)
  try {
    return await passLevel.execute(passLevelRequest)
  } catch (error) {
    console.error('Failed to pass level:', error)
    return player
  }
}

export const actions = {
  nextLevel,
  registerInMemory,
}
