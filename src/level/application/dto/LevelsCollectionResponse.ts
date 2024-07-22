import { LevelDTO } from './LevelDTO'

export interface LevelsCollectionResponse {
  id: string
  items: LevelDTO[]
  totalLevels: number
}
