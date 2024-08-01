import { injectable } from 'tsyringe'
import { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import { Color } from '../domain/models/Color'
import { ColorChip } from '../domain/models/ColorChip'
import { ColorGroup } from '../domain/models/colorGroup/ColorGroup'

const contrastPercentage = 50

@injectable()
export class ColorMixerByConsoleLogger implements ColorMixerLogger {
  private beginGroup(groupName: string) {
    console.group(groupName)
  }

  private endGroup() {
    console.groupEnd()
  }

  private messageColor(color: Color, text: string) {
    const contrastColor =
      color.lightness() > contrastPercentage ? 'black' : 'white'
    console.log(
      `%c ${text}: ${color.valueOf()}`,
      `background: ${color.valueOf()};
       color: ${contrastColor}
      `,
    )
  }

  private message(message: string) {
    console.log(message)
  }

  log(
    color1: Color | ColorChip,
    color2: Color | ColorChip,
    mixedColor: Color | ColorChip,
  ) {
    this.beginGroup('MixColor:')
    this.messageColor(
      color1 instanceof ColorChip ? color1.valueOf() : color1,
      'Color1',
    )
    this.messageColor(
      color2 instanceof ColorChip ? color2.valueOf() : color2,
      'Color2',
    )
    this.messageColor(
      mixedColor instanceof ColorChip ? mixedColor.valueOf() : mixedColor,
      'MixedColor',
    )
    this.endGroup()
  }

  logGroup(colorGroup: ColorGroup) {
    this.beginGroup('ColorGroup mixed')
    const { resultColor, subtractedColor, swatchColor } = colorGroup

    this.messageColor(swatchColor.valueOf(), 'SwatchColor')
    this.messageColor(subtractedColor.valueOf(), 'SubtractedColor')
    this.messageColor(resultColor.valueOf(), 'ResultColor')

    this.message('Status:' + colorGroup.isMixed() ? 'Mixed' : 'Pending')
    this.endGroup()
  }
}
