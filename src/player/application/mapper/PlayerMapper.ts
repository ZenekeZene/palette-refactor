import { Player } from '@gameContext/player/domain/Player'
import { PlayerResponse } from '@gameContext/player/application/dto/PlayerResponse'

export const toPlayerResponse = (player: Player): PlayerResponse => ({
  id: player.id.valueOf(),
  lives: player.lives.valueOf(),
  score: player.score.valueOf(),
  levelIndex: player.levelIndex.valueOf(),
  bonus: player.bonus.valueOf(),
})
