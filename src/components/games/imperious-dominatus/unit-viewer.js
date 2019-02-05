'use strict'

import React, {
  Component, Fragment
} from 'react'
import component from '../../component'
import Typography from '@material-ui/core/Typography'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Icon from '../../icon'

const RulesDisplay = component(({ rules, classes, t }) => {
  return (
    <Typography component='small' color='textSecondary'>
      {
        rules
          .map((rule, ruleIndex) => {
            const output = rule.type || t(rule.name)

            if (rule.link) {
              return (
                <a key={`rule-${ruleIndex}`} href={rule.link} target='_blank' className={classes.rulesLink}>{output}</a>
              )
            }

            return output
          })
          .reduce((prev, curr) => {
            if (prev.length) {
              return [prev, ', ', curr]
            }

            return [curr]
          }, [])
      }
    </Typography>
  )
})

const StatDisplay = ({ stat, suffix = '' }) => {
  if (stat === null || stat === undefined) {
    return '-'
  }

  return `${stat}${suffix}`
}

class UnitViewer extends Component {
  render () {
    let {
      name,
      stats,
      weapons,
      notes,
      image,
      classes,
      t
    } = this.props

    const weaponsDisplay = []

    weapons
      .forEach((weapon, weaponIndex) => {
        if (weapon.statsModifier) {
          stats = weapon.statsModifier.modify(stats)
        }

        weaponsDisplay.push((
          <Fragment key={`weapon-${weaponIndex}`}>
            <TableCell padding='dense' className={classes.tableViewCell}>
              {t(weapon.getName())}
            </TableCell>
            <TableCell padding='dense' className={classes.tableViewCell}>
              <StatDisplay stat={weapon.getShortRange()} suffix='cm' />
            </TableCell>
            <TableCell padding='dense' className={classes.tableViewCell}>
              <StatDisplay stat={weapon.getLongRange()} suffix='cm' />
            </TableCell>
            <TableCell padding='dense' className={classes.tableViewCell}>
              <StatDisplay stat={weapon.getAttackDice()} />
            </TableCell>
            <TableCell padding='dense' className={classes.tableViewCell}>
              <StatDisplay stat={weapon.getSaveModifier()} />
            </TableCell>
            <TableCell padding='dense' className={classes.tableViewCell}>
              <RulesDisplay rules={weapon.getNotes()} />
            </TableCell>
          </Fragment>
        ))
      })

    const weaponCount = weaponsDisplay.length

    return (
      <Fragment>
        <TableRow>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewIconCell}>
            <Icon src={image} className={classes.unitAvatar} />
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewNameCell}>
            <Typography component='p'>
              {t(name)}
              <RulesDisplay rules={notes} />
            </Typography>
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewCell}>
            {stats.move ? `${stats.move}cm` : '-'}
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewCell}>
            {stats.armour !== null ? `${stats.armour}+` : '-'}
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewCell}>
            {stats.caf !== null ? `${stats.caf}+` : '-'}
          </TableCell>
          {weaponsDisplay.shift()}
        </TableRow>
        {weaponsDisplay.map((display, index) => {
          return (
            <TableRow key={`weapon-${index}`}>
              {display}
            </TableRow>
          )
        })}
      </Fragment>
    )
  }
}

const mapStateToProps = (state, { unit }) => {
  return {
    name: unit.getName(),
    stats: unit.getStats(),
    notes: unit.getNotes(),
    weapons: unit.getWeapons(),
    image: unit.getImage()
  }
}

const mapDispatchToProps = {}

export default component(UnitViewer, mapStateToProps, mapDispatchToProps)
