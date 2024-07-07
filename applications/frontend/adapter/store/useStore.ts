import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Store, State } from './store.types'
import { StoreDependencies } from './store.dependencies'
import { RegisterPlayerUseCase } from '@gameContext/player/application/registerPlayer.usecase'
import { PassLevelUseCase } from '@gameContext/player/application/passLevel.usecase'
import { PlayerId } from '@gameContext/player/domain/PlayerId'

function createStore(propsState: State, dependencies: StoreDependencies) {
  const playerId = new PlayerId(propsState.player.id)
  const registerPlayer = new RegisterPlayerUseCase(dependencies.playerRepository, playerId, propsState.player)
  const passLevel = new PassLevelUseCase(dependencies.playerRepository, playerId)

  registerPlayer.execute()

  const useStore = create<Store>()(
    devtools((set, get) => ({
      ...propsState,
      setTutorialIsLaunched: (value) =>
        set(() => ({ tutorialIsWatched: value })),
      setScore: (value) => set((state) => ({ ...state, score: value })),
      nextQuote: () => {
        set((state) => ({ ...state, quote: get().quotes.getNextQuote() }))
      },
      nextLevel: async () => {
        get().nextQuote()
        try {
          const player = await passLevel.execute()
          set((state) => ({ ...state, player }))
        } catch (error) {
          console.error('Failed to pass level:', error)
        }
      },
    }))
  )
  return useStore
}

export { createStore }
