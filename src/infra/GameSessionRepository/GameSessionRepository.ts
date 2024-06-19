import { IGameSessionRepository } from '@/domain/GameSession/IGameSessionRepository'
import { GameSession } from '@/domain/GameSession/GameSession'

class GameSessionRepository implements IGameSessionRepository {
	async getGameSession(): Promise<GameSession> {
		try {
			const GameSessionConfig = await import('/config/GameSession.yaml')
			return GameSession.fromPrimitives(GameSessionConfig.default.initial)
		} catch (error) {
			throw new Error('Error loading game session config')
		}
	}
}

export { GameSessionRepository }
