'use strict'

import React from 'react'
import component from './component'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import BackIcon from '@material-ui/icons/ChevronLeft'
import { Trans } from 'react-i18next'

const ViewListHeader = ({ classes, t, list, cost, onEdit }) => {
  return (
    <>
      <IconButton
        color='inherit'
        onClick={onEdit}
      >
        <BackIcon />
      </IconButton>
      <Typography variant='h6' color='inherit' className={classes.grow} noWrap>
        {t(list.name)}
      </Typography>
      <Typography variant='h6' color='inherit'>
        <Trans i18nKey='cost'>{{ cost }} pts</Trans>
      </Typography>
    </>
  )
}

const mapStateToProps = ({ list }) => {
  return {
    list,
    cost: list.getCost()
  }
}

const mapDispatchToProps = {

}

export default component(ViewListHeader, mapStateToProps, mapDispatchToProps)
