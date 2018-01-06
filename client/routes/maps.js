import WhiteList from '../containers/Whitelist'
import WhitelistClosed from '../containers/WhitelistClosed'
import Participate from '../containers/Participate'
import HomePage from '../containers/Home'

export default [
  {
    text: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    text: 'WhitelistRegClosed',
    path: '/wl',
    component: WhitelistClosed,
  },
  {
    text: 'EarlyStageWhiteList',
    path: '/eswl',
    component: WhiteList,
  },
  {
    text: 'Participate',
    path: ['/pt/:token', '/pt'],
    component: Participate,
  },
]
