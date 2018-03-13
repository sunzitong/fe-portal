import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import * as dialogReducers from './dialogReducers'
import toastMessage from './toastReducers'
import * as globalReducers from './globalReducers'

const rootReducer = combineReducers({
  toastMessage: toastMessage,
  alertMessage: dialogReducers.alertMessage,
  confirmMessage: dialogReducers.confirmMessage,
  title: globalReducers.title,
  router,
})

export default rootReducer
