import categoryModel from '../schemas/category.schema'
import { categoryType } from '../types/category.type'

class categoryService {

    async create(category: categoryType) {
        const createdCategory = await categoryModel.create(category)
        return createdCategory
    }

    async findAll() {
        const findedCategories = await categoryModel.find()
        return findedCategories
    }

    async findById(id: string) {
        const findedCategory = await categoryModel.findById(id)
        return findedCategory
    }

    async update(id: string, category: categoryType) {
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, {
            name: category.name,
            color: category.color
        }, { new: true })

        return updatedCategory
    }

    async delete(id: string) {
        try {
            await categoryModel.findByIdAndDelete(id)
            return "categoria removida com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a categoria: ${error}`)
        }
    }

}


export default new categoryService()