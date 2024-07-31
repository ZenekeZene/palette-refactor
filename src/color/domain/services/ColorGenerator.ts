import { ColorGroup } from '../models/colorGroup/ColorGroup'
import { ColorGroupId } from '../models/colorGroup/ColorGroupId'
import { Color } from '../models/Color'
import { ColorChip } from '../models/ColorChip'
import { ColorType, ColorTypeOf } from '../models/ColorType'
import { ColorMixer } from './ColorMixer'

export class ColorGenerator {
  constructor(readonly numberOfColors: number) {}

  private generateRandomColor(type: ColorTypeOf): ColorChip {
    return new ColorChip(Color.random(), new ColorType(type))
  }

  generate(): ColorGroup[] {
    const colorGroups: ColorGroup[] = []
    for (let i = 0; i < this.numberOfColors; i++) {
      // (1)
      const subtractedColor = this.generateRandomColor(
        ColorType.types.SUBTRACTED,
      ) // (2)
      const swatchColor = this.generateRandomColor(ColorType.types.SWATCH)
      const mixedColor = new ColorMixer(
        subtractedColor.valueOf(),
        swatchColor.valueOf(),
      ).mix()
      const resultColor = new ColorChip(
        mixedColor,
        new ColorType(ColorType.types.RESULT),
      )

      const colorGroup = new ColorGroup({
        id: new ColorGroupId(),
        resultColor,
        subtractedColor,
        swatchColor,
      })
      colorGroups.push(colorGroup)
    }
    return colorGroups
  }
}

// (1): TODO: create a color of reference and calculate with certain algorithm the other colors?
//      Or generate two random colors and calculate the result to get by the user?
// (2): TODO: change naming (?)
