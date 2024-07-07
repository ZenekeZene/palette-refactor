
import { createStore } from './useStore'
import { createInitialState } from './initialState'
import { storeDependencies } from './store.dependencies'

const initialState = await createInitialState()
const useStore = createStore(initialState, storeDependencies)

export { useStore }
