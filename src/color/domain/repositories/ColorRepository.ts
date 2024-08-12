import { ColorGroupCollection } from '../ColorGroupCollection'
import { ColorGroupCollectionId } from '../ColorGroupCollectionId'
import { ColorGroupId } from '../models/colorGroup/ColorGroupId'

export interface ColorRepository {
  save(colorGroupCollection: ColorGroupCollection): void
  findById(id: ColorGroupCollectionId): ColorGroupCollection | undefined
  findByColorGroupId(
    colorGroupId: ColorGroupId,
  ): ColorGroupCollection | undefined
}
