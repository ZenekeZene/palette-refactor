import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

export class ColorGroupCollectionId extends Uuid {
  constructor(id?: string) {
    super(id || Uuid.randomValue())
  }
}
