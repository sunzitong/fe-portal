import whitelist from './whitelist'
import home from './home'

export default function (app) {
  app.get('/wl', whitelist)
  app.get(['/', '/index'], home)
}
