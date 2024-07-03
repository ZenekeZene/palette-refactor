import { LevelRawModel } from './Level'
import { LevelsCollection } from './LevelsCollection'

export interface ILevelsRepository {
  saveAllInMemory(levels: LevelsCollection): Promise<void>
  loadAll(): Promise<LevelRawModel[]>
}
