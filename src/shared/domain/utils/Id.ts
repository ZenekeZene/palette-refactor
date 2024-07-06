import { ValueObject } from './ValueObject'

class Id extends ValueObject<string> {
  constructor(id: string) {
    super(id)
    this.validate(id)
  }

  get id() {
    return this.valueOf()
  }

  validate(id: string): void {
    if (id.length <= 0) {
      throw new Error('Invalid id')
    }
  }

  toPrimitive() {
    return this.valueOf().toString()
  }

  equals(id: Id): boolean {
    return this.valueOf() === id.valueOf()
  }
}

export { Id }
