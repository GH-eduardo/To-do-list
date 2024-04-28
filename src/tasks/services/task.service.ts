import taskModel from '../schemas/task.schema'
import { taskType } from '../types/task.type'

class taskService {

    async create(task: taskType) {
        const createdTask = await taskModel.create(task)
        return createdTask
    }

    async findAll() {
        const findedTasks = await taskModel.find()
        return findedTasks
    }

    async findById(id: string) {
        const findedTask = await taskModel.findById(id)
        return findedTask
    }

    async update(id: string, task: taskType) {
        const updatedTask = await taskModel.findByIdAndUpdate(id, {
            title: task.title,
            description: task.description,
            creation_date: task.creation_date,
            conclusion_date: task.conclusion_date,
            type: task.type,
            category: task.category,
            status: task.status,
            author: task.author
        }, { new: true })

        return updatedTask
    }

    async delete(id: string) {
        try {
            await taskModel.findByIdAndDelete(id)
            return "Tarefa removida com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a tarefa: ${error}`)
        }
    }

}


export default new taskService()