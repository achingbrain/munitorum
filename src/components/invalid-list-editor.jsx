import React, {
  Component
} from 'react'
import component from './component'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Trans } from 'react-i18next'
import {
  deleteList
} from '../store/actions'
import Confirm from './confirm'

class InvalidListEditor extends Component {
  state = {
    hasError: false
  }

  handleRemove = () => {
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
      classes,
      t
    } = this.props

    let name = t('list')

    if (list && list.name) {
      name = list.name
    }

    let message = ''

    if (list && list.error && list.error.message) {
      message = (
        <Typography component='pre' className={classes.errorDisplay}>
          {list.error.message}
        </Typography>
      )
    }

    return (
      <Card className={classes.viewCard}>
        <CardContent>
          <Typography component='p'>
            <Trans i18nKey='invalid-message'>{{ name }} was invalid</Trans>
          </Typography>
          {message}
        </CardContent>
        <CardActions>
          <Confirm
            title={t('remove-list')} text={t('really-remove-list')} onConfirm={this.handleRemove} button={(onClick) => (
              <Button size='small' onClick={onClick}>{t('remove')}</Button>
            )}
          />
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {
  deleteList
}

export default component(InvalidListEditor, mapStateToProps, mapDispatchToProps)
