import { container } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { GenerateColorsRequest } from '@gameContext/color/application/dto/GenerateColorsRequest'
import type { GenerateColors } from '@gameContext/color/application/generateColors'
import type { Colors } from '../types/store'

export const generateColors = async (
  levelsCollectionId: string,
  levelId: string,
): Promise<Colors> => {
  const generateColorsRequest = new GenerateColorsRequest(
    levelsCollectionId,
    levelId,
  )
  const generateColors = container.resolve<GenerateColors>(Types.GenerateColors)
  try {
    return await generateColors.execute(generateColorsRequest)
  } catch (error) {
    console.error('Failed to generate colors:', error)
    return { items: [], levelId }
  }
}