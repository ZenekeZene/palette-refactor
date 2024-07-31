import { ColorGroup } from '../models/colorGroup/ColorGroup'
import { ColorGroupId } from '../models/colorGroup/ColorGroupId'
import { Color } from '../models/Color'
import { ColorChip } from '../models/colorChip/ColorChip'
import { ColorType } from '../models/ColorType'
import { ColorMixer } from './ColorMixer'

export class ColorGenerator {
  constructor(readonly numberOfColors: number) {}

  generate(): ColorGroup[] {
    const colorGroups: ColorGroup[] = []
    for (let i = 0; i < this.numberOfColors; i++) {
      // (1)
      const subtractedColor = new ColorChip(
        Color.random(),
        new ColorType(ColorType.types.SUSTRACTED), // (2)
      )
      const swatchColor = new ColorChip(
        Color.random(),
        new ColorType(ColorType.types.SWATCH),
      )
      const mixedColor = new ColorMixer(
        subtractedColor.value,
        swatchColor.value,
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
