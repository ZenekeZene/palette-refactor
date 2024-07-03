import type { LevelsCollection } from './LevelsCollection'

export interface ILevelsRepository {
  saveAllInMemory(levels: LevelsCollection): Promise<void>
}
