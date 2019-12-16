import ListEditor from './netea/list-editor'
import ListViewer from './netea/list-viewer'
import TopBar from './netea/top-bar'
import games from '../../rules'

games[0].addEditors = (list) => {
  list.getEditor = () => {
    return ListEditor
  }
  list.getViewer = () => {
    return ListViewer
  }
  list.getTopBar = () => {
    return TopBar
  }
}

export default games
