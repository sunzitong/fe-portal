const NODE_ENV = process.env.NODE_ENV

const baseConfig = {
  name: 'cybereits-web-portal',
  instances: 1,
  cwd: './',
  script: './server/enter.js',
  merge_logs: true,
  error_file: 'logs/err.log',
  out_file: 'logs/out.log',
  log_date_format: 'YYYY-MM-DD HH:mm:ss',
  env: {
    NODE_ENV,
  },
}

let mergeConfig = {}

/**
 * 根据不同的环境，生成不同的配置
 */
switch (NODE_ENV) {
  case 'production':
    mergeConfig = {}
    break
  case 'development':
  default:
    mergeConfig = {
      'watch': ['server', 'config / runtime.json'],
      ignore_watch: ['node_modules', 'logs'],
    }
    break
}

const exportConfig = Object.assign({}, baseConfig, mergeConfig)

module.exports = exportConfig
