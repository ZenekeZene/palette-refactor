import { ColorGroupCollection } from '@gameContext/color/domain/ColorGroupCollection'
import { GenerateColorsResponse } from '../dto/GenerateColorsResponse'

export const toGenerateColorsResponse = (
  colorGroupCollection: ColorGroupCollection,
): GenerateColorsResponse => colorGroupCollection.toPrimitive()
