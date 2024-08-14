import { ColorGroup } from '../models/colorGroup/ColorGroup'

class ColorMixerFailed extends Error {
  readonly failedColorGroup: ColorGroup
  readonly correctColorGroup: ColorGroup

  constructor(failedColorGroup: ColorGroup, correctColorGroup: ColorGroup) {
    super(`Fail! Invalid mix: (${failedColorGroup.id.valueOf()})`)
    this.name = 'ColorMixerFailed'
    this.failedColorGroup = failedColorGroup
    this.correctColorGroup = correctColorGroup
  }
}

export { ColorMixerFailed }
