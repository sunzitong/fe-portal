import WhiteList from '../containers/Whitelist'
import Participate from '../containers/Participate'
import HomePage from '../containers/Home'

export const WhitelistMaps = [
  {
    text: 'Whitelist',
    path: '/',
    component: WhiteList,
  },
  {
    text: 'Participate',
    path: ['/pt/:token', '/pt'],
    component: Participate,
  },
]

export const HomeMaps = [
  {
    text: 'Home',
    path: '/',
    component: HomePage,
  },
]
