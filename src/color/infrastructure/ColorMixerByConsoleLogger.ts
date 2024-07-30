import { injectable } from 'tsyringe'
import { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import { Color } from '../domain/models/Color'
import { ColorChip } from '../domain/models/colorChip/ColorChip'
import { ColorGroup } from '../domain/ColorGroup'

const contrastPercentage = 50

@injectable()
export class ColorMixerByConsoleLogger implements ColorMixerLogger {
  private message(color: Color, text: string) {
    const contrastColor =
      color.lightness() > contrastPercentage ? 'black' : 'white'
    console.log(
      `%c ${text}: ${color.valueOf()}`,
      `background: ${color.valueOf()};
       color: ${contrastColor}
      `,
    )
  }

  log(
    color1: Color | ColorChip,
    color2: Color | ColorChip,
    mixedColor: Color | ColorChip,
  ) {
    console.group('MixColor:')
    this.message(color1 instanceof ColorChip ? color1.value : color1, 'Color1')
    this.message(color2 instanceof ColorChip ? color2.value : color2, 'Color2')
    this.message(
      mixedColor instanceof ColorChip ? mixedColor.value : mixedColor,
      'MixedColor',
    )
    console.groupEnd()
  }

  logGroup(colorGroup: ColorGroup) {
    console.group('ColorGroup mixed')
    this.message(colorGroup.swatchColor.value, 'SwatchColor')
    this.message(colorGroup.subtractedColor.value, 'SubtractedColor')
    this.message(colorGroup.resultColor.value, 'ResultColor')
    console.log('Status:', colorGroup.isMixed() ? 'Mixed' : 'Pending')
    console.groupEnd()
  }
}
