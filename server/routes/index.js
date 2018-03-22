import Express from 'express'
import home from './home'
import notFound from './404'
import invite from './invite'
import inviteRule from './inviteRule'

const router = Express.Router()

router.get(['/', '/wl', '/pwl', '/pt*'], home)
router.get(['/invite'], invite)
router.get(['/inviteRule'], inviteRule)
router.get(/^(?!.*(webpack|\.))/ig, notFound)

export default router
