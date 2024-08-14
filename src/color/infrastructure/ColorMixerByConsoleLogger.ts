import { injectable } from 'tsyringe'
import { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import { Color } from '../domain/models/Color'
import { ColorChip } from '../domain/models/colorChip/ColorChip'
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

  log(
    color1: Color | ColorChip,
    color2: Color | ColorChip,
    mixedColor: Color | ColorChip,
  ) {
    this.beginGroup('MixColor:')
    this.messageColor(
      color1 instanceof ColorChip ? color1.value : color1,
      'Color1',
    )
    this.messageColor(
      color2 instanceof ColorChip ? color2.value : color2,
      'Color2',
    )
    this.messageColor(
      mixedColor instanceof ColorChip ? mixedColor.value : mixedColor,
      'MixedColor',
    )
    this.endGroup()
  }

  logGroup(colorGroup: ColorGroup, message: string = ''): void {
    this.beginGroup(`Color Group Mixed ${message}`)
    const { resultColor, subtractedColor, swatchColor } = colorGroup

    this.messageColor(swatchColor.value, 'SwatchColor')
    this.messageColor(subtractedColor.value, 'SubtractedColor')
    this.messageColor(resultColor.value, 'ResultColor')

    this.endGroup()
  }

  success(colorGroup: ColorGroup): void {
    this.logGroup(colorGroup, 'Successfully')
  }

  fail(failedColorGroup: ColorGroup, correctColorGroup: ColorGroup): void {
    this.logGroup(failedColorGroup, 'Failed')
    this.messageColor(
      correctColorGroup.subtractedColor.value,
      `The correct color was:`,
    )
  }
}
