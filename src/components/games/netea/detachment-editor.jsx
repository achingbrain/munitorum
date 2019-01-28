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
import { Trans } from 'react-i18next'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import {
  removeDetachment,
  addUnit,
  removeUnit,
  updateUnit
} from '../../../store/actions'
import PopOverMenu from '../../pop-over-menu'
import Confirm from '../../confirm'
import Icon from '../../icon'
import DetachmentNameDialog from '../../detachment-name-dialog'
import UnitEditor from './unit-editor'

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

  render () {
    const {
      classes,
      cost,
      upgrades,
      units,
      image,
      detachment
    } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Icon src={image} className={classes.detachmentAvatar} />
          }
          action={
            <Confirm title={'Remove this detachment?'} text={'Really remove this detachment?'} onConfirm={this.handleRemoveDetachment} button={(onClick) => (
              <IconButton aria-label='Delete' onClick={onClick}>
                <DeleteIcon />
              </IconButton>
            )} />
          }
          title={(
            <DetachmentNameDialog detachment={detachment} />
          )}
          subheader={<Trans i18nKey='cost'>{{ cost }} pts</Trans>}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <Table>
            <TableBody>
              {
                units.map((unit, unitIndex) => (
                  <UnitEditor
                    key={`unit-${unitIndex}`}
                    unit={unit}
                  />
                ))
              }
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <PopOverMenu text='' items={upgrades} onSelect={this.handleAddUnit} />
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state, { detachment }) => {
  return {
    list: detachment.list,
    detachment: detachment,
    cost: detachment.getCost(),
    upgrades: detachment.upgrades
      .reduce((acc, upgrade) => acc.concat(upgrade.getAvailableUpgrades(detachment)), []),
    image: detachment.image,
    units: detachment.units
  }
}

const mapDispatchToProps = {
  removeDetachment,
  addUnit,
  removeUnit,
  updateUnit
}

export default component(DetachmentEditor, mapStateToProps, mapDispatchToProps)
