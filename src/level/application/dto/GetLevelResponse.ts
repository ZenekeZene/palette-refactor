import { Response } from '@gameContext/shared/domain/utils/Response'
import { LevelPrimitive } from '../../domain/models/level/Level'

export interface GetLevelResponse extends Response {
  level: LevelPrimitive
}
