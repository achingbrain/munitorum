'use strict'

const armies = [
  'alpha-legion',
  'blood-angels',
  'daemonic-hordes',
  'dark-angels',
  'death-guard',
  'emperors-children',
  'imperial-fists',
  'imperial-militia',
  'iron-hands',
  'iron-warriors',
  'knight-household',
  'legio-titanicus',
  'mechanicum-taghmata',
  'night-lords',
  'raven-guard',
  'salamanders',
  'solar-auxilia',
  'sons-of-horus',
  'space-wolves',
  'thousand-sons',
  'ultramarines',
  'white-scars',
  'word-bearers',
  'world-eaters'
]

const detachmentTypes = [
  'line-detachments',
  'support-detachments',
  'lords-of-war'
]

module.exports = {
  'Creates lists': function (browser) {
    browser.url(process.env.APPLICATION_URL)
      .waitForElementVisible('[data-test=new-list-button]')

    armies.forEach(army => {
      browser.click('[data-test=new-list-button]')
        .waitForElementVisible('[data-test=select-game-netea-epicau-horus-heresy')
        .click('[data-test=select-game-netea-epicau-horus-heresy]')
        .waitForElementVisible(`[data-test=select-army-${army}]`)
        .click(`[data-test=select-army-${army}]`)

      // add one of every detachment type
      detachmentTypes.forEach(detachmentType => {
        browser.waitForElementVisible(`[data-test=add-${detachmentType}-button]`)
          .click(`[data-test=add-${detachmentType}-button]`)
          .waitForElementVisible(`[data-test=add-${detachmentType}-list]`)
          .elements('css selector', `[data-test^=add-${detachmentType}-list-item-]`, ({ value }) => {
            value.forEach(({ ELEMENT: element }) => {
              browser.elementIdAttribute(element, 'data-test', ({ value }) => {
                const name = value.replace(`add-${detachmentType}-list-item-`, '')

                console.info('Adding', name)
              })
            })
          })
      })
    })

    browser.end()
  }
}
