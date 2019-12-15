const path = require('path')
const { spawn } = require('child_process')
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
var OutputBuffer = require('output-buffer')

var stdout = new OutputBuffer(console.info)
var stderr = new OutputBuffer(console.error)

const ROOT = path.resolve(path.join(__dirname, '..'))
let server

function build (done) {
  if (process.env.SKIP_BUILD) {
    return done()
  }

  const proc = spawn('npm', ['run', 'build'], {
    cwd: ROOT,
    env: {
      ...process.env,
      CI: true
    }
  })
  proc.stdout.on('data', (data) => {
    stdout.append(data)
  })
  proc.stderr.on('data', (data) => {
    stderr.append(data)
  })
  proc.on('exit', (code) => {
    stdout.flush()
    stderr.flush()

    if (code !== 0) {
      return done(new Error(`Build exited with code ${code}`))
    }

    done()
  })
}

function startServer (done) {
  const serve = serveStatic(path.join(ROOT, 'dist'))

  // Create server
  server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
  })

  const onError = (err) => {
    server.removeListener('listening', onListening)
    done(err)
  }
  const onListening = () => {
    server.removeListener('error', onError)
    done(null, server.address().port)
  }

  server.once('error', onError)
  server.once('listening', onListening)

  server.listen(0)
}

module.exports = {
  before: function (done) {
    build((err) => {
      if (err) {
        return done(err)
      }

      startServer((err, port) => {
        if (err) {
          return done(err)
        }

        process.env.APPLICATION_URL = `http://127.0.0.1:${port}`

        console.info('Server listening on', process.env.APPLICATION_URL)

        done()
      })
    })
  },

  after: function (done) {
    if (!server) {
      return done()
    }

    server.close(done)
  }
}
