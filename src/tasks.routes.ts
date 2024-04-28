import { Router } from 'express'
import taskController from './tasks/controllers/task.controller'

const tasks = Router()
tasks.post('/tasks', taskController.create)
tasks.get('/tasks', taskController.findAll)
tasks.get('/tasks/:id', taskController.findById)
tasks.put('/tasks/:id', taskController.update)
tasks.delete('/tasks/:id', taskController.delete)


export {
    tasks
}