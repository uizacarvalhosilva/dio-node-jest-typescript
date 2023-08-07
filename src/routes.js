import { Router } from 'express'
import { usersController } from './controllers/usersController.js'

const routes = Router()


routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

export { routes }