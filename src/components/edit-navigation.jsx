import React, {
  Component
} from 'react'
import component from './component'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {
  newList
} from '../store/actions'
import ListEntry from './list-entry'

class Navigation extends Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  handleNewList = () => {
    const {
      newList
    } = this.props

    newList()
  }

  render () {
    const {
      classes,
      theme,
      lists,
      list,
      t
    } = this.props

    const selectedListId = list && list.id

    const drawer = (
      <div>
        <div className={classes.appTitleWrapper}>
          <Typography component='h1' variant='h6' className={classes.appTitle}>
            {t('app-name')}
          </Typography>
        </div>
        <Divider />
        <List>
          {
            lists.map(list => {
              return (
                <ListEntry key={list.id} list={list} selected={list.id === selectedListId} />
              )
            })
          }
        </List>
        <Divider />
        <List>
          <ListItem button key='New list' onClick={this.handleNewList}>
            <ListItemIcon className={classes.listListIcon}>
              <PlaylistAddIcon className={classes.avatar} />
            </ListItemIcon>
            <ListItemText primary='New list' />
          </ListItem>
        </List>
      </div>
    )

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            {this.props.toolbar}
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden mdUp implementation='css'>
            <Drawer
              container={this.props.container}
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          {this.props.topbar}
          <div className={classes.contentWrapper}>
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ lists, list }) => {
  return {
    lists,
    list
  }
}

const mapDispatchToProps = {
  newList
}

export default component(Navigation, mapStateToProps, mapDispatchToProps)
