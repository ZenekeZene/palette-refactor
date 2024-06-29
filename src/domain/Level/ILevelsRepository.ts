import { LevelsCollection } from '@gameContext/domain/Level/LevelsCollection'

export interface ILevelsRepository {
  getLevels(): Promise<LevelsCollection>
}
