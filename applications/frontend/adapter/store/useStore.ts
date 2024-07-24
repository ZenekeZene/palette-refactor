import type { StoreState } from './types/store'
import { loadInitialState } from './actions/loadInitialState'
import { createStore } from './createStore'

const ErrorStoreNotConfigured = new Error(
  'Store has not been configured. Please call configureStore first.',
)

let store: ReturnType<typeof createStore> | null = null

export async function configureStore() {
  const initialState = await loadInitialState()
  store = createStore(initialState)
}

export function useStore<T>(selector: (state: StoreState) => T): T {
  if (store === null) {
    throw ErrorStoreNotConfigured
  }
  return store(selector)
}
