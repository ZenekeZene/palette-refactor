import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

export interface ILevelsRepository {
  getLevels(): Promise<LevelsCollection>
}
