import { ColorMixerLogger } from '../domain/repositories/ColorMixerLogger'

export class ColorMixerMockedLogger implements ColorMixerLogger {
  log(): void {}
  logGroup(): void {}
}
