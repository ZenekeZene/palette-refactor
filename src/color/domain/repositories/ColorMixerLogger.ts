import { Color } from '../models/Color'

export interface ColorMixerLogger {
  log(color1: Color, color2: Color, mixedColor: Color): void
}
