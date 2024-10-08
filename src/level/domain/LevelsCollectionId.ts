import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

export class LevelsCollectionId extends Uuid {
  constructor(id?: string) {
    const uuid = id || Uuid.randomValue()
    super(uuid)
  }
}
