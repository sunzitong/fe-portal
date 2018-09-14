const path = require('path');
const { name } = require('./package.json');
const ENV = process.env.NODE_ENV
const IS_ALPHA = process.env.IS_ALPHA

let publicPath = '/'

if (ENV === 'production') {
  if (IS_ALPHA === 'true') {
    publicPath = `//cybereits-alpha.oss-cn-beijing.aliyuncs.com/dist/${name}/`
  } else {
    publicPath = `//static.cybereits.cn/dist/${name}/`
  }
}

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    'transform-decorators-legacy',
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  ignoreMomentLocale: true,
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath,
  hash: true,
};
