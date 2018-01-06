import path from 'path'
import Express from 'express'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import bodyParser from 'body-parser'
import http from 'http'
import ejs from 'ejs'
import favicon from 'serve-favicon'

import config from '../config/env'
import webpackClientConfig from '../config/webpack.config'
import router from './routes'

// init chatroom socket service
const app = new Express()
const server = http.createServer(app)
const utilsPaths = config.utils_paths

// static resource
app.use(Express.static(path.resolve(__dirname, '../public')))
app.use('/static', Express.static(utilsPaths.dist()))
app.set('views', path.join(__dirname, 'views'))
app.use(favicon(path.resolve(__dirname, '../public/images/favicon.ico')))

// view engine
app.engine('html', ejs.renderFile)
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false,
}))

app.use(router)

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
