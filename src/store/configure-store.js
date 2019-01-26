import createStore from './create-store'
import reducer from './reducer'

const configureStore = () => {
  return createStore(reducer)
}

export default configureStore
