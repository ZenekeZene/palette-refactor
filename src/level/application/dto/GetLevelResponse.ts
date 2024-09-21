import { Response } from '@gameContext/shared/domain/utils/Response'
import { Level } from '../../domain/models/level/Level'

// TODO: Antipattern, the returned property has to be a primitive
export interface GetLevelResponse extends Response {
  level: Level
}
