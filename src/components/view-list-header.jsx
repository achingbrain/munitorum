'use strict'

import React from 'react'
import component from './component'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const ViewListHeader = ({ classes, t, list, cost, onEdit }) => {
  return (
    <>
      <Typography variant='h6' color='inherit' className={classes.grow} noWrap>
        {t(list.name)}
      </Typography>
      <IconButton
        color='inherit'
        onClick={onEdit}
      >
        <EditIcon />
      </IconButton>
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
