import { createStore } from './createStore'
import { createInitialState } from './initialState'

const initialState = await createInitialState()
const useStore = createStore(initialState)

export { useStore }
