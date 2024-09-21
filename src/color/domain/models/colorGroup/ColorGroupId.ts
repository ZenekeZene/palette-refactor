import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

export class ColorGroupId extends Uuid {
  constructor(id?: string) {
    super(id || Uuid.random())
  }
}
