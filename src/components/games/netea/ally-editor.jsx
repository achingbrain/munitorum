'use strict'

import React, {
  Component
} from 'react'
import component from '../../component'
import { Trans } from 'react-i18next'
import DetachmentNameDialog from '../../detachment-name-dialog'
import EditDetachments from './edit-detachments'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Icon from '../../icon'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import DownIcon from '@material-ui/icons/ArrowDownward'
import UpIcon from '@material-ui/icons/ArrowUpward'
import Confirm from '../../confirm'
import {
  addDetachment,
  moveDetachmentUp,
  moveDetachmentDown
} from '../../../store/actions'

class AllyEditor extends Component {
  handleAddAlliedDetachment = (type, detachment) => {
    const {
      list,
      addDetachment
    } = this.props

    addDetachment({
      list,
      detachment: {
        type: type,
        detachment
      }
    })
  }

  handleRemoveAlly = () => {
    const {
      list,
      onRemoveAlly
    } = this.props

    onRemoveAlly(list)
  }

  handleMoveUp = () => {
    const {
      moveDetachmentUp,
      list
    } = this.props

    moveDetachmentUp(list)
  }

  handleMoveDown = () => {
    const {
      moveDetachmentDown,
      list
    } = this.props

    moveDetachmentDown(list)
  }

  render () {
    const {
      list,
      cost,
      classes,
      isFirst,
      isLast,
      t
    } = this.props

    return (
      <Card className={classes.allyCard}>
        <CardHeader
          avatar={
            <Icon src={list.army.image} className={classes.detachmentAvatar} />
          }
          action={
            <>
              <IconButton
                aria-label={t('move-up')}
                onClick={this.handleMoveUp}
                disabled={isFirst}
              >
                <UpIcon />
              </IconButton>
              <IconButton
                aria-label={t('move-down')}
                onClick={this.handleMoveDown}
                disabled={isLast}
              >
                <DownIcon />
              </IconButton>
              <Confirm title={'Remove this ally?'} text={'Really remove this ally?'} onConfirm={this.handleRemoveAlly} button={(onClick) => (
                <IconButton aria-label='Delete' onClick={onClick}>
                  <DeleteIcon />
                </IconButton>
              )} />
            </>
          }
          title={(
            <DetachmentNameDialog detachment={list} />
          )}
          subheader={<Trans i18nKey='cost'>{{ cost }} pts</Trans>}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <EditDetachments
            list={list}
            type={'lineDetachments'}
            textComponent='h6'
            titleTextVariant='h6'
            titleTextClassName={classes.allyEditorAddDetachment}
            onAddDetachment={this.handleAddAlliedDetachment}
          />
          <EditDetachments
            list={list}
            type={'supportDetachments'}
            textComponent='h6'
            titleTextVariant='h6'
            titleTextClassName={classes.allyEditorAddDetachment}
            onAddDetachment={this.handleAddAlliedDetachment}
          />
          <EditDetachments
            list={list}
            type={'lordsOfWar'}
            textComponent='h6'
            titleTextVariant='h6'
            titleTextClassName={classes.allyEditorAddDetachment}
            onAddDetachment={this.handleAddAlliedDetachment}
          />
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = (state, { list }) => ({
  list: list,
  cost: list.getCost()
})

const mapDispatchToProps = {
  addDetachment,
  moveDetachmentUp,
  moveDetachmentDown
}

export default component(AllyEditor, mapStateToProps, mapDispatchToProps)
