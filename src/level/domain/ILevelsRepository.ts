import { Level } from './level/Level'
import { LevelId } from './level/LevelId'
import type { LevelsCollection } from './LevelsCollection'

export interface ILevelsRepository {
  saveAllInMemory(levels: LevelsCollection): Promise<void>
  searchById(id: LevelId): Promise<Level | undefined>
}
