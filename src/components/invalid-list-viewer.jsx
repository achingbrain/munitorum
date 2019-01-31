import React, {
  Component
} from 'react'
import component from './component'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Trans } from 'react-i18next'

class InvalidListViewer extends Component {
  state = {
    hasError: false
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
      </Card>
    )
  }
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {}

export default component(InvalidListViewer, mapStateToProps, mapDispatchToProps)
