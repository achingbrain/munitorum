import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const camel = (kebab) => {
  return kebab
    .split('-')
    .map((str, index) => {
      if (index === 0) {
        return str
      }

      return str.substring(0, 1).toUpperCase() + str.substring(1)
    })
    .join('')
}

const INPUT_DIR = path.resolve(path.join(process.cwd(), 'src', 'images'))

const indexFile = (imports, images) => `
${
  Object.keys(imports)
    .map(key => `import ${key} from '${imports[key]}'`)
    .join('\r\n')
}

const IMAGES = {
${
  Object.keys(images)
    .map(key => `  '${key}': ${images[key]}`)
    .join(',\r\n')
}
}

const findImage = (name) => {
  const parts = name.split('-')
  let needle = parts.join('-')

  while (needle) {
    if (IMAGES[needle]) {
      return IMAGES[needle]
    }

    parts.pop()
    needle = parts.join('-')
  }

  return skull
}

export default findImage
`

export const buildImages = async () => {
  const imageIndexPath = path.resolve(path.join(INPUT_DIR, 'index.js'))
  const contents = {}
  const images = {}
  const imports = {}

  fs.readdirSync(INPUT_DIR)
    .filter(fileName => fileName.endsWith('.svg'))
    .map(fileName => {
      const hash = crypto.createHmac('sha1', 'super secret')
        .update(fs.readFileSync(path.join(INPUT_DIR, fileName), 'utf8'))
        .digest('hex')
      const name = fileName.replace(/\.svg$/, '')

      if (!contents[hash]) {
        contents[hash] = camel(name)
        imports[contents[hash]] = `./${fileName}`
      }

      images[name] = contents[hash]
    })

  fs.writeFileSync(imageIndexPath, indexFile(imports, images))
}
