import { Life } from '@/domain/Life/Life'
import { LivesRepository } from '@/infra/LivesRepository/LivesRepository'

interface UseCase<T> {
	execute: () => Promise<T>;
}

const GetLivesUseCase = (): UseCase<Life> => ({
	execute: async (): Promise<Life> => {
		const repository = new LivesRepository()
		const initialLives = await repository.getLives()
		return initialLives
	}
})

export { GetLivesUseCase }
