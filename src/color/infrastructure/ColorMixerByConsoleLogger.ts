import { injectable } from 'tsyringe'
import { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'
import { Color } from '../domain/models/Color'

@injectable()
export class ColorMixerByConsoleLogger implements ColorMixerLogger {
  private message(color: Color, text: string) {
    const contrastColor = color.lightness() > 50 ? 'black' : 'white'
    console.log(
      `%c ${text}: ${color.valueOf()}`,
      `background: ${color.valueOf()};
       color: ${contrastColor}
      `,
    )
  }

  log(color1: Color, color2: Color, mixedColor: Color) {
    console.group('MixColor:')
    this.message(color1, 'Color1')
    this.message(color2, 'Color2')
    this.message(mixedColor, 'MixedColor')
    console.groupEnd()
  }
}
