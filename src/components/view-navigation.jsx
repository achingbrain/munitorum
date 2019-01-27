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
      children
    } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed'>
          <Toolbar>
            {toolbar}
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
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
