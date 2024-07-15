import { container } from "tsyringe"
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { PassLevelUseCase } from '@gameContext/player/application/passLevel.usecase'
import { PassLevelRequest } from '@gameContext/player/application/dto/PassLevelRequest'
import { Player } from '../store.types'

const nextLevel = async (player: Player): Promise<Player> => {
  const passLevelRequest = new PassLevelRequest(player.id)
  const passLevel: PassLevelUseCase = container.resolve(Types.PassLevel)
  try {
    return await passLevel.execute(passLevelRequest)
  } catch (error) {
    console.error('Failed to pass level:', error)
    return player
  }
}

export { nextLevel }