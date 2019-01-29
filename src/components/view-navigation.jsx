import React, {
  Component
} from 'react'
import component from './component'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'

class EditNavigation extends Component {
  render () {
    const {
      classes,
      toolbar,
      children,
      list
    } = this.props

    const TopBar = list.getTopBar()
    const styles = {}

    if (list && list.army && list.army.colour) {
      styles.backgroundColor = list.army.colour
    }

    if (list && list.army && list.army.textColour) {
      styles.color = list.army.textColour
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' style={styles}>
          <Toolbar className={classes.toolBar}>
            {toolbar}
          </Toolbar>
          <TopBar />
        </AppBar>
        <main className={classes.contentWithTopBar}>
          <div className={classes.contentWrapper}>
            {children}
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {}

export default component(EditNavigation, mapStateToProps, mapDispatchToProps)
