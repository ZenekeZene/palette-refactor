import type { Response } from '@gameContext/shared/domain/utils/Response'

export interface GenerateColorsItem {
  readonly id: string
  readonly resultColor: string
  readonly subtractedColor: string
  readonly swatchColor: string
}

export interface GenerateColorsResponse extends Response {
  readonly items: GenerateColorsItem[]
  levelId: string
}
