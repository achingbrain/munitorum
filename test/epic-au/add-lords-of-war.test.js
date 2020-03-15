'use strict'

const games = require('../dist/rules')
const lang = require('../dist/lang')
const EpicAU = games[0]
const suite = {}

EpicAU.armies.forEach(army => {
  army.lordsOfWar.forEach(detachment => {
    suite[`Adds ${lang.translation[detachment.code]} lord of war to ${lang.translation[army.code]} list`] = function (browser) {
      browser.url(process.env.APPLICATION_URL)
        .waitForElementVisible('[data-test=new-list-button]')
        .click('[data-test=new-list-button]')
        .waitForElementVisible('[data-test=select-game-netea-epicau-horus-heresy')
        .click('[data-test=select-game-netea-epicau-horus-heresy]')
        .waitForElementVisible(`[data-test=select-army-${army.name}]`)
        .click(`[data-test=select-army-${army.name}]`)
        .waitForElementVisible('[data-test=add-lords-of-war-button]')
        .click('[data-test=add-lords-of-war-button]')
        .waitForElementVisible(`[data-test=add-lords-of-war-list-item-${detachment.code}]`)
        .click(`[data-test=add-lords-of-war-list-item-${detachment.code}]`)
        .waitForElementVisible(`[data-test=lords-of-war-${detachment.code}-editor]`)
        .click('[data-test=view-list-button]')
        .waitForElementVisible(`[data-test=lords-of-war-${detachment.code}-viewer]`)

      browser.end()
    }
  })
})

module.exports = suite
