import { ColorGroupCollectionId } from '../ColorGroupCollectionId'

export class NoColorGroupToMix extends Error {
  private constructor(message: string) {
    super(message)
    this.name = 'NoColorGroupToMix'
  }

  static of(colorGroupCollectionId: ColorGroupCollectionId) {
    const message = `No color groups to mix in collection with id ${colorGroupCollectionId.valueOf()}`
    return new NoColorGroupToMix(message)
  }
}
