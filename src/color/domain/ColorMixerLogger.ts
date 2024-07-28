import { Color } from './Color'

export interface ColorMixerLogger {
  log(color1: Color, color2: Color, mixedColor: Color): void
}
