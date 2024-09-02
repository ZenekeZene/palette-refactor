import type { Store } from './types/store'
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

export function getStore() {
  if (store === null) {
    throw ErrorStoreNotConfigured
  }
  return store
}

export function useStore<T>(selector: (state: Store) => T): T {
  const store = getStore()
  return store(selector)
}
