import userModel from '../schemas/user.schema'
import taskModel from '../../tasks/schemas/task.schema'
import categoryModel from '../../categories/schemas/category.schema'
import { userType } from '../types/user.type'

class userService {

    async create(user: userType) {
        const createdUser = await userModel.create(user)
        return createdUser
    }

    async findAll() {
        const findedUsers = await userModel.find()
        return findedUsers
    }

    async findById(id: string) {
        const findedUser = await userModel.findById(id)
        return findedUser
    }

    async update(id: string, user: userType) {
        const updatedUser = await userModel.findByIdAndUpdate(id, {
            name: user.name,
            weight: user.weight,
            email: user.email,
            password: user.password,
            tasks: user.tasks
        }, { new: true })

        return updatedUser
    }

    async delete(id: string) {
        try {
            const user = await userModel.findById(id);
            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            for (let taskId of user.tasks) {

                const task = await taskModel.findById(taskId);
                if (task && task.category) {
                    await categoryModel.findByIdAndUpdate(task.category, { $pull: { tasks: taskId } });
                }
                await taskModel.findByIdAndDelete(taskId);
            }

            await userModel.findByIdAndDelete(id);
    
            return "Usuário removido com sucesso";
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o usuário: ${error}`);
        }
    }
}


export default new userService()