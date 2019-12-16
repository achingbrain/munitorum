'use strict'

import React, {
  Component
} from 'react'
import component from './component'
import List from '@material-ui/core/List'
import {
  createList
} from '../store/actions'
import EditNavigation from './edit-navigation'
import games from '../rules'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SelectGame from './select-game'
import SelectArmy from './select-army'

class NewList extends Component {
  state = {
    game: null
  }

  handleGameSelect = (game) => {
    this.setState({ game })
  }

  handleArmySelect = (army) => {
    const {
      t,
      createList
    } = this.props
    const {
      game
    } = this.state

    createList({
      name: t(army.code),
      army,
      game
    })
  }

  handleBack = () => {
    this.setState({ game: null })
  }

  render () {
    const {
      classes,
      t
    } = this.props
    const {
      game
    } = this.state

    if (game) {
      return (
        <EditNavigation toolbar={
          <>
            <Typography variant='h6' color='inherit' className={classes.grow} noWrap>
              {t(game.name)}
            </Typography>
            <Button
              color='inherit'
              size='small'
              onClick={this.handleBack}
            >Back
            </Button>
          </>
        }
        >
          <List component='nav'>
            {
              game.armies.map((army) => {
                return (
                  <SelectArmy key={army.type} army={army} onSelect={this.handleArmySelect} />
                )
              })
            }
          </List>
        </EditNavigation>
      )
    }

    return (
      <EditNavigation toolbar={
        <>
          <Typography variant='h6' color='inherit' className={classes.grow} noWrap>
            {t('select-game-system')}
          </Typography>
        </>
      }
      >
        <List component='nav'>
          {
            games.map((game) => {
              return (
                <SelectGame key={game.type} game={game} onSelect={this.handleGameSelect} />
              )
            })
          }
        </List>
      </EditNavigation>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {
  createList
}

export default component(NewList, mapStateToProps, mapDispatchToProps)
