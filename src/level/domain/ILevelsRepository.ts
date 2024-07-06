import type { Level } from './level/Level'
import type { LevelId } from './level/LevelId'
import type { LevelsCollection } from './LevelsCollection'

export interface ILevelsRepository {
  saveAllInMemory(levels: LevelsCollection): Promise<void>
  searchById(id: LevelId): Promise<Level | undefined>
}
