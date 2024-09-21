import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

export class PlayerId extends Uuid {
  constructor(id?: string) {
    const uuid = id || Uuid.random()
    super(uuid)
  }
}
