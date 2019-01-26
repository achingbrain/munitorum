'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import component from './component'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import InlineButton from './inline-button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from './icon'

class PopOverMenu extends Component {
  state = {
    anchorEl: null
  }

  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    textVariant: PropTypes.string
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose = (event) => {
    this.setState({
      anchorEl: null
    })
  }

  handleSelect = (item) => {
    this.setState({
      anchorEl: null
    })

    this.props.onSelect(item)
  }

  render () {
    const {
      anchorEl
    } = this.state
    const {
      t,
      items,
      text,
      textComponent,
      textVariant,
      textColour,
      textClassName,
      button,
      buttonSize,
      classes
    } = this.props

    return (
      <div>
        <Typography variant={textVariant || 'h5'} component={textComponent || 'h5'} color={textColour || 'default'} className={textClassName}>
          {text}<InlineButton
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup='true'
            onClick={this.handleClick}
            disabled={!items.length}
            size={buttonSize}
          >{button || <AddIcon />}</InlineButton>
        </Typography>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {
            items
              .slice()
              .sort((a, b) => {
                const aName = typeof a.code === 'string' ? t(a.code) : t(a.name)
                const bName = typeof b.code === 'string' ? t(b.code) : t(b.name)

                return aName.localeCompare(bName)
              })
              .map((item, index) => {
                const name = typeof item.code === 'string' ? t(item.code) : t(item.name)

                return (
                  <MenuItem onClick={() => this.handleSelect(item)} key={`${name.toString()}-${index}`}>
                    <ListItemIcon className={classes.listListIcon}>
                      <Icon className={classes.avatar} src={item.image} />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </MenuItem>
                )
              })
          }
        </Menu>
      </div>
    )
  }
}

export default component(PopOverMenu)
