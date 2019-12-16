'use strict'

import React from 'react'
import component from './component'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Icon from './icon'

const ViewListHeader = ({ classes, list, image, cost, onEdit }) => {
  return (
    <>
      <Icon src={image} className={classes.headerIcon} />
      <Typography variant='h6' color='inherit' className={classes.listName} noWrap>
        {list.name}
      </Typography>
      <IconButton
        color='inherit'
        onClick={onEdit}
        data-test='edit-list-button'
      >
        <EditIcon />
      </IconButton>
    </>
  )
}

const mapStateToProps = ({ list }) => {
  return {
    list,
    cost: list.getCost(),
    image: list.army.image
  }
}

const mapDispatchToProps = {

}

export default component(ViewListHeader, mapStateToProps, mapDispatchToProps)
