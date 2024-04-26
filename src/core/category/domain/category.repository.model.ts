import {
  ICreateCategoryRequest,
  ICreateCategoryResponse
} from './create.category'
import { IGetAllCategoriesResponse } from './get.all.categories'

export interface ICategoryRepository {
  getAllCategories(): Promise<IGetAllCategoriesResponse[]>
  createCategory(
    request: ICreateCategoryRequest
  ): Promise<ICreateCategoryResponse>
}
