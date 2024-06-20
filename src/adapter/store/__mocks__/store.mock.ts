import { createStore } from '@/adapter/store/useStore'
import { createInitialState } from '@/adapter/store/initialState'

const initialState = await createInitialState()
const useStore = createStore(initialState)

export { useStore }
