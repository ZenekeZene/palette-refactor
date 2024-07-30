import { ValueObject } from '@gameContext/shared/domain/utils/ValueObject'

class TransitionError extends Error {
  constructor(from: string, to: string) {
    super(`Cannot transition from ${from} to ${to}`)
  }
}

const ColorGroupStatusTypes = {
  PENDING: 'pending',
  MIXED: 'mixed',
  ERROR: 'error',
} as const

type ColorGroupStatusType =
  (typeof ColorGroupStatusTypes)[keyof typeof ColorGroupStatusTypes]

export class ColorGroupStatus extends ValueObject<string> {
  private status: ColorGroupStatusType

  constructor() {
    const initialStatus = ColorGroupStatusTypes.PENDING
    super(initialStatus)
    this.status = initialStatus
  }

  private transitionTo(newStatus: ColorGroupStatusType): void {
    this.status = newStatus
  }

  transitionToMixed(): void {
    if (this.status === ColorGroupStatusTypes.PENDING) {
      this.transitionTo(ColorGroupStatusTypes.MIXED)
    } else {
      throw new TransitionError(this.status, 'mixed')
    }
  }

  transitionToError(): void {
    if (this.status === ColorGroupStatusTypes.PENDING) {
      this.transitionTo(ColorGroupStatusTypes.ERROR)
    } else {
      throw new TransitionError(this.status, 'error')
    }
  }

  isMixed() {
    return this.status === ColorGroupStatusTypes.MIXED
  }

  toPrimitive(): string {
    return this.status.toString()
  }
}
