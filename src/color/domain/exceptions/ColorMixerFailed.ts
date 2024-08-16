import { ColorGroupCollection } from '../ColorGroupCollection'
import { ColorGroup } from '../models/colorGroup/ColorGroup'

class ColorMixerFailed extends Error {
  readonly correctColorGroupId: string

  constructor(
    failedColorGroupCollection: ColorGroupCollection,
    correctColorGroup: ColorGroup,
  ) {
    super(`Fail! Invalid mix: (${failedColorGroupCollection.id.valueOf()})`)
    this.name = 'ColorMixerFailed'
    this.correctColorGroupId = correctColorGroup.id.valueOf()
  }
}

export { ColorMixerFailed }
