import { Router } from 'express'
import userController from './users/controllers/user.controller'

const users = Router()
users.post('/users', userController.create)
users.get('/users', userController.findAll)
users.get('/users/:id', userController.findById)
users.put('/users/:id', userController.update)
users.delete('/users/:id', userController.delete)


export {
    users
}