import { ColorGroupCollection } from '@gameContext/color/domain/ColorGroupCollection'
import { GenerateColorsResponse } from '../dto/GenerateColorsResponse'

export const toGenerateColorsResponse = (
  colorGroups: ColorGroupCollection,
): GenerateColorsResponse => ({
  colorGroups: colorGroups.toPrimitives(),
})
