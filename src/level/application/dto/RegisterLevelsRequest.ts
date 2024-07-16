import { LevelDTO } from './LevelDTO'

class RegisterLevelsRequest {
  constructor(public readonly levels: LevelDTO[]) {}
}

export { RegisterLevelsRequest }
