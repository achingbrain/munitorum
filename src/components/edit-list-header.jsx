import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Trans } from 'react-i18next'
import component from './component'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ViewIcon from '@material-ui/icons/Visibility'
import Typography from '@material-ui/core/Typography'
import {
  deleteList
} from '../store/actions'
import Confirm from './confirm'
import ListNameDialog from './list-name-dialog'
import ListLinkDialog from './list-link-dialog'

class EditListHeader extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    confirmDeleteOpen: false,
    showLinkOpen: false
  }

  handleShowLink = () => {
    this.setState({
      showLinkOpen: true
    })
  }

  handleHideLink = () => {
    this.setState({
      showLinkOpen: false
    })
  }

  handleView = () => {
    const {
      onView
    } = this.props

    onView()
  }

  handleDelete = () => {
    const {
      list,
      deleteList
    } = this.props

    this.setState({
      confirmDeleteOpen: false
    })

    deleteList(list)
  }

  render () {
    const {
      classes,
      t,
      list,
      cost
    } = this.props

    return (
      <>
        <Typography variant='h6' color='inherit' className={classes.grow} noWrap>
          {t(list.name)}
          <ListNameDialog />
        </Typography>
        <Typography variant='h6' color='inherit'>
          <Trans i18nKey='cost'>{{ cost }} pts</Trans>
        </Typography>
        <ListLinkDialog />
        <IconButton
          color='inherit'
          aria-label='View'
          onClick={this.handleView}>
          <ViewIcon />
        </IconButton>
        <Confirm
          title={'Delete this list?'}
          text={'Really delete this list?'}
          onConfirm={this.handleDelete}
          button={(onClick) => (
            <IconButton
              color='inherit'
              aria-label='Delete'
              onClick={onClick}>
              <DeleteIcon />
            </IconButton>
          )} />
      </>
    )
  }
}

const mapStateToProps = ({ list }) => {
  return {
    list,
    cost: list.getCost()
  }
}

const mapDispatchToProps = {
  deleteList
}

export default component(EditListHeader, mapStateToProps, mapDispatchToProps)
