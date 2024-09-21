import { v4 as uuidv4, validate as validateUuid } from 'uuid'
import { ValueObject } from './ValueObject'

export class Uuid extends ValueObject<string> {
  constructor(id: string) {
    super(id)
    this.validate(id)
  }

  static random(): string {
    return new Uuid(uuidv4()).valueOf()
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
