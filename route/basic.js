import { Router } from 'express'
import basic from '../controller/basic.js'
import { isLoggedIn, isLoggedOut, isCookieSet } from '../middleware/authenticate.js'
const router = Router()

router.get(['/', '/home'], isLoggedOut, basic.getHome)

router.get('/dashboard', isLoggedIn, basic.getDashboard)

router.get('/private', isLoggedIn, isCookieSet, basic.getPrivate)

router.get('/set-cookie', isLoggedIn, basic.getSetCookie)

router.get('/set-wrong-cookie', isLoggedIn, basic.getSetWrongCookie)

router.get('/remove-cookie', isLoggedIn, basic.getRemoveCookie)

router.get('/signup', isLoggedOut, basic.getSignup)

router.post('/signup', isLoggedOut, basic.postSignup)

router.get('/signin', isLoggedOut, basic.getSignin)

router.post('/signin', isLoggedOut, basic.postSignin)

router.get('/logout', isLoggedIn, basic.getLogout)

export { router }