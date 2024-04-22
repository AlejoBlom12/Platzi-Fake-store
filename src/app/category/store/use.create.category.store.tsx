import { create } from 'zustand'
import { ICreateCategoryRequest } from '../../../core/category/domain/create.category'
import { categoryRepository } from '../../../core/category/infraestructura/category.repository'
import { createCategoryUseCase } from '../../../core/category/application/create.category.use.case'

interface State {
  loadingCreateCategory: boolean
  createCategory: (data: ICreateCategoryRequest) => Promise<void>
}

const createCategory = createCategoryUseCase(categoryRepository)

export const useCreateCategoryStore = create<State>((set) => ({
  loadingCreateCategory: false,
  createCategory: async (data) => {
    set({ loadingCreateCategory: true })
    try {
      await createCategory(data)
    } catch (err) {
      console.error(err)
    } finally {
      set({ loadingCreateCategory: false })
    }
  }
}))
