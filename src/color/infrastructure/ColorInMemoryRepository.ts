import { injectable } from 'tsyringe'
import type { ColorGroupCollection } from '../domain/ColorGroupCollection'
import type { ColorGroupCollectionId } from '../domain/ColorGroupCollectionId'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import { ColorGroupId } from '../domain/models/colorGroup/ColorGroupId'

@injectable()
export class ColorInMemoryRepository implements ColorRepository {
  private colorGroupCollections: Map<string, ColorGroupCollection> = new Map()

  private transformToArray(): [string, ColorGroupCollection][] {
    return Array.from(this.colorGroupCollections)
  }

  save(colorGroupCollection: ColorGroupCollection): void {
    this.colorGroupCollections.set(
      colorGroupCollection.id.valueOf(),
      colorGroupCollection,
    )
  }

  findById(id: ColorGroupCollectionId): ColorGroupCollection | undefined {
    return this.colorGroupCollections.get(id.valueOf())
  }

  findByColorGroupId(
    colorGroupId: ColorGroupId,
  ): ColorGroupCollection | undefined {
    const entries = this.transformToArray()
    const colorGroupCollection = entries.find(([, colorGroupCollection]) =>
      colorGroupCollection.items.some((colorGroup) =>
        colorGroup.id.equals(colorGroupId),
      ),
    )?.[1]
    return colorGroupCollection
  }
}
