import { container } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { PassLevel } from '@gameContext/player/application/passLevel'
import { PassLevelRequest } from '@gameContext/player/application/dto/PassLevelRequest'
import { Player } from '../types/store'

const nextLevel = (player: Player): Player => {
  const passLevelRequest = new PassLevelRequest(player.id)
  const passLevel: PassLevel = container.resolve(Types.PassLevel)
  try {
    return passLevel.execute(passLevelRequest)
  } catch (error) {
    console.error('Failed to pass level:', error)
    return player
  }
}

export { nextLevel }
