import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { HomeRouteMaps, WhitelistRouteMaps } from '../routes'
import { setTitle } from '../actions/global'

export const HomeRoot = ({ store, history }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <HomeRouteMaps
        history={history}
        setTitle={title => store.dispatch(setTitle(title))}
      />
    </MuiThemeProvider>
  </Provider>
)

HomeRoot.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export const WhitelistRoot = ({ store, history }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <WhitelistRouteMaps
        history={history}
        setTitle={title => store.dispatch(setTitle(title))}
      />
    </MuiThemeProvider>
  </Provider>
)

WhitelistRoot.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
