import { ColorGroup } from '../models/colorGroup/ColorGroup'
import { ColorGroupId } from '../models/colorGroup/ColorGroupId'
import { Color } from '../models/Color'
import { ColorChip } from '../models/colorChip/ColorChip'
import {
  ColorChipType,
  ColorChipTypeOf,
} from '../models/colorChip/ColorChipType'
import { ColorMixer } from './ColorMixer'

export class ColorGenerator {
  constructor(readonly numberOfColors: number) {}

  private generateRandomColor(type: ColorChipTypeOf): ColorChip {
    return ColorChip.fromTypeAndColor(type, Color.random())
  }

  generate(): ColorGroup[] {
    const colorGroups: ColorGroup[] = []
    for (let i = 0; i < this.numberOfColors; i++) {
      // (1)
      const subtractedColor = this.generateRandomColor(
        ColorChipType.types.SUBTRACTED,
      ) // (2)
      const swatchColor = this.generateRandomColor(ColorChipType.types.SWATCH)
      const resultColor = ColorChip.fromResultColor(
        new ColorMixer(subtractedColor, swatchColor).mix(),
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
