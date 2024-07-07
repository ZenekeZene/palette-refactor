import { injectable } from 'tsyringe'
import { IPlayerLoaderRepository } from '@gameContext/player/domain/repositories/IPlayerLoaderRepository'
import { Player } from '@gameContext/player/domain/Player'

@injectable()
class PlayerLoaderRepository implements IPlayerLoaderRepository {
  async loadFromFile(): Promise<Player> {
    try {
      const PlayerConfig = await import('@resources/Player.yaml')
      return Player.fromPrimitives(PlayerConfig.default.initial)
    } catch (error) {
      throw new Error('Error loading player session config')
    }
  }
}

export { PlayerLoaderRepository }
