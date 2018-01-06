import Express from 'express'
import home from './home'
import notFound from './404'

const router = Express.Router()

router.get(['/', '/wl', '/eswl'], home)
router.get(/^(?!.*(webpack|\.))/ig, notFound)

export default router
