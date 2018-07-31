import React from 'react'
// import PropTypes from 'prop-types'
import { routerRedux, Route } from 'dva/router'
// import { Route } from 'react-router-dom'
import uuid from 'uuid/v4'

// import App from '../containers/App'
import HomeMaps from './maps'

const { ConnectedRouter } = routerRedux

const HomeRouteMaps = ({ history }) => (
  <ConnectedRouter history={history}>
    <div style={{ height: '100%' }}>
      {
        HomeMaps.map(({ path, text, component: Component, ...rest }) => (
          <Route
            exact
            path={path}
            key={uuid()}
            {...rest}
            render={(props) => {
              console.log(1)
              // setTimeout(() => setTitle(text))
              return (<Component {...props} />)
            }}
          />
        ))
      }
    </div>
  </ConnectedRouter>
)

// HomeRouteMaps.propTypes = {
//   history: PropTypes.object.isRequired,
//   setTitle: PropTypes.func.isRequired,
// }

export default HomeRouteMaps
