import { Router } from 'express'
import auth from '../middlewares/auth'
import UserController from '../controllers/UserController'

const routes = new Router()

routes.get('/', function (req, res, next) {
  return res.json({
    msg: 'Hello World!'
  })
})

//Session
routes.post('/register', UserController.register)
routes.post('/login', UserController.login)
routes.use(auth)

//User
routes.get('/user', UserController.show)

export default routes
