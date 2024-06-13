import { Level } from '@/domain/Level/Level'

export interface ILevelsRepository {
	getLevels(): Promise<Level[]>
}

