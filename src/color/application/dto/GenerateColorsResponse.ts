import type { Response } from '@gameContext/shared/domain/utils/Response'

export interface GenerateColorsResponse extends Response {
  readonly items: {
    readonly id: string
    readonly resultColor: string
    readonly subtractedColor: string
    readonly swatchColor: string
  }[]
  levelId: string
}
