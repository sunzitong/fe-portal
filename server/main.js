import path from 'path'
import Express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import bodyParser from 'body-parser'
import http from 'http'

import config from '../config/index'
import webpackClientConfig from '../config/webpack.config'
import routeIniter from './routes/RouteInitializer'

// init chatroom socket service
const app = new Express()
const server = http.createServer(app)
const paths = config.utils_paths

// static resource
app.use(Express.static(path.resolve(__dirname, '../public')))
app.use('/static', Express.static(paths.dist()))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false,
}))

routeIniter(app)

if (config.globals.__DEV__) {
  let compiler = webpack(webpackClientConfig)
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackClientConfig.output.publicPath,
  }))
  app.use(hotMiddleware(compiler))
}

server.listen(config.server_port, () => {
  console.log(`Server is listening on port ${config.server_port}`)
})
