'use strict'

import React, {
  Component
} from 'react'
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
import { Trans } from 'react-i18next'

class DetachmentViewer extends Component {
  render () {
    let {
      detachment,
      name,
      sections,
      breakpoint,
      morale,
      victoryPoints,
      classes,
      t
    } = this.props

    const units = Object.values(
      sections.reduce((acc, section) => {
        section.units.forEach(unit => {
          acc[unit.getName()] = unit
        })

        return acc
      }, {})
    )

    return (
      <Card className={classes.card}>
        <CardHeader
          title={
            <div className={classes.flexContainer}>
              <Typography variant='body1' color='inherit' className={classes.grow} noWrap>
                {name || t(detachment.code)}
              </Typography>
              <Typography variant='body1' color='inherit' noWrap>
                <span className={classes.detachmentStats}>
                  <Trans i18nKey='morale'>Morale {{ morale }}+</Trans>
                </span>
                <span className={classes.detachmentStats}>
                  <Trans i18nKey='breakpoint'>Breakpoint {{ breakpoint }}</Trans>
                </span>
                <span className={classes.detachmentStats}>
                  <Trans i18nKey='victory-points'>{{ victoryPoints }}VP</Trans>
                </span>
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
                <TableCell padding='dense' className={classes.tableViewNameHeader}>
                  Move
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Armour
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  <abbr title='Close Combat Factor'>CAF</abbr>
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Weapon
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  <abbr title='Short Range'>SR</abbr>
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  <abbr title='Long Range'>LR</abbr>
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  <abbr title='Attack Dice'>AD</abbr>
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  <abbr title='Saving Throw Modifier'>TSM</abbr>
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  Notes
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
    detachment,
    name: detachment.getName(),
    breakpoint: detachment.getBreakpoint(),
    morale: detachment.getMorale(),
    victoryPoints: detachment.getVictoryPoints(),
    sections: detachment.getSections(),
    image: detachment.getImage()
  }
}

const mapDispatchToProps = {}

export default component(DetachmentViewer, mapStateToProps, mapDispatchToProps)
