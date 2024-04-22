import { ICategoryRepository } from '../domain/category.repository.model'
import { ICreateCategoryRequest } from '../domain/create.category'

export const createCategoryUseCase =
  (repository: ICategoryRepository) =>
  async (request: ICreateCategoryRequest) => {
    try {
      const response = await repository.createCategory(request)
      return response
    } catch (error) {
      console.log(error)
    }
  }
