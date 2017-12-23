import viewRoutes from '../views/whitelist'

export default function (app) {
  app.use('/wl', viewRoutes)
}
