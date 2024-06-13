import { ILivesRepository } from '@/domain/Life/ILivesRepository'
import { Life } from '@/domain/Life/Life'

class LivesRepository implements ILivesRepository {
	async getLives(): Promise<Life> {
		try {
			const LivesConfig = await import('/config/Lives.yaml')
			return LivesConfig.default.initial
		} catch (error) {
			throw new Error('Error loading lives config')
		}
	}
}

export { LivesRepository }
