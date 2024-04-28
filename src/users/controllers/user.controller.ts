import { Request, Response } from 'express'
import taskService from "../services/user.service";

class taskController {
    async create(req: Request, res: Response) {
        const createdTask = await taskService.create(req.body)
        res.status(201)
        return res.json(createdTask)
    }

    async findAll(req: Request, res: Response) {
        const findedTasks = await taskService.findAll()
        res.status(200)
        return res.json(findedTasks)
    }

    async findById(req: Request, res: Response) {
        const findedTask = await taskService.findById(req.params.id)
        res.status(200)
        return res.json(findedTask)
    }

    async update(req: Request, res: Response) {
        const updatedTask = await taskService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedTask)
    }

    async delete(req: Request, res: Response) {
        const deleted = await taskService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new taskController()