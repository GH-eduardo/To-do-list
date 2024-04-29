import taskModel from '../schemas/task.schema'
import userModel from '../../users/schemas/user.schema'
import categoryModel from '../../categories/schemas/category.schema'
import { taskType } from '../types/task.type'

class taskService {

    async create(task: taskType) {
        const createdTask = await taskModel.create(task)
        const updatedUser = await userModel.findByIdAndUpdate(
            task.author,
            { $push: { tasks: createdTask._id } },
            { new: true }
        );
        const updatedCategory = await categoryModel.findByIdAndUpdate(
            task.category,
            { $push: { tasks: createdTask._id } },
            { new: true }
        );
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

    async findAllByUserId(userId: string) {
        return await taskModel.find({ author: userId });
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
            const task = await taskModel.findById(id);
            if (!task) {
                throw new Error('Tarefa não encontrada');
            }
    
            await userModel.findOneAndUpdate({ _id: task.author }, { $pull: { tasks: id } });
            await categoryModel.findOneAndUpdate({ _id: task.category }, { $pull: { tasks: id } });
    
            await taskModel.findByIdAndDelete(id);
    
            return "Tarefa removida com sucesso";
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a tarefa: ${error}`);
        }
    }
}


export default new taskService()