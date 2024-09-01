import { container } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { GenerateColorsRequest } from '@gameContext/color/application/dto/GenerateColorsRequest'
import { GetLevelRequest } from '@gameContext/level/application/dto/GetLevelRequest'
import type { GenerateColors } from '@gameContext/color/application/generateColors'
import { GetLevel } from '@gameContext/level/application/getLevel'
import type { Colors } from '../../types/store'
import type { PlayerStoreState } from '../../slices/playerStore/playerStore.d'

const getLevelId = (levelsCollectionId: string, levelIndex: number) => {
  const getLevelRequest = new GetLevelRequest(levelsCollectionId, levelIndex)
  const getLevel = container.resolve<GetLevel>(Types.GetLevel)
  const { level } = getLevel.execute(getLevelRequest)
  return level.id.valueOf()
}

export const generateColors = ({
  levels: { id: levelsCollectionId },
  player: { levelIndex, ...player },
}: PlayerStoreState): Colors => {
  const levelId = getLevelId(levelsCollectionId, levelIndex)
  const generateColorsRequest = new GenerateColorsRequest(
    levelsCollectionId,
    levelId,
    player.id,
  )
  const generateColors = container.resolve<GenerateColors>(Types.GenerateColors)
  try {
    return generateColors.execute(generateColorsRequest)
  } catch (error) {
    console.error('Failed to generate colors:', error)
    return { items: [], levelId, id: '' }
  }
}
