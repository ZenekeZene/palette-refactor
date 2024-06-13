import { Life } from '@/domain/Life/Life'

export interface ILivesRepository {
	getLives(): Promise<Life>
}
