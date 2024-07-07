import { State, StoreAPI } from '../store.types'
import { UseCase } from '@gameContext/shared/domain/utils/UseCase'

const nextLevel = async (apiStore: StoreAPI, usecase: UseCase<any>): Promise<void> => {
  apiStore.get().nextQuote()
  try {
    const player = await usecase.execute()
    apiStore.set((state: State) => ({ ...state, player }))
  } catch (error) {
    console.error('Failed to pass level:', error)
  }
}

export const actions = {
  nextLevel,
}
