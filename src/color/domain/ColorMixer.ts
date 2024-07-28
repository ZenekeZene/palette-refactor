export class ColorMixer {
  color1: string
  color2: string

  constructor(color1: string, color2: string) {
    this.color1 = color1
    this.color2 = color2
  }

  mix() {
    return this.color1 + this.color2
  }
}
