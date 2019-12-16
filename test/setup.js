const path = require('path')
const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

const ROOT = path.resolve(path.join(__dirname, '..'))
let server

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
    startServer((err, port) => {
      if (err) {
        return done(err)
      }

      process.env.APPLICATION_URL = `http://127.0.0.1:${port}`

      console.info('Server listening on', process.env.APPLICATION_URL)

      done()
    })
  },

  after: function (done) {
    if (!server) {
      return done()
    }

    server.close(done)
  }
}
