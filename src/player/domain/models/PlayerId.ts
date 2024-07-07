import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

class PlayerId extends Uuid {
  constructor(id?: string) {
    const uuid = id || Uuid.random().valueOf()
    super(uuid)
  }
}

export { PlayerId }
