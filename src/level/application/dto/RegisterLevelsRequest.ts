import type { Request } from '@gameContext/shared/domain/utils/Request'
import { LevelDTO } from './LevelDTO'

class RegisterLevelsRequest implements Request {
  constructor(
    public readonly levelsId: string,
    public readonly levels: LevelDTO[],
  ) {}
}

export { RegisterLevelsRequest }
