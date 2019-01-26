'use strict'

import sha256 from 'hash.js/lib/hash/sha/256'
import kebab from './kebab-case'
import findImage from '../images'

const hash = (string) => {
  return parseInt(
    sha256()
      .update(
        string
      )
      .digest('hex')
      .substring(0, 10),
    16)
}

const registry = {}

const withType = (clazz) => {
  const code = kebab(clazz.name)
  const h = hash(code)

  if (registry[h]) {
    console.warn(code, 'already identified, add a disambiguator')
  }

  registry[h] = clazz

  clazz.type = h
  clazz.code = code
  clazz.image = findImage(code)

  clazz.prototype.type = h
  clazz.prototype.code = code
  clazz.prototype.image = findImage(code)

  return clazz
}

export const find = (id) => {
  return registry[id]
}

export default withType
