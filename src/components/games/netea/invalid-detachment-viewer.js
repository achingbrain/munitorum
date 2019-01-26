import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import component from '../../component'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {
  InvalidDetachment
} from '../../../rules/games/netea-epicau-horus-heresy/detachments/detachment'

class InvalidDetachmentViewer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true })

    console.error(error, info)
  }

  render () {
    const {
      detachment,
      children,
      classes,
      t
    } = this.props

    const {
      hasError
    } = this.state

    let name = 'Detachment'

    if (detachment && detachment.name) {
      name = `"${t(detachment.name)}"`
    }

    if (hasError || detachment instanceof InvalidDetachment) {
      return (
        <Card className={classes.viewCard}>
          <CardContent>
            <Typography component='p'>
              {name} was invalid
            </Typography>
          </CardContent>
        </Card>
      )
    }

    return children
  }
}

export default component(InvalidDetachmentViewer)
