import { LevelsCollection } from '@/domain/Level/LevelsCollection'

export interface ILevelsRepository {
  getLevels(): Promise<LevelsCollection>
}
