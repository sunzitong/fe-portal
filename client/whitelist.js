import React from 'react'
import { render } from 'react-dom'
import injectTabEvent from 'react-tap-event-plugin'
import createHashHistory from 'history/createHashHistory'

import './common/polyfill'
import reducers from './reducers'
import configureStore from './store'
import Root from './containers/Root'
import './styles/main.scss'

// inject react tab event
injectTabEvent()

// #region Init fontsize
const initFontSize = function () {
  let fs = (document.body.clientWidth + 16) / 25.875
  document.body.parentElement.style.fontSize = `${fs > 16 ? 16 : fs}px`
}

window.onresize = initFontSize
initFontSize()
// #endregion

const customHistory = createHashHistory()
const MOUNT_NODE = document.getElementById('root')

const store = configureStore(reducers, {}, customHistory)

let renderIndex = () => {
  render(
    <Root
      store={store}
      history={customHistory}
    />,
    MOUNT_NODE,
  )
}

renderIndex()

// This code is excluded from production bundle
if (module.hot) {

  module.hot.accept('./reducers/index', () => {
    /* eslint-disable */
    store.replaceReducer(require('./reducers/index').default)
  })

  module.hot.accept('./containers/Root', () => {
    renderIndex()
  })
}
