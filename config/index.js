const path = require('path')
const ip = require('ip')

const PORT = 8001

let config = {
  env: process.env.NODE_ENV || 'development',
  path_base: path.resolve(__dirname, '..'),
  api_server: 'http://192.168.3.11:8000',
  dir_web: 'client',
  dir_dist: 'dist',
  dir_server: 'server',
  server_host: ip.address(),
  server_port: process.env.PORT || PORT,
}

function base(...args) {
  return path.resolve(config.path_base, ...args)
}

config.utils_paths = {
  base: base,
  web: base.bind(null, config.dir_web),
  dist: base.bind(null, config.dir_dist),
}

config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env),
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production',
  '__TEST__': config.env === 'test',
}

module.exports = config
