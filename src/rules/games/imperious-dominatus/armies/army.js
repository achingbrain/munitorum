'use strict'

import ListEditor from '../../../../components/games/imperious-dominatus/list-editor'
import ListViewer from '../../../../components/games/imperious-dominatus/list-viewer'
import TopBar from '../../../../components/games/imperious-dominatus/top-bar'

export default class Army {
  constructor (game) {
    this.game = game
    this.formations = []
  }

  getEditor () {
    return ListEditor
  }

  getViewer () {
    return ListViewer
  }

  getTopBar () {
    return TopBar
  }

  validate () {
    return []
  }
}