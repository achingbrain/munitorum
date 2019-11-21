'use strict'

import React from 'react'
import component from '../../component'
import ViewDetachments from './view-detachments'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Validator from '../../validator'
import Icon from '../../icon'

const AlliesViewer = ({ list, classes }) => {
  return (
    list.allies.map((ally, index) => {
      return (
        <Card className={classes.allyCard} key={`ally-${index}`}>
          <CardHeader
            avatar={
              <Icon src={ally.army.image} className={classes.detachmentAvatar} />
            }
            title={ally.name}
            className={classes.cardHeader}
          />
          <CardContent className={classes.allyViewCardContent}>
            <Validator errors={ally.errors} />
            <ViewDetachments
              list={ally}
              type='lineDetachments'
            />
            <ViewDetachments
              list={ally}
              type='supportDetachments'
            />
            <ViewDetachments
              list={ally}
              type='lordsOfWar'
            />
          </CardContent>
        </Card>
      )
    })
  )
}

export default component(AlliesViewer)
