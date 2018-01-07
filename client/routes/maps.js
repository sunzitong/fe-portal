import PublicWhitelistRegStage from '../containers/PublicWhitelistRegStage'
import WhitelistClosed from '../containers/WhitelistClosed'
import PublicParticipate from '../containers/PublicParticipate'
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
    text: 'PublicWhiteList',
    path: '/pwl',
    component: PublicWhitelistRegStage,
  },
  {
    text: 'Participate',
    path: ['/pt/:token', '/pt'],
    component: PublicParticipate,
  },
]
