import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

export class ColorGroupId extends Uuid {
  constructor(id?: string) {
    const uuid = id || Uuid.random().valueOf()
    super(uuid)
  }
}
