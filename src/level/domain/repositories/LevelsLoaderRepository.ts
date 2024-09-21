import type { LevelPrimitive } from '@gameContext/level/domain/models/level/Level'

export interface LevelsLoaderRepository {
  loadAllFromFile(): Promise<LevelPrimitive[]>
}
