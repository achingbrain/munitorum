import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withNamespaces } from 'react-i18next'
import Typography from '@material-ui/core/Typography'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'

class Select extends Component {
  state = {
    anchorEl: null
  }

  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    text: PropTypes.any.isRequired,
    items: PropTypes.array.isRequired
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
      text
    } = this.props

    return (
      <div>
        <Typography component='p'>
          {text}<IconButton
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup='true'
            onClick={this.handleClick}
          ><ExpandIcon /></IconButton>
        </Typography>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {
            this.props.items.map((item) => {
              return (
                <MenuItem onClick={() => this.handleSelect(item)} key={item.name}>{item.name}</MenuItem>
              )
            })
          }
        </Menu>
      </div>
    )
  }
}

export default withNamespaces()(Select)
