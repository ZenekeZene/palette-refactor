import type { LevelRawModel } from "@gameContext/level/domain/models/level/Level"

export interface LevelsLoaderRepository {
  loadAllFromFile(): Promise<LevelRawModel[]>
}
