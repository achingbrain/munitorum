'use strict'

const games = require('../dist/rules')
const lang = require('../dist/lang')
const EpicAU = games[0]
const suite = {}

EpicAU.armies.forEach(army => {
  army.supportDetachments.forEach(detachment => {
    suite[`Adds ${lang.translation[detachment.code]} support detachment to ${lang.translation[army.code]} list`] = function (browser) {
      browser.url(process.env.APPLICATION_URL)
        .waitForElementVisible('[data-test=new-list-button]')
        .click('[data-test=new-list-button]')
        .waitForElementVisible('[data-test=select-game-netea-epicau-horus-heresy')
        .click('[data-test=select-game-netea-epicau-horus-heresy]')
        .waitForElementVisible(`[data-test=select-army-${army.name}]`)
        .click(`[data-test=select-army-${army.name}]`)
        .waitForElementVisible('[data-test=add-support-detachments-button]')
        .click('[data-test=add-support-detachments-button]')
        .waitForElementVisible(`[data-test=add-support-detachments-list-item-${detachment.code}]`)
        .click(`[data-test=add-support-detachments-list-item-${detachment.code}]`)
        .waitForElementVisible(`[data-test=support-detachments-${detachment.code}-editor]`)
        .click('[data-test=view-list-button]')
        .waitForElementVisible(`[data-test=support-detachments-${detachment.code}-viewer]`)

      browser.end()
    }
  })
})

module.exports = suite
