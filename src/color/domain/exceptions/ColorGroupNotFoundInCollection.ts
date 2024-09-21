import { ColorGroupId } from '../models/colorGroup/ColorGroupId'

export class ColorGroupNotFoundInCollection extends Error {
  constructor(colorGroupId: ColorGroupId) {
    super(`Invalid color group in collection: (${colorGroupId.valueOf()})`)
    this.name = 'ColorGroupNotFoundInCollection'
  }
}
