'use strict'

import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class AlertDialog extends Component {
  static propTypes = {
    onConfirm: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleConfirm = () => {
    this.handleClose()

    this.props.onConfirm()
  }

  render () {
    const {
      title,
      text,
      button
    } = this.props

    return (
      <div>
        {button(this.handleClickOpen)}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleConfirm} color='primary' autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default AlertDialog
