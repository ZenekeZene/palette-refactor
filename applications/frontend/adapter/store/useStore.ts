import { create,  } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Store, State } from './store.types'
import { StoreDependencies } from './store.dependencies'
import { RegisterPlayerUseCase } from '@gameContext/player/application/registerPlayer.usecase'
import { PassLevelUseCase } from '@gameContext/player/application/passLevel.usecase'
import { PassLevelRequest } from '@gameContext/player/application/dto/PassLevelRequest'
import { RegisterPlayerRequest } from '@gameContext/player/application/dto/RegisterPlayerRequest'
import { actions } from './actions/actions'

function createStore(propsState: State, dependencies: StoreDependencies) {
  const { playerRepository } = dependencies
  const registerPlayerRequest = new RegisterPlayerRequest(propsState.player.id, propsState.player)
  const registerPlayer = new RegisterPlayerUseCase(playerRepository, registerPlayerRequest)

  const passLevelRequest = new PassLevelRequest(propsState.player.id)
  const passLevel = new PassLevelUseCase(playerRepository, passLevelRequest)

  registerPlayer.execute()

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
