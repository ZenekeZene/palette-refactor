import { LevelDTO } from './LevelDTO'

class RegisterLevelsRequest {
  constructor(public readonly levels: LevelDTO[]) {
    this.levels = levels
  }
}

export { RegisterLevelsRequest }
