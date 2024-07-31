import { injectable } from 'tsyringe'
import type { ColorGroupCollection } from '../domain/ColorGroupCollection'
import type { ColorGroupCollectionId } from '../domain/ColorGroupCollectionId'
import type { ColorRepository } from '../domain/repositories/ColorRepository'

@injectable()
export class ColorInMemoryRepository implements ColorRepository {
  private colorGroupCollections: Map<string, ColorGroupCollection> = new Map()

  save(colorGroupCollection: ColorGroupCollection): void {
    this.colorGroupCollections.set(
      colorGroupCollection.id.valueOf(),
      colorGroupCollection,
    )
    console.log('ColorGroupCollection saved:', colorGroupCollection)
  }

  findById(id: ColorGroupCollectionId): ColorGroupCollection | undefined {
    return this.colorGroupCollections.get(id.valueOf())
  }
}
