import { container } from 'tsyringe'
import { Types } from '@frontend/infrastructure/dependency-injection/identifiers'
import { GenerateColorsRequest } from '@gameContext/color/application/dto/GenerateColorsRequest'
import { GetLevelRequest } from '@gameContext/level/application/dto/GetLevelRequest'
import type { GenerateColors } from '@gameContext/color/application/generateColors'
import { GetLevel } from '@gameContext/level/application/getLevel'
import type { Colors } from '../../types/store'
import type { PlayerStoreState } from '../../slices/playerStore/playerStore.d'

const getLevel = (levelsCollectionId: string, levelIndex: number) => {
  const getLevelRequest = new GetLevelRequest(levelsCollectionId, levelIndex)
  const getLevel = container.resolve<GetLevel>(Types.GetLevel)
  return getLevel.execute(getLevelRequest).level
}

export const generateColors = ({
  levels: { id: levelsCollectionId },
  player: { levelIndex, ...player },
}: PlayerStoreState): Colors => {
  const level = getLevel(levelsCollectionId, levelIndex)
  const playerId = player.id
  const levelId = level.id
  // TODO: primitives, not models
  const generateColorsRequest = new GenerateColorsRequest(
    level.getNumberOfChips().valueOf(),
    levelId.valueOf(),
    playerId.valueOf(),
  )
  const generateColors = container.resolve<GenerateColors>(Types.GenerateColors)
  return generateColors.execute(generateColorsRequest)
}
