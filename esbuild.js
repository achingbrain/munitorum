import esbuild from 'esbuild'
import { promisify } from 'util'
import c from 'copy'
import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'
import { writeFile } from 'fs/promises'
import { buildImages } from './plugins/image-builder.js'

const copy = promisify(c)

async function bundle () {
  await buildImages()

  await copy('./src/index.html', 'dist', {
    srcBase: 'src'
  })
  await copy('./src/index.css', 'dist', {
    srcBase: 'src'
  })
  await copy('./src/images/*', 'dist', {
    srcBase: 'images'
  })

  const meta = await esbuild.build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    minify: true,
    keepNames: true,
    sourcemap: true,
    publicPath: '/',
    target: [
      'chrome60', 'firefox60', 'safari11', 'edge18'
    ],
    define: {
      global: 'globalThis',
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
      'process.env.NODE_DEBUG': `"${process.env.NODE_ENV === 'development'}"`
    },
    loader: {
      '.png': 'file',
      '.jpg': 'file',
      '.gif': 'file',
      '.pdf': 'file',
      '.svg': 'text'
    },
    outdir: 'dist',
    watch: process.env.NODE_ENV === 'development',
    metafile: true
  })

  await writeFile('./dist/esbuild.json', JSON.stringify(meta, null, 2), 'utf-8')

  // if NODE_ENV === 'development' the previous command will never return due to the `watch`
  // config setting so anything below here will only happen during CI deployments

  await imagemin(['dist/*.{jpg,png}'], {
    destination: 'dist',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  })
  await imagemin(['assets/routes/*.{jpg,png}'], {
    destination: 'dist/routes',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  })
}

bundle()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
