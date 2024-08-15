import { Response } from '@gameContext/shared/domain/utils/Response'
import { Level } from '../../domain/models/level/Level'

export interface GetLevelResponse extends Response {
  level: Level
}
