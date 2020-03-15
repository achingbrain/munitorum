'use strict'

function ephemeralPort (min = 49152, max = 65535) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const WEBRIVER_PORT = ephemeralPort()

// config used to test examples
module.exports = {
  src_folders: ['epic-au'],
  output_folder: '../reports/nightwatch',

  webdriver: {
    start_process: true,
    server_path: '../node_modules/.bin/chromedriver',
    port: WEBRIVER_PORT,
    cli_args: [
      `--port=${WEBRIVER_PORT}`
    ]
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            'headless',
            'window-size=1280,1024'
          ]
        }
      },
      screenshots: {
        enabled: true,
        path: '../reports/nightwatch',
        on_failure: true,
        on_error: true
      }
    }
  },

  globals_path: './setup.js',

  globals: {
    asyncHookTimeout: 120000,
    waitForConditionTimeout: 60000
  },

  test_workers: {
    enabled: false,
    workers: 'auto'
  }
}
