import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import uuid from 'uuid/v4'

import App from '../containers/App'
import { WhitelistMaps, HomeMaps } from './maps'

export const WhitelistRouteMaps = ({ history, setTitle }) => (
  <App history={history} >
    <ConnectedRouter history={history}>
      <div className="container">
        {
          WhitelistMaps.map(({ path, text, component: Component, ...rest }) => (
            <Route
              exact
              path={path}
              key={uuid()}
              {...rest}
              render={(props) => {
                setTimeout(() => setTitle(text))
                return (<Component {...props} />)
              }}
            />
          ))
        }
      </div>
    </ConnectedRouter>
  </App>
)

WhitelistRouteMaps.propTypes = {
  history: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
}

export const HomeRouteMaps = ({ history, setTitle }) => (
  <App history={history} >
    <ConnectedRouter history={history}>
      <div className="container">
        {
          HomeMaps.map(({ path, text, component: Component, ...rest }) => (
            <Route
              exact
              path={path}
              key={uuid()}
              {...rest}
              render={(props) => {
                setTimeout(() => setTitle(text))
                return (<Component {...props} />)
              }}
            />
          ))
        }
      </div>
    </ConnectedRouter>
  </App>
)

HomeRouteMaps.propTypes = {
  history: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
}
