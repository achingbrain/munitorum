import React, {
  Component
} from 'react'
import component from './component'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import {
  updateList
} from '../store/actions'

class DetachmentNameDialog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
      value: props.name || props.t(props.code)
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleUpdateAndClose = () => {
    const {
      list,
      detachment,
      updateList
    } = this.props

    const name = this.state.value.trim()

    detachment.name = name || undefined

    updateList(list)

    this.setState({ open: false })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    const {
      classes,
      t,
      name,
      code
    } = this.props

    const updatedName = this.state.value

    return (
      <>
        {name || t(code)}
        <IconButton color='inherit' className={classes.inlineButton} onClick={this.handleClickOpen}>
          <EditIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>{t('update-name')}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {t('enter-new-detachment-name')}
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              type='text'
              value={updatedName}
              onChange={(event) => this.handleChange(event)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Cancel
            </Button>
            <Button onClick={this.handleUpdateAndClose}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = (state, { detachment }) => {
  return {
    list: detachment.list,
    detachment,
    name: detachment.name,
    code: detachment.code
  }
}

const mapDispatchToProps = {
  updateList
}

export default component(DetachmentNameDialog, mapStateToProps, mapDispatchToProps)
