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
    let topBar = null

    if (list) {
      const TopBar = list.getTopBar()
      topBar = <TopBar />
    }

    const gameLists = {}

    lists.forEach(list => {
      if (!gameLists[list.game.name]) {
        gameLists[list.game.name] = {
          name: list.game.name,
          image: list.game.image,
          lists: []
        }
      }

      gameLists[list.game.name].lists.push(list)
    })

    const drawer = (
      <>
        <div className={classes.grow}>
          <div className={classes.appTitleWrapper}>
            <Typography component='h1' variant='h6' className={classes.appTitle}>
              {t('app-name')}
            </Typography>
          </div>
          <Divider />
          {
            Object.keys(gameLists)
              .map(name => {
                const game = gameLists[name]

                return (
                  <List key={name}>
                    <ListItem className={classes.listGameListItem}>
                      <ListItemText primary={t(game.name)} className={classes.listGameName} />
                    </ListItem>
                    {
                      gameLists[name].lists.map(list => {
                        return (
                          <ListEntry key={list.id} list={list} selected={list.id === selectedListId} />
                        )
                      })
                    }
                  </List>
                )
              })
          }
          <Divider />
          <List>
            <ListItem button key='New list' onClick={this.handleNewList} data-test='new-list-button'>
              <ListItemIcon className={classes.listListIcon}>
                <PlaylistAddIcon className={classes.avatar} />
              </ListItemIcon>
              <ListItemText primary='New list' />
            </ListItem>
          </List>
        </div>
        <p className={classes.smallPrint}>{t('is-unofficial')}</p>
      </>
    )

    const styles = {}

    if (list && list.army) {
      if (list.army.colour) {
        styles.backgroundColor = list.army.colour
      }

      if (list.army.textColour) {
        styles.color = list.army.textColour
      }
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar} style={styles}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={classes.menuButtonLeft}
            >
              <MenuIcon />
            </IconButton>
            {this.props.toolbar}
          </Toolbar>
          {topBar}
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden mdUp>
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
          <Hidden smDown>
            <Drawer
              classes={{
                paper: classes.drawerPaperMenu
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={topBar ? classes.contentWithTopBar : classes.content}>
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
