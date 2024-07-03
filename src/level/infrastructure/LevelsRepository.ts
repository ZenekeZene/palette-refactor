import { ILevelsRepository } from '@gameContext/level/domain/ILevelsRepository'
import { Level, LevelRawModel } from '@gameContext/level/domain/Level'
import { LevelsCollection } from '@gameContext/level/domain/LevelsCollection'

class LevelsRepository implements ILevelsRepository {
  private _levels: Map<string, Level> = new Map()

  private add(level: Level) {
    this._levels.set(level.id.toPrimitive(), level)
  }

  async saveAllInMemory(levels: LevelsCollection): Promise<void> {
    levels.forEach((level) => this.add(level))
  }

  async searchById(id: string): Promise<Level | undefined> {
    return this._levels.get(id)
  }

  async loadAllFromFile(): Promise<LevelRawModel[]> {
    try {
      const LevelsConfig = await import('@resources/Levels.yaml')
      const levels = LevelsConfig.default.levels as Array<LevelRawModel>
      return levels
    } catch (error) {
      console.error('Error loading levels config', error)
      return new Array<LevelRawModel>()
    }
  }
}

export { LevelsRepository }
