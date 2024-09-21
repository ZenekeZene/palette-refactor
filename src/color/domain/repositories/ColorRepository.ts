import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import { ColorGroupCollection } from '../ColorGroupCollection'
import { ColorGroupCollectionId } from '../ColorGroupCollectionId'
import { ColorGroupId } from '../models/colorGroup/ColorGroupId'
import { LevelId } from '@gameContext/shared/domain/LevelId'

export interface ColorRepository {
  save(colorGroupCollection: ColorGroupCollection): void
  findById(id: ColorGroupCollectionId): ColorGroupCollection | undefined
  findByColorGroupId(
    colorGroupId: ColorGroupId,
  ): ColorGroupCollection | undefined
  findByPlayerIdAndLevelId(
    playerId: PlayerId,
    levelId: LevelId,
  ): ColorGroupCollection | undefined
}
