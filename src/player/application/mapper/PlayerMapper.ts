import { Player } from '@gameContext/player/domain/Player'
import { PlayerResponse } from '@gameContext/player/application/dto/player.dto'

export const toPlayerResponseDTO = (player: Player): PlayerResponse => ({
  id: player.getId().valueOf(),
  lives: player.lives.valueOf(),
  score: player.score.valueOf(),
  level: player.level.valueOf(),
  bonus: player.bonus.valueOf(),
})
