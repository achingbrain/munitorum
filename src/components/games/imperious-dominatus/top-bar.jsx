import React, { Component } from 'react'
import { Trans } from 'react-i18next'
import component from '../../component'
import Typography from '@material-ui/core/Typography'

class TopBar extends Component {
  render () {
    const {
      classes,
      cost
    } = this.props

    return (
      <div className={classes.topBar}>
        <Typography variant='body1' color='inherit' className={classes.grow} noWrap>
          <Trans i18nKey='strategy-rating'>Hello world</Trans>
        </Typography>
        <Typography variant='body1' color='inherit' noWrap>
          <Trans i18nKey='cost'>{{ cost }} pts</Trans>
        </Typography>
      </div>
    )
  }
}

const mapStateToProps = ({ list }) => {
  return {
    cost: list.getCost()
  }
}

const mapDispatchToProps = {}

export default component(TopBar, mapStateToProps, mapDispatchToProps)
