import { v4 as uuidv4, validate as validateUuid } from 'uuid'
import { ValueObject } from './ValueObject'

class Id extends ValueObject<string> {
  constructor(id: string) {
    super(id)
    this.validate(id)
  }

  get id() {
    return this.valueOf()
  }

  static random(): Id {
    return new Id(uuidv4())
  }

  validate(id: string): void {
    if (!validateUuid(id)) {
      throw new Error('Invalid id')
    }
  }

  toPrimitive() {
    return this.valueOf().toString()
  }
}

export { Id }
