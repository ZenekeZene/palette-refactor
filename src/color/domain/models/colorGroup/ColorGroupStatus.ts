import { ValueObject } from '@gameContext/shared/domain/utils/ValueObject'

class TransitionError extends Error {
  constructor(from: string, to: string) {
    super(`Cannot transition from ${from} to ${to}`)
  }
}

export const ColorGroupStatusTypes = {
  PENDING: 'pending',
  MIXED: 'mixed',
  FAIL: 'failed',
} as const

export type ColorGroupStatusType =
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
      throw new TransitionError(this.value, ColorGroupStatusTypes.MIXED)
    }
  }

  transitionToFailed(): ColorGroupStatus {
    if (this.value === ColorGroupStatusTypes.PENDING) {
      return this.transitionTo(ColorGroupStatusTypes.FAIL)
    } else {
      throw new TransitionError(this.value, ColorGroupStatusTypes.FAIL)
    }
  }

  isMixed(): boolean {
    return this.value === ColorGroupStatusTypes.MIXED
  }

  toPrimitive(): string {
    return this.value.toString()
  }
}
