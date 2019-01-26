import React, {
  Component
} from 'react'
import component from '../../component'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {
  removeDetachment
} from '../../../store/actions'
import Confirm from '../../confirm'
import {
  InvalidDetachment
} from '../../../rules/games/netea-epicau-horus-heresy/detachments/detachment'

class InvalidDetachmentEditor extends Component {
  state = {
    hasError: false
  }

  handleRemoveDetachment = () => {
    const {
      list,
      detachment,
      removeDetachment
    } = this.props

    removeDetachment({
      list,
      detachment
    })
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
          {}
          <CardActions>
            <Confirm title={'Remove this detachment?'} text={'Really remove this detachment?'} onConfirm={this.handleRemoveDetachment} button={(onClick) => (
              <Button size='small' onClick={onClick}>Remove</Button>
            )} />
          </CardActions>
        </Card>
      )
    }

    return children
  }
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {
  removeDetachment
}

export default component(InvalidDetachmentEditor, mapStateToProps, mapDispatchToProps)
