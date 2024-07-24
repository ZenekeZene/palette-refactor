import { Store } from './store'
import { createStore } from './createStore'
import { createInitialState } from './initialState'

let store: ReturnType<typeof createStore> | null = null

export async function configureStore() {
  const initialState = await createInitialState()
  store = createStore(initialState)
}

function useStore(selector: (state: Store) => any) {
  if (store === null) {
    throw new Error(
      'Store has not been configured. Please call configureStore first.'
    )
  }
  return store(selector)
}

export { useStore }
