import viewRoutes from '../views/index'

export default function (app) {
  app.use('/', viewRoutes)
}
