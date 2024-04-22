import { ICategoryRepository } from '../domain/category.repository.model'

export const getAllCategoriesUseCase = (repository: ICategoryRepository) =>
  repository.getAllCategories
