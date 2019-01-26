'use strict'

import {
  Component
} from 'react'
import component from './component'
import {
  importList
} from '../store/actions'
import games from '../rules/games'
import cbor from 'cbor'

class ListLinkReceiver extends Component {
  state = {}

  static getDerivedStateFromProps (props, prevState) {
    const {
      hash,
      history,
      importList
    } = props

    if (!hash) {
      return {}
    }

    history.push('/')

    try {
      const json = cbor.decode(hash.substring(0, 1) === '#' ? hash.substring(1) : hash)
      const game = games.find(item => item.type === json.game)
      const list = game.listFromJSON(json)

      importList(list)
    } catch (error) {
      console.error(error)
    }

    return {}
  }

  render () {
    return null
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  importList
}

export default component(ListLinkReceiver, mapStateToProps, mapDispatchToProps)
