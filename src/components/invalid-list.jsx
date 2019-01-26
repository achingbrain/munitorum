'use strict'

import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import component from './component'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import EditNavigation from './edit-navigation'
import Confirm from './confirm'
import {
  deleteList
} from '../store/actions'

class InvalidList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    hasError: false
  }

  handleRemoveList = () => {
    const {
      list,
      deleteList
    } = this.props

    deleteList(list)
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true })

    console.error(error, info)
  }

  render () {
    const {
      list,
      children,
      classes,
      t
    } = this.props

    const {
      hasError
    } = this.state

    if (hasError) {
      return (
        <EditNavigation toolbar={
          <Typography variant='h6' color='inherit' className={classes.grow} noWrap>
            {t('invalid-list')}
          </Typography>
        }>
          <Card className={classes.card}>
            <CardContent>
              <Typography component='p'>
                List {list && `"${t(list.name)}"`} was invalid
              </Typography>
            </CardContent>
            <CardActions>
              <Confirm title={'Remove this list?'} text={'Really remove this list?'} onConfirm={this.handleRemoveList} button={(onClick) => (
                <Button size='small' onClick={onClick}>Remove</Button>
              )} />
            </CardActions>
          </Card>
        </EditNavigation>
      )
    }

    return children
  }
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {
  deleteList
}

export default component(InvalidList, mapStateToProps, mapDispatchToProps)
