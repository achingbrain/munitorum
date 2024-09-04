'use strict'

import React, {
  Component, Fragment
} from 'react'
import component from '../../component'
import Typography from '@material-ui/core/Typography'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Icon from '../../icon'
import { Trans } from 'react-i18next'
import {
  SpecialWeapon,
  WeaponBlank
} from '../../../rules/netea-epicau-horus-heresy/weapons'
import {
  Notes
} from '../../../rules/netea-epicau-horus-heresy/special-rules'
import {
  Unique
} from '../../../rules/netea-epicau-horus-heresy/constraints'
import Details from '../../details'

const RulesDisplay = component(({ rules, classes, t }) => {
  return (
    <Typography component='small' color='textSecondary'>
      {
        rules
          .filter(rule => {
            return !(rule instanceof Notes) && !(rule instanceof Unique)
          })
          .map((rule, ruleIndex) => {
            const output = rule.type || t(rule.name)

            if (rule.link) {
              return (
                <a key={`rule-${ruleIndex}`} href={rule.link} target='_blank' rel='noopener noreferrer' className={classes.rulesLink}>{output}</a>
              )
            }

            if (rule.title && rule.text) {
              return (
                <Details
                  key={`rule-${ruleIndex}`}
                  title={rule.title}
                  text={rule.text}
                  button={(onClick) => (
                    <a onClick={onClick} className={classes.rulesLink}>{output}</a>
                  )}
                />
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

const NotesDisplay = component(({ rules, t, classes }) => {
  return (
    <>
      {
        rules
          .filter(rule => rule instanceof Notes)
          .map((rule, ruleIndex) => {
            const name = t(rule.name)
            const notes = t(rule.notes)

            return (
              <Typography component='p' className={classes.notes} key={`notes-${ruleIndex}`}>
                {
                  name ? (
                    <Trans i18nKey='unit-notes'>{{ name }}: {{ notes }}</Trans>
                  ) : notes
                }
              </Typography>
            )
          })
      }
    </>
  )
})

class UnitViewer extends Component {
  render () {
    let {
      name,
      stats,
      weapons,
      rules,
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

        if (weapon instanceof SpecialWeapon) {
          weaponsDisplay.push((
            <Fragment key={`weapon-${weaponIndex}`}>
              <TableCell padding='dense' className={classes.tableViewCell}>
                {t(weapon.name)}
              </TableCell>
              <TableCell padding='dense' className={classes.tableViewCell} colSpan={2}>
                {t(weapon.note)}
              </TableCell>
            </Fragment>
          ))

          return
        }

        if (weapon instanceof WeaponBlank) {
          return
        }

        weapon.profiles
          .forEach((profile, profileIndex) => {
            weaponsDisplay.push((
              <Fragment key={`weapon-${weaponIndex}-${profileIndex}`}>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  {t(weapon.name)}
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  {profile.range}
                </TableCell>
                <TableCell padding='dense' className={classes.tableViewCell}>
                  {
                    [profile]
                      .concat(profile.firepower)
                      .map((fp, fpIndex) => {
                        const output = fp.type || t(fp.name)

                        function displayFirepower (type, fp, index) {
                          if (!type) {
                            return null
                          }

                          if (type.type) {
                            type = type.type
                          }

                          if (typeof fp.link === 'string') {
                            return (
                              <a
                                key={`fp-${profileIndex}-${index}`}
                                href={fp.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={classes.fpLink}
                                title={t(fp.name)}
                              >
                                {type}
                              </a>
                            )
                          }

                          if (fp.title && fp.text) {
                            return (
                              <Details
                                key={`fp-${profileIndex}-${index}`}
                                title={fp.title}
                                text={fp.text}
                                button={(onClick) => (
                                  <a onClick={onClick} className={classes.fpLink}>{type}</a>
                                )}
                              />
                            )
                          }

                          return (
                            <Typography key={`fp-${profileIndex}-${index}`} component='span' title={t(fp.name)} className={classes.fp}>
                              {type}
                            </Typography>
                          )
                        }

                        if (Array.isArray(output)) {
                          return output.map((fp, index) => displayFirepower(fp, fp, index))
                        }

                        return displayFirepower(output, fp, fpIndex)
                      })
                      .filter(Boolean)
                      .flat()
                      .reduce((prev, curr) => {
                        if (prev.length) {
                          return [prev, ', ', curr]
                        }

                        return [curr]
                      }, [])
                  }
                </TableCell>
              </Fragment>
            ))
          })
      })

    if (!weaponsDisplay.length) {
      const notes = rules
        .filter(rule => rule instanceof Notes)

      if (notes.length) {
        // we are just a notes entry
        return (
          <TableRow key='notes-0'>
            <TableCell padding='dense' className={classes.tableViewIconCell}>
              <Icon src={image} className={classes.unitAvatar} />
            </TableCell>
            <TableCell colSpan={9} padding='dense' className={classes.tableViewNameCell}>
              <Typography component='p'>
                {t(name)}
                <RulesDisplay rules={rules} classes={classes} t={t} />
              </Typography>
              <NotesDisplay rules={rules} classes={classes} t={t} />
            </TableCell>
          </TableRow>
        )
      }

      weaponsDisplay.push((
        <Fragment key='weapon-0'>
          <TableCell padding='dense' className={classes.tableViewCell}>
            -
          </TableCell>
          <TableCell padding='dense' className={classes.tableViewCell}>
            -
          </TableCell>
          <TableCell padding='dense' className={classes.tableViewCell}>
            -
          </TableCell>
        </Fragment>
      ))
    }

    const weaponCount = weaponsDisplay.length

    return (
      <>
        <TableRow>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewIconCell}>
            <Icon src={image} className={classes.unitAvatar} />
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewNameCell}>
            <Typography component='p'>
              {t(name)}
              <RulesDisplay rules={rules} />
            </Typography>
            <NotesDisplay rules={rules} />
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewCell}>
            {stats.type}
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewCell}>
            {stats.speed === 0 ? '-' : typeof stats.speed === 'string' ? t(stats.speed) : `${stats.speed}cm`}
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewCell}>
            {stats.armour === 7 ? '-' : `${stats.armour}+`}
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewCell}>
            {stats.cc === 7 ? '-' : `${stats.cc}+`}
          </TableCell>
          <TableCell padding='dense' rowSpan={weaponCount} className={classes.tableViewCell}>
            {stats.ff === 7 ? '-' : `${stats.ff}+`}
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
      </>
    )
  }
}

const mapStateToProps = (state, { unit }) => {
  return {
    unit,
    name: unit.getName(),
    stats: unit.getStats(),
    weapons: unit.getChosenWeapons(),
    rules: unit.getRules(),
    image: unit.getImage()
  }
}

const mapDispatchToProps = {}

export default component(UnitViewer, mapStateToProps, mapDispatchToProps)
