import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import { Trans } from 'react-i18next'
import component from '../../component'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import Validator from '../../validator'
import UnitViewer from './unit-viewer'
import ModifierUnit from '../../../rules/games/netea-epicau-horus-heresy/units/modifier-unit'

class DetachmentViewer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render () {
    const {
      classes,
      detachment,
      t
    } = this.props

    // dedupe units by choice of weapons
    const units = Object.values(detachment.units.reduce((acc, unit) => {
      const key = `${unit.getName()}-${unit.getChosenWeapons().map(weapon => weapon.name).join('-')}`

      acc[key] = unit

      return acc
    }, {})
    )
      .filter(item => !(item instanceof ModifierUnit))

    const initiativeRating = detachment.getInitiativeRating()

    return (
      <Card className={classes.card}>
        <CardHeader
          title={
            <div className={classes.flexContainer}>
              <Typography variant='body1' color='inherit' className={classes.grow} noWrap>
                {detachment.name || t(detachment.code)}
              </Typography>
              <Typography variant='body1' color='inherit' noWrap>
                <Trans i18nKey='intitative-rating'>Initiative Rating {{ initiativeRating }}+</Trans>
              </Typography>
            </div>
          }
          className={classes.viewCardHeader}
          titleTypographyProps={{ variant: 'subtitle1', component: 'h5' }}
        />
        <CardContent className={classes.cardContent}>
          <Validator errors={detachment.errors} />
          <Table>
            <TableHead>
              <TableRow className={classes.tableViewRow}>
                <TableCell padding='dense' colSpan={2} className={classes.tableViewNameHeader}>
                  Name
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Type
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Speed
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Armour
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  CC
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  FF
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Weapons
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Range
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Firepower
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                units.map((unit, index) => (
                  <UnitViewer
                    key={`unit-${index}`}
                    unit={unit}
                  />
                ))
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = (state, { detachment }) => {
  return {
    detachment: detachment,
    units: detachment.units
  }
}

const mapDispatchToProps = {

}

export default component(DetachmentViewer, mapStateToProps, mapDispatchToProps)
