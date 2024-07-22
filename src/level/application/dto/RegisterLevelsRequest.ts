import { LevelDTO } from './LevelDTO'

class RegisterLevelsRequest {
  constructor(
    public readonly levelsId: string,
    public readonly levels: LevelDTO[]
  ) {}
}

export { RegisterLevelsRequest }
