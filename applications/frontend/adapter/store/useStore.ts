
import { createStore } from './createStore'
import { createInitialState } from './initialState'
import { storeDependencies } from './store.dependencies'

const initialState = await createInitialState()
const useStore = createStore(initialState, storeDependencies)

export { useStore }
