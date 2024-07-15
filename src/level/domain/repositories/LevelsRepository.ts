import type { Level } from '@gameContext/level/domain/models/level/Level'
import type { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

export interface LevelsRepository {
  saveInMemory(levels: LevelsCollection): Promise<void>
  searchById(id: LevelId): Promise<Level | undefined>
}
