import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import * as dialogReducers from './dialogReducers'
import toastMessage from './toastReducers'
import * as globalReducers from './globalReducers'

const rootReducer = combineReducers({
  toastMessage: toastMessage,
  alertMessage: dialogReducers.alertMessage,
  confirmMessage: dialogReducers.confirmMessage,
  loginDialogOpened: globalReducers.loginDialog,
  userInfoDialogOpened: globalReducers.userInfoDialog,
  sideMenuOpened: globalReducers.sideMenu,
  platforms: globalReducers.platforms,
  title: globalReducers.title,
  router,
})

export default rootReducer
