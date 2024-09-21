import { Id } from './Id'
import { Uuid } from './Uuid'

type EntityId = Id | Uuid

export abstract class Entity {
  protected abstract readonly id: EntityId

  public equals(object: Entity): boolean {
    if (this === object) {
      return true
    }
    if (!(object instanceof this.constructor)) {
      return false
    }
    return this.id.equals(object.id)
  }

  public equalsById(id: EntityId): boolean {
    return this.id.equals(id)
  }
}
