'use strict'

import React, { Component } from 'react'
import component from '../components/component'
import {
  newList
} from '../store/actions'
import NewList from '../components/new-list'
import InvalidList from '../components/invalid-list'
import ViewNavigation from '../components/view-navigation'
import ViewListHeader from '../components/view-list-header'
import EditNavigation from '../components/edit-navigation'
import EditListHeader from '../components/edit-list-header'
import ListLinkReceiver from '../components/list-link-receiver'

class Page extends Component {
  state = {
    view: false
  }

  handleNewList = () => {
    const {
      newList
    } = this.props

    newList()
  }

  handleViewList = () => {
    this.setState({
      view: true
    })
  }

  handleEditList = () => {
    this.setState({
      view: false
    })
  }

  render () {
    const {
      list,
      history,
      location: {
        hash
      }
    } = this.props
    const {
      view
    } = this.state

    if (list) {
      if (view) {
        const ListViewer = list.getViewer()

        return (
          <>
            <InvalidList>
              <ViewNavigation toolbar={
                <ViewListHeader onEdit={this.handleEditList} />
              }
              >
                <ListViewer />
              </ViewNavigation>
            </InvalidList>
            <ListLinkReceiver history={history} hash={hash} />
          </>
        )
      }

      const ListEditor = list.getEditor()

      return (
        <>
          <InvalidList>
            <EditNavigation toolbar={
              <EditListHeader onView={this.handleViewList} />
            }
            >
              <ListEditor />
            </EditNavigation>
          </InvalidList>
          <ListLinkReceiver history={history} hash={hash} />
        </>
      )
    }

    return (
      <>
        <NewList />
        <ListLinkReceiver history={history} hash={hash} />
      </>
    )
  }
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {
  newList
}

export default component(Page, mapStateToProps, mapDispatchToProps)
