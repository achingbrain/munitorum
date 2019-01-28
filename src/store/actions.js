export const GAME_SELECT = 'APP/GAME/SELECT'
export const LIST_SELECT = 'APP/LIST/SELECT'
export const NEW_LIST = 'APP/LIST/NEW'
export const VIEW_LIST = 'LIST/VIEW'
export const CREATE_LIST = 'LIST/CREATE'
export const UPDATE_LIST = 'LIST/UPDATE'
export const DELETE_LIST = 'LIST/DELETE'
export const IMPORT_LIST = 'LIST/IMPORT'
export const ADD_DETACHMENT = 'LIST/DETACHMENTS/ADD'
export const UPDATE_DETACHMENT = 'LIST/DETACHMENTS/UPDATE'
export const REMOVE_DETACHMENT = 'LIST/DETACHMENTS/REMOVE'
export const MOVE_DETACHMENT_UP = 'LIST/DETACHMENTS/MOVE_UP'
export const MOVE_DETACHMENT_DOWN = 'LIST/DETACHMENTS/MOVE_DOWN'
export const ADD_UPGRADE = 'LIST/DETACHMENTS/UPGRADES/ADD'
export const UPDATE_UPGRADE = 'LIST/DETACHMENTS/UPGRADES/UPDATE'
export const REMOVE_UPGRADE = 'LIST/DETACHMENTS/UPGRADES/REMOVE'
export const ADD_UNIT = 'LIST/DETACHMENTS/UNITS/ADD'
export const UPDATE_UNIT = 'LIST/DETACHMENTS/UNITS/UPDATE'
export const REMOVE_UNIT = 'LIST/DETACHMENTS/UNITS/REMOVE'
export const MOVE_UNIT_UP = 'LIST/DETACHMENTS/UNITS/MOVE_UP'
export const MOVE_UNIT_DOWN = 'LIST/DETACHMENTS/UNITS/MOVE_DOWN'

const action = (type) => (payload) => ({
  type,
  payload
})

export const selectGame = action(GAME_SELECT)
export const selectList = action(LIST_SELECT)

export const newList = action(NEW_LIST)
export const viewList = action(VIEW_LIST)
export const createList = action(CREATE_LIST)
export const updateList = action(UPDATE_LIST)
export const deleteList = action(DELETE_LIST)
export const importList = action(IMPORT_LIST)

export const addDetachment = action(ADD_DETACHMENT)
export const updateDetachment = action(UPDATE_DETACHMENT)
export const removeDetachment = action(REMOVE_DETACHMENT)
export const moveDetachmentUp = action(MOVE_DETACHMENT_UP)
export const moveDetachmentDown = action(MOVE_DETACHMENT_DOWN)

export const addUnit = action(ADD_UNIT)
export const removeUnit = action(REMOVE_UNIT)
export const updateUnit = action(UPDATE_UNIT)
export const moveUnitUp = action(MOVE_UNIT_UP)
export const moveUnitDown = action(MOVE_UNIT_DOWN)
