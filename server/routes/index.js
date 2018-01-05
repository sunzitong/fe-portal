import home from './home'

export default function (app) {
  app.get(['/', '/wl'], home)
}
