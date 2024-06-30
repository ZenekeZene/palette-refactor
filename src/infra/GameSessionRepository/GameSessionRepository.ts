import { IGameSessionRepository } from '@gameContext/domain/GameSession/IGameSessionRepository'
import { GameSession } from '@gameContext/domain/GameSession/GameSession'

class GameSessionRepository implements IGameSessionRepository {
  async getGameSession(): Promise<GameSession> {
    try {
      const GameSessionConfig = await import('@resources/GameSession.yaml')
      return GameSession.fromPrimitives(GameSessionConfig.default.initial)
    } catch (error) {
      throw new Error('Error loading game session config')
    }
  }
}

export { GameSessionRepository }
