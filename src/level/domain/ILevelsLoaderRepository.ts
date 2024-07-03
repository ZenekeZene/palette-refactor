import type { LevelRawModel } from "./Level"

export interface ILevelsLoaderRepository {
  loadAllFromFile(): Promise<LevelRawModel[]>
}
