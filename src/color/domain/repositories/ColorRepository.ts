import { ColorGroupCollection } from '../ColorGroupCollection'
import { ColorGroupCollectionId } from '../ColorGroupCollectionId'

export interface ColorRepository {
  save(colorGroupCollection: ColorGroupCollection): void
  findById(id: ColorGroupCollectionId): ColorGroupCollection | undefined
}
