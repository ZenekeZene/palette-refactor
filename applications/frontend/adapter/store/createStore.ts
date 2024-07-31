import { create } from 'zustand'
import type { Store } from './types/store'
import { createColorStore } from './slices/colorStore/colorStore'
import { createQuoteStore } from './slices/quoteStore/quoteStore'
import { createPlayerStore } from './slices/playerStore/playerStore'
import type { PlayerStoreProps } from './slices/playerStore/playerStore.d'

export const createStore = (initialProps: PlayerStoreProps) => {
  const createPlayerStoreWithInitialProps = createPlayerStore(initialProps)
  return create<Store>()((...args) => ({
    ...createQuoteStore(...args),
    ...createColorStore(...args),
    ...createPlayerStoreWithInitialProps(...args),
  }))
}
