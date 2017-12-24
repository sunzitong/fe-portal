import Home from 'material-ui/svg-icons/action/home'

import WhiteList from '../containers/Whitelist'
import HomePage from '../containers/Home'

export const WhitelistMaps = [
  {
    text: 'Whitelist',
    path: '/',
    icon: <Home />,
    component: WhiteList,
  },
]

export const HomeMaps = [
  {
    text: 'Home',
    path: '/',
    icon: <Home />,
    component: HomePage,
  },
]
