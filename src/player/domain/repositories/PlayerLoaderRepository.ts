import { Player } from '@gameContext/player/domain/Player'

export interface PlayerLoaderRepository {
  loadFromFile(): Promise<Player.Primitive>
}
