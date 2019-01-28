'use strict'

import React from 'react'
import ErrorIcon from '@material-ui/icons/Error'
import component from '../../component'
import SnackbarContent from '@material-ui/core/SnackbarContent'

const Validator = ({ army, list, t, classes }) => {
  const errors = army.validate(list, t)

  if (!errors.length) {
    return null
  }

  // dedupe
  const dedupedErrors = {}

  errors.forEach(err => {
    dedupedErrors[err] = err
  })

  return (
    <div>
      {
        Object.values(dedupedErrors)
          .map(err => {
            return (
              <SnackbarContent
                key={err}
                className={classes.errorSnackbar}
                message={
                  <p className={classes.snackbarMessage}>
                    <ErrorIcon className={classes.snackbarIcon} />
                    {typeof err === 'string' ? t(err) : err}
                  </p>
                }
              />
            )
          })
      }
    </div>
  )
}

const mapStateToProps = ({ list }) => {
  const army = list.army

  return {
    army,
    list,
    cacheBuster: Math.random()
  }
}

const mapDispatchToProps = {}

export default component(Validator, mapStateToProps, mapDispatchToProps)
