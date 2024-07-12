import { injectable } from 'tsyringe'
import { IPlayerLoaderRepository } from '@gameContext/player/domain/repositories/IPlayerLoaderRepository'
import { Player } from '@gameContext/player/domain/Player'

@injectable()
class PlayerLoaderFromFileRepository implements IPlayerLoaderRepository {
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
