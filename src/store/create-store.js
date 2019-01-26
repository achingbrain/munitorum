import { createStore, compose } from 'redux'
import persistState from 'redux-localstorage'
import games from '../rules/games'

const config = {
  deserialize: (serializedData) => {
    let data

    try {
      data = JSON.parse(serializedData)
    } catch (error) {
      console.error(error)
    }

    if (!data) {
      return
    }

    const lists = data.lists
      .map(list => {
        const game = games.find(item => item.type === list.game)

        if (!game) {
          return
        }

        try {
          return game.listFromJSON(list)
        } catch (error) {
          console.error(error)
        }
      })
      .filter(Boolean)

    const list = data.list && data.list.id ? lists.find(item => item.id === data.list.id) : undefined

    return {
      lists,
      list
    }
  }
}

const makeStore = (rootReducer, initialState, enhancers = []) => {
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const store = createStore(rootReducer, initialState, composeEnhancers(...[ persistState(null, config), ...enhancers ]))

  return store
}

export default makeStore
