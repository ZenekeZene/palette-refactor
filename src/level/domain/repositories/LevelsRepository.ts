import type { LevelId } from '@gameContext/level/domain/models/level/LevelId'
import type { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

export interface LevelsRepository {
  save(levels: LevelsCollection): void
  findById(id: LevelId): LevelsCollection | undefined
}
