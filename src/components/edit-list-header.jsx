import React, { Component } from 'react'
import PropTypes from 'prop-types'
import component from './component'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ViewIcon from '@material-ui/icons/Visibility'
import DownIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import {
  deleteList
} from '../store/actions'
import Confirm from './confirm'
import ListNameDialog from './list-name-dialog'
import ListLinkDialog from './list-link-dialog'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ShareIcon from '@material-ui/icons/Share'
import Icon from './icon'

class EditListHeader extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    confirmDeleteOpen: false,
    showLinkOpen: false,
    menuOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
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
      name,
      theme,
      image
    } = this.props

    return (
      <>
        <Icon src={image} className={classes.headerIcon} />
        <Typography variant='h6' color='inherit' className={classes.listName} noWrap>
          {name}
          <ListNameDialog />
        </Typography>
        <Hidden only={['xs', 'sm']} className={classes.flexContainer}>
          <ListLinkDialog>
            <IconButton color='inherit' className={classes.navButton}>
              <ShareIcon />
            </IconButton>
          </ListLinkDialog>
          <Confirm
            title='Delete this list?'
            text='Really delete this list?'
            onConfirm={this.handleDelete}
            button={(onClick) => (
              <IconButton
                color='inherit'
                aria-label='Delete'
                onClick={onClick}
              >
                <DeleteIcon />
              </IconButton>
            )}
          />
          <IconButton
            color='inherit'
            aria-label='View'
            onClick={this.handleView}
            data-test='view-list-button'
          >
            <ViewIcon />
          </IconButton>
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            onClick={this.handleDrawerToggle}
          >
            <DownIcon />
          </IconButton>
          <Drawer
            container={this.props.container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
            open={this.state.menuOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <List>
              <ListLinkDialog>
                <ListItem button>
                  <ListItemIcon className={classes.listListIcon}>
                    <ShareIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('share-list')} />
                </ListItem>
              </ListLinkDialog>
              <Confirm
                title='Delete this list?'
                text='Really delete this list?'
                onConfirm={this.handleDelete}
                button={(onClick) => (
                  <ListItem button onClick={onClick}>
                    <ListItemIcon className={classes.listListIcon}>
                      <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('delete-list')} />
                  </ListItem>
                )}
              />
              <ListItem button onClick={this.handleView} data-test='view-list-button'>
                <ListItemIcon className={classes.listListIcon}>
                  <ViewIcon />
                </ListItemIcon>
                <ListItemText primary={t('view-list')} />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
      </>
    )
  }
}

const mapStateToProps = ({ list }) => {
  return {
    list,
    name: list.name,
    image: list.army.image
  }
}

const mapDispatchToProps = {
  deleteList
}

export default component(EditListHeader, mapStateToProps, mapDispatchToProps)
