import { v4 as uuidv4, validate as validateUuid } from 'uuid'
import { ValueObject } from './ValueObject'

class Uuid extends ValueObject<string> {
  constructor(id: string) {
    super(id)
    this.validate(id)
  }

  get id() {
    return this.valueOf()
  }

  static random(): Uuid {
    return new Uuid(uuidv4())
  }

  validate(id: string): void {
    if (!validateUuid(id)) {
      throw new Error('Invalid id')
    }
  }

  toPrimitive() {
    return this.valueOf().toString()
  }

  equals(id: Uuid): boolean {
    return this.valueOf() === id.valueOf()
  }
}

export { Uuid }
