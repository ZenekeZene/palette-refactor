import type { LevelRawModel } from "@gameContext/level/domain/models/level/Level"

export interface ILevelsLoaderRepository {
  loadAllFromFile(): Promise<LevelRawModel[]>
}
