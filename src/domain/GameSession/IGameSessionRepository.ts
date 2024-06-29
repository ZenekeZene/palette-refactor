import { GameSession } from '@gameContext/domain/GameSession/GameSession'

export interface IGameSessionRepository {
  getGameSession(): Promise<GameSession>
}
