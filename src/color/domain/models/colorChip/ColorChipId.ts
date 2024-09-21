import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

export class ColorChipId extends Uuid {
  constructor(id?: string) {
    super(id || Uuid.random())
  }
}
