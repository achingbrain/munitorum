'use strict'

import React, {
  Component
} from 'react'
import component from '../components/component'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from './icon'

class SelectGame extends Component {
  handleSelect = () => {
    const {
      game,
      onSelect
    } = this.props

    onSelect(game)
  }

  render () {
    const {
      game,
      classes,
      t
    } = this.props

    return (
      <ListItem key={game.name} onClick={this.handleSelect} button>
        <ListItemIcon className={classes.listListIcon}>
          <Icon src={game.image} className={classes.avatar} />
        </ListItemIcon>
        <ListItemText primary={t(game.name)} secondary={t(game.description)} />
      </ListItem>
    )
  }
}

export default component(SelectGame)
