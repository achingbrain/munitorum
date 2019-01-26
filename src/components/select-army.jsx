'use strict'

import React, {
  Component
} from 'react'
import component from '../components/component'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from './icon'

class SelectArmy extends Component {
  handleSelect = () => {
    const {
      army,
      onSelect
    } = this.props

    onSelect(army)
  }

  render () {
    const {
      army,
      classes,
      t
    } = this.props

    return (
      <ListItem onClick={this.handleSelect} button>
        <ListItemIcon className={classes.listListIcon}>
          <Icon src={army.image} className={classes.avatar} />
        </ListItemIcon>
        <ListItemText primary={t(army.code)} secondary={t(army.description)} />
      </ListItem>
    )
  }
}

export default component(SelectArmy)
