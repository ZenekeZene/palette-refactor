import type { LevelRawModel } from "./level/Level"

export interface ILevelsLoaderRepository {
  loadAllFromFile(): Promise<LevelRawModel[]>
}
