'use strict'

import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import styles from '../components/styles'

const component = (Component, mapStateToProps, mapDispatchToProps) => {
  const hoc = withStyles(styles, { withTheme: true })(
    withNamespaces()(Component)
  )

  if (mapStateToProps && mapDispatchToProps) {
    return connect(mapStateToProps, mapDispatchToProps)(hoc)
  }

  return hoc
}

export default component
