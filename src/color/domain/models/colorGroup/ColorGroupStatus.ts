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

export class ColorGroupStatus extends ValueObject<ColorGroupStatusType> {
  constructor(status: ColorGroupStatusType = ColorGroupStatusTypes.PENDING) {
    super(status)
  }

  private transitionTo(newStatus: ColorGroupStatusType): ColorGroupStatus {
    return new ColorGroupStatus(newStatus)
  }

  transitionToMixed(): ColorGroupStatus {
    if (this.value === ColorGroupStatusTypes.PENDING) {
      return this.transitionTo(ColorGroupStatusTypes.MIXED)
    } else {
      throw new TransitionError(this.value, 'mixed')
    }
  }

  transitionToFailed(): ColorGroupStatus {
    if (this.value === ColorGroupStatusTypes.PENDING) {
      return this.transitionTo(ColorGroupStatusTypes.ERROR)
    } else {
      throw new TransitionError(this.value, 'error')
    }
  }

  isMixed(): boolean {
    return this.value === ColorGroupStatusTypes.MIXED
  }

  toPrimitive(): string {
    return this.value.toString()
  }
}
