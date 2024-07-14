import { create,  } from 'zustand'
import { devtools } from 'zustand/middleware'
import { PassLevelUseCase } from '@gameContext/player/application/passLevel.usecase'
import { PassLevelRequest } from '@gameContext/player/application/dto/PassLevelRequest'
import { Store, State } from './store.types'
import { StoreDependencies } from './store.dependencies'
import { actions } from './actions/actions'

function createStore(propsState: State, dependencies: StoreDependencies) {
  const { player, levels } = propsState
  actions.registerInMemory(player, levels, dependencies)

  const passLevelRequest = new PassLevelRequest(player.id)
  const passLevel = new PassLevelUseCase(dependencies.playerRepository, passLevelRequest)

  const useStore = create<Store>()(
    devtools((set, get) => {
      const apiStore = { get, set }

      return ({
        ...propsState,
        setTutorialIsLaunched: (value) =>
          set(() => ({ tutorialIsWatched: value })),
        setScore: (value) => set((state) => ({ ...state, score: value })),
        nextQuote: () => {
          set((state) => ({ ...state, quote: get().quotes.getNextQuote() }))
        },
        nextLevel: async () => {
          await actions.nextLevel(apiStore, passLevel)
        },
      })
    })
  )
  return useStore
}

export { createStore }
