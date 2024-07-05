import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

class PlayerId extends Uuid {
  constructor() {
    super(Uuid.random().valueOf())
  }
}

export { PlayerId }
