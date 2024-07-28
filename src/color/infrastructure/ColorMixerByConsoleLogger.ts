import { injectable } from 'tsyringe'
import { ColorMixerLogger } from '../domain/ColorMixerLogger'
import { Color } from '../domain/Color'

@injectable()
export class ColorMixerByConsoleLogger implements ColorMixerLogger {
  log(color1: Color, color2: Color, mixedColor: Color) {
    console.group('MixColor')
    console.log(
      `%c Color1: ${color1.valueOf()}`,
      `background: ${color1.valueOf()}`,
    )
    console.log(
      `%c Color2: ${color2.valueOf()}`,
      `background: ${color2.valueOf()}`,
    )
    console.log(
      `%c MixedColor: ${mixedColor.valueOf()}`,
      `background: ${mixedColor.valueOf()}`,
    )
    console.groupEnd()
  }
}
