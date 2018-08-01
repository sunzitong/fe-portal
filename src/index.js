import '@babel/polyfill'
import 'url-polyfill'
import dva from 'dva'

import createBrowserHistory from 'history/createBrowserHistory'

import createLoading from 'dva-loading'
import './index.less'

const app = dva({
  history: createBrowserHistory(),
})

app.use(createLoading())

app.router(require('./routes/index').default)

app.start('#root')

export default app._store; // eslint-disable-line
