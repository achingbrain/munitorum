import React, {
  Component
} from 'react'
import component from '../../component'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import DownIcon from '@material-ui/icons/ArrowDownward'
import UpIcon from '@material-ui/icons/ArrowUpward'
import { Trans } from 'react-i18next'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import Validator from '../../validator'
import {
  removeDetachment,
  addUnit,
  removeUnit,
  updateUnit,
  moveDetachmentUp,
  moveDetachmentDown
} from '../../../store/actions'
import PopOverMenu from '../../pop-over-menu'
import Confirm from '../../confirm'
import Icon from '../../icon'
import DetachmentNameDialog from '../../detachment-name-dialog'
import UnitEditor from './unit-editor'
import kebab from '../../../utils/kebab-case'

class DetachmentEditor extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  handleRemoveDetachment = () => {
    const {
      list,
      detachment,
      removeDetachment
    } = this.props

    removeDetachment({
      list: list,
      detachment: detachment
    })
  }

  handleAddUnit = (unit) => {
    const {
      detachment,
      addUnit
    } = this.props

    addUnit({
      detachment: detachment,
      unit
    })
  }

  handleRemoveUnit = (unit) => {
    const {
      detachment,
      removeUnit
    } = this.props

    removeUnit({
      detachment,
      unit
    })
  }

  handleUpdateUnit = (unit) => {
    const {
      updateUnit
    } = this.props

    updateUnit(unit)
  }

  handleMoveUp = () => {
    const {
      moveDetachmentUp,
      detachment
    } = this.props

    moveDetachmentUp(detachment)
  }

  handleMoveDown = () => {
    const {
      moveDetachmentDown,
      detachment
    } = this.props

    moveDetachmentDown(detachment)
  }

  render () {
    const {
      classes,
      cost,
      upgrades,
      units,
      image,
      detachment,
      t,
      isFirst,
      isLast,
      errors,
      type
    } = this.props

    return (
      <Card className={classes.card} data-test={`${kebab(type)}-${detachment.code}-editor`}>
        <CardHeader
          avatar={
            <Icon src={image} className={classes.detachmentAvatar} />
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
              <Confirm
                title={t('remove-detachment')} text={t('really-remove-detachment')} onConfirm={this.handleRemoveDetachment} button={(onClick) => (
                  <IconButton aria-label='Delete' onClick={onClick}>
                    <DeleteIcon />
                  </IconButton>
                )}
              />
            </>
          }
          title={(
            <DetachmentNameDialog detachment={detachment} />
          )}
          subheader={<Trans i18nKey='cost'>{{ cost }} pts</Trans>}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <Validator errors={errors} />
          <Table>
            <TableBody>
              {
                units.map((unit, unitIndex) => (
                  <UnitEditor
                    key={`unit-${unitIndex}`}
                    unit={unit}
                    isFirst={unitIndex === 0}
                    isLast={unitIndex === units.length - 1}
                  />
                ))
              }
            </TableBody>
          </Table>
        </CardContent>
        <CardActions className={classes.cardFooter}>
          <PopOverMenu text='' items={upgrades} onSelect={this.handleAddUnit} />
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state, { detachment }) => {
  const army = detachment.list.army
  const upgrades = army.filterUpgrades(
    detachment.upgrades
      .reduce((acc, upgrade) => acc.concat(upgrade.getAvailableUpgrades(detachment)), [])
  )

  return {
    list: detachment.list,
    detachment: detachment,
    cost: detachment.getCost(),
    upgrades,
    image: detachment.image,
    units: detachment.units,
    errors: detachment.errors
  }
}

const mapDispatchToProps = {
  removeDetachment,
  addUnit,
  removeUnit,
  updateUnit,
  moveDetachmentUp,
  moveDetachmentDown
}

export default component(DetachmentEditor, mapStateToProps, mapDispatchToProps)
