import Express from 'express'
import home from './home'
import notFound from './404'
import invite from './invite'

const router = Express.Router()

router.get(['/', '/wl', '/pwl', '/pt*'], home)
router.get(['/', '/invite'], invite)
router.get(/^(?!.*(webpack|\.))/ig, notFound)

export default router
