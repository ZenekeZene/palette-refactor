import { container } from 'tsyringe'
import { Types } from '@gameContext/shared/infrastructure/dependency-injection/identifiers'
import { GenerateColorsRequest } from '@gameContext/color/application/dto/GenerateColorsRequest'
import type { GenerateColors } from '@gameContext/color/application/generateColors'
import type { Colors } from '../../types/store'
import type { PlayerStoreState } from '../../slices/playerStore/playerStore.d'

export const generateColors = ({
  levels: { items, id: levelsCollectionId },
  player: { levelIndex },
}: PlayerStoreState): Colors => {
  const levelId = items[levelIndex].id
  if (!levelId) {
    throw new Error('Level not found')
  }
  const generateColorsRequest = new GenerateColorsRequest(
    levelsCollectionId,
    levelId,
  )
  const generateColors = container.resolve<GenerateColors>(Types.GenerateColors)
  try {
    return generateColors.execute(generateColorsRequest)
  } catch (error) {
    console.error('Failed to generate colors:', error)
    return { items: [], levelId, id: '' }
  }
}
