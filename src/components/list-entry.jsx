import React, {
  Component
} from 'react'
import component from './component'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from './icon'
import {
  viewList
} from '../store/actions'

class ListEntry extends Component {
  handleShowList = () => {
    const {
      list,
      viewList
    } = this.props

    viewList(list)
  }

  render () {
    const {
      list,
      selected,
      classes,
      t
    } = this.props

    return (
      <ListItem button onClick={this.handleShowList} selected={selected}>
        <ListItemIcon className={classes.listListIcon}>
          <Icon src={list.army.image} className={classes.avatar} />
        </ListItemIcon>
        <ListItemText primary={t(list.name)} />
      </ListItem>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {
  viewList
}

export default component(ListEntry, mapStateToProps, mapDispatchToProps)
