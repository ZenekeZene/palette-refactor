import { Id } from './Id'
import { Uuid } from './Uuid'

type EntityId = Id | Uuid

export abstract class Entity {
  protected abstract readonly id: EntityId

  public getId(): EntityId {
    return this.id
  }

  public equals(Object?: Entity): boolean {
    if (Object === null || Object === undefined) {
      return false
    }
    if (this === Object) {
      return true
    }
    if (!(Object instanceof this.constructor)) {
      return false
    }
    return this.id.equals(Object.id)
  }
}
