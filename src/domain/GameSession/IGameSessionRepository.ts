import { GameSession } from '@/domain/GameSession/GameSession'

export interface IGameSessionRepository {
  getGameSession(): Promise<GameSession>
}
