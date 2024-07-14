import { injectable } from 'tsyringe'
import { PlayerLoaderRepository } from '@gameContext/player/domain/repositories/PlayerLoaderRepository'
import { Player } from '@gameContext/player/domain/Player'

@injectable()
class PlayerLoaderFromFileRepository implements PlayerLoaderRepository {
  async loadFromFile(): Promise<Player.Primitive> {
    try {
      const PlayerConfig = await import('@resources/Player.yaml')
      return PlayerConfig.default.initial as Player.Primitive
    } catch (error) {
      throw new Error('Error loading player session config:' + error)
    }
  }
}

export { PlayerLoaderFromFileRepository }
