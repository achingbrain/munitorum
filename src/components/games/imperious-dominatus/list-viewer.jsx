'use strict'

import component from '../../component'

const ListViewer = ({ list, t }) => {
  list.army.validate(list, t)

  return null
}

const mapStateToProps = ({ list }) => ({
  list,
  cacheBuster: Date.now()
})

const mapDispatchToProps = {}

export default component(ListViewer, mapStateToProps, mapDispatchToProps)
