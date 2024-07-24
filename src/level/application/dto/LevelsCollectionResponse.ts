import type { Response } from '@gameContext/shared/domain/utils/Response'
import { LevelDTO } from './LevelDTO'

export interface LevelsCollectionResponse extends Response {
  id: string
  items: LevelDTO[]
  totalLevels: number
}
