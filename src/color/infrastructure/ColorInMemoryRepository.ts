import { injectable } from 'tsyringe'
import type { ColorGroupCollection } from '../domain/ColorGroupCollection'
import type { ColorGroupCollectionId } from '../domain/ColorGroupCollectionId'
import type { ColorRepository } from '../domain/repositories/ColorRepository'
import { ColorGroupId } from '../domain/models/colorGroup/ColorGroupId'
import { LevelId } from '@gameContext/shared/domain/LevelId'
import { PlayerId } from '@gameContext/shared/domain/PlayerId'

@injectable()
export class ColorInMemoryRepository implements ColorRepository {
  private colorGroupCollections: Map<string, ColorGroupCollection> = new Map()

  private transformToArray(): [string, ColorGroupCollection][] {
    return Array.from(this.colorGroupCollections)
  }

  private find(
    callback: (colorGroupCollection: ColorGroupCollection) => void,
  ): ColorGroupCollection | undefined {
    const entries = this.transformToArray()
    return entries.findLast(([, colorGroupCollection]) =>
      callback(colorGroupCollection),
    )?.[1]
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
    return this.find((colorGroupCollection) =>
      colorGroupCollection.items.some((colorGroup) =>
        colorGroup.id.equals(colorGroupId),
      ),
    )
  }

  findByPlayerIdAndLevelId(
    playerId: PlayerId,
    levelId: LevelId,
  ): ColorGroupCollection | undefined {
    return this.find(
      (colorGroupCollection) =>
        colorGroupCollection.playerId.equals(playerId) &&
        colorGroupCollection.levelId.equals(levelId),
    )
  }
}
