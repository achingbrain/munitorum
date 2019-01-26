import React, {
  Component
} from 'react'
import component from './component'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {
  CopyToClipboard
} from 'react-copy-to-clipboard'
import {
  updateList
} from '../store/actions'
import cbor from 'cbor'

class ListLinkDialog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render () {
    const {
      link,
      t,
      children
    } = this.props
    const {
      open
    } = this.state

    return (
      <>
        <CopyToClipboard text={link} onCopy={() => this.setState({ open: true })}>
          {children}
        </CopyToClipboard>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>{t('list-link')}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {t('this-is-the-link')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = ({ list }) => {
  const link = new URL(window.location.href)
  link.hash = cbor.encode(list.toJSON()).toString('hex')

  return {
    link: link.toString()
  }
}

const mapDispatchToProps = {
  updateList
}

export default component(ListLinkDialog, mapStateToProps, mapDispatchToProps)
