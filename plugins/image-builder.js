const fs = require('fs')
const path = require('path')
const kebab = require('../src/utils/kebab-case')

const INPUT_DIR = path.resolve(path.join(__dirname, '..', 'src', 'images'))

const indexFile = (svgs) => `
${svgs.map(svg => {
    return `import ${svg.name} from '${svg.path}'`
  }).join('\r\n')}

const IMAGES = {
${svgs.map(svg => {
    return `  '${kebab(svg.name)}': ${svg.name}`
  }).join(',\r\n')}
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

class ImageBuilderPlugin {
  apply (compiler) {
    compiler.hooks.afterPlugins.tap(
      'ImageBuilderPlugin',
      (compilation) => {
        const svgs = fs.readdirSync(INPUT_DIR)
        const imageIndexPath = path.resolve(path.join(INPUT_DIR, 'index.js'))

        fs.writeFileSync(imageIndexPath, indexFile(
          svgs
            .filter(fileName => fileName.endsWith('.svg'))
            .map(fileName => ({
              name: fileName
                .replace(/\.svg$/, '')
                .split('-')
                .map((str, index) => {
                  if (index === 0) {
                    return str
                  }

                  return str.substring(0, 1).toUpperCase() + str.substring(1)
                })
                .join(''),
              path: `./${fileName}`
            }))
        ))
      }
    )
  }
}

module.exports = ImageBuilderPlugin
