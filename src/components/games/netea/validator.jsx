'use strict'

import React from 'react'
import ErrorIcon from '@material-ui/icons/Error'
import component from '../../component'
import SnackbarContent from '@material-ui/core/SnackbarContent'

const Validator = ({ errors, classes, t }) => {
  const dedupedErrors = {}

  errors.forEach(err => {
    dedupedErrors[err] = err
  })

  return (
    <>
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
    </>
  )
}

export default component(Validator)
