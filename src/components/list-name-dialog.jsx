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

class ListNameDialog extends Component {
  state = {
    prevId: null,
    open: false,
    value: ''
  }

  static getDerivedStateFromProps (props, state) {
    if (props.id !== state.prevId) {
      return {
        ...state,
        prevId: props.id,
        value: props.name
      }
    }

    return state
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
      updateList
    } = this.props

    const name = this.state.value.trim()

    if (!name) {
      return
    }

    list.name = name

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
      t
    } = this.props

    const name = this.state.value

    return (
      <>
        <IconButton color='inherit' className={classes.navButton} onClick={this.handleClickOpen}>
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
              {t('enter-new-name')}
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              type='text'
              value={name}
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

const mapStateToProps = ({ list }) => ({
  list,
  id: list.id,
  name: list.name
})

const mapDispatchToProps = {
  updateList
}

export default component(ListNameDialog, mapStateToProps, mapDispatchToProps)
