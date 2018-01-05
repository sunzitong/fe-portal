import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import HomeRouteMaps from '../routes'
import { setTitle } from '../actions/global'

const HomeRoot = ({ store, history }) => (
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

export default HomeRoot
