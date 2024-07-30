import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

export class ColorChipId extends Uuid {
  constructor(id?: string) {
    const uuid = id || Uuid.random().valueOf()
    super(uuid)
  }
}
