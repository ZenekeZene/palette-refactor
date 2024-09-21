import type { Level } from '../../domain/models/level/Level'
import type { GetLevelResponse } from '../dto/GetLevelResponse'

export const toGetLevelResponse = (level: Level): GetLevelResponse => {
  return {
    level: level.toPrimitive(),
  }
}
