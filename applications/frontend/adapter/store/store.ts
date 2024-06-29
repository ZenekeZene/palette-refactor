import { createStore } from '@frontend/adapter/store/useStore'
import { createInitialState } from '@frontend/adapter/store/initialState'

const initialState = await createInitialState()
const useStore = createStore(initialState)

export { useStore }
