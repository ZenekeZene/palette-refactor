import { ColorChipPrimitive } from '@gameContext/color/domain/models/colorChip/ColorChip'
import type { Response } from '@gameContext/shared/domain/utils/Response'

export interface GenerateColorsItem {
  readonly id: string
  readonly resultColor: ColorChipPrimitive
  readonly subtractedColor: ColorChipPrimitive
  readonly swatchColor: ColorChipPrimitive
  status: string
  spy: string
}

export interface GenerateColorsResponse extends Response {
  readonly id: string
  readonly items: GenerateColorsItem[]
  readonly levelId: string
}
