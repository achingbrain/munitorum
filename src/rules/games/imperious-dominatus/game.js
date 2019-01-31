'use strict'

import Game from '../game'
import ImperiousDominatusList, {
  InvalidList
} from './list'
import DarkAngels from './armies/dark-angels'
import Card from './cards/card'
import withType from './with-type'

export default class ImperiousDominatus extends Game {
  constructor () {
    super('imperious-dominatus', 'imperious-dominatus-description')

    this.armies = [
      new DarkAngels(this)
    ]
  }

  newList (name, army) {
    return new ImperiousDominatusList(this, name, army)
  }

  listFromJSON (json) {
    try {
      const army = this.armies.find(item => item.type === json.army)

      const list = new ImperiousDominatusList(this, json.name, army)
      list.id = json.id

      if (json.detachments) {
        list.detachments = json.detachments
          .map(item => Card.fromJSON(item, list))
      }

      return list
    } catch (error) {
      console.error(error)
      return new InvalidList(json, error)
    }
  }

  toJSON () {
    return {
      id: this.id
    }
  }
}

withType(ImperiousDominatus)
