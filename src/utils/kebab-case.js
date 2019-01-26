'use strict'

const kebab = (string) => {
  let output = ''
  let upper = string.toUpperCase()

  for (let i = 0; i < string.length; i++) {
    if (i > 0 && string[i] === upper[i]) {
      output += '-'
    }

    output += string[i].toLowerCase()
  }

  return output
}

module.exports = kebab
