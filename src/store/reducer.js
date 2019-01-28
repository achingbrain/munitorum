import {
  VIEW_LIST,
  NEW_LIST,
  CREATE_LIST,
  UPDATE_LIST,
  DELETE_LIST,
  IMPORT_LIST,
  ADD_DETACHMENT,
  REMOVE_DETACHMENT,
  ADD_UNIT,
  REMOVE_UNIT,
  UPDATE_UNIT
} from './actions'

const initialState = {
  list: null,
  lists: []
}

const createList = (state, { name, game, army }) => {
  const list = game.newList(name, army)
  const lists = state.lists
    .concat(list)
    .sort((a, b) => a.name.localeCompare(b.name))

  return {
    list,
    lists
  }
}

const viewList = (state, list) => {
  return {
    list: list,
    lists: state.lists
  }
}

const newList = (state) => {
  return {
    lists: state.lists
  }
}

const updateList = (state, list) => {
  const lists = state.lists
    .map(item => {
      if (item.id === list.id) {
        return list
      }

      return item
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  return {
    list: state.lists.find(item => item.id === state.list.id),
    lists
  }
}

const deleteList = (state, list) => {
  const lists = state.lists
    .filter(item => item.id !== list.id)

  return {
    lists
  }
}

const importList = (state, list) => {
  const lists = state.lists
    .filter(item => item.id !== list.id)
    .concat(list)
    .sort((a, b) => a.name.localeCompare(b.name))

  return {
    list,
    lists
  }
}

const addDetachment = (state, { list, detachment }) => {
  list.addDetachment(detachment)

  return {
    ...state
  }
}

const removeDetachment = (state, { list, detachment }) => {
  list.removeDetachment(detachment)

  return {
    ...state
  }
}

const addUnit = (state, { detachment, unit }) => {
  detachment.addUnit(unit)

  return {
    ...state
  }
}

const removeUnit = (state, { detachment, unit }) => {
  detachment.removeUnit(unit)

  return {
    ...state
  }
}

const updateUnit = (state, { unit, operation }) => {
  operation(unit)

  return {
    ...state
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LIST:
      return createList(state, action.payload)
    case VIEW_LIST:
      return viewList(state, action.payload)
    case NEW_LIST:
      return newList(state, action.payload)
    case UPDATE_LIST:
      return updateList(state, action.payload)
    case DELETE_LIST:
      return deleteList(state, action.payload)
    case IMPORT_LIST:
      return importList(state, action.payload)
    case ADD_DETACHMENT:
      return addDetachment(state, action.payload)
    case REMOVE_DETACHMENT:
      return removeDetachment(state, action.payload)
    case ADD_UNIT:
      return addUnit(state, action.payload)
    case REMOVE_UNIT:
      return removeUnit(state, action.payload)
    case UPDATE_UNIT:
      return updateUnit(state, action.payload)
    default:
      return state
  }
}

export default reducer
