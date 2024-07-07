import { Player } from '@gameContext/player/domain/Player'

export interface IPlayerLoaderRepository {
  loadFromFile(): Promise<Player>
}
