import { v4 as uuidv4, validate as validateUuid } from 'uuid'
import { ValueObject } from './ValueObject'

export class Uuid extends ValueObject<string> {
  constructor(id: string) {
    super(id)
    this.validate(id)
  }

  static randomValue(): string {
    return new Uuid(uuidv4()).valueOf()
  }

  static random(): Uuid {
    return new Uuid(uuidv4())
  }

  static of(id: string): Uuid {
    return new Uuid(id)
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
