import { PlayerId } from '@gameContext/shared/domain/PlayerId'
import { ColorGroupCollectionId } from '../ColorGroupCollectionId'
import { LevelId } from '@gameContext/shared/domain/LevelId'

export class ColorGroupCollectionNotFound extends Error {
  private constructor(message: string) {
    super(message)
    this.name = 'ColorGroupNotFoundInCollection'
  }

  static ofColorGroupCollectionId(
    colorGroupCollectionId: ColorGroupCollectionId,
  ) {
    const message = `Color group collection with id ${colorGroupCollectionId.valueOf()} not found`
    return new ColorGroupCollectionNotFound(message)
  }

  static ofPlayerIdAndLevelId(playerId: PlayerId, levelId: LevelId) {
    const message = `Invalid color group in collection of player with id: (${playerId.valueOf()} and level with id: ${levelId.valueOf()})`
    return new ColorGroupCollectionNotFound(message)
  }
}
