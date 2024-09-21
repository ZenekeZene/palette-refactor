import { Uuid } from '@gameContext/shared/domain/utils/Uuid'

export class PlayerId extends Uuid {
  private constructor(id: string) {
    super(id)
  }

  static of(id: string) {
    return new PlayerId(Uuid.of(id).valueOf())
  }

  static random(): PlayerId {
    return new PlayerId(Uuid.randomValue())
  }
}
