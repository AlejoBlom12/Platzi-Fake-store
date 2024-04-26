import { create } from 'zustand'
import { IGetAllCategoriesResponse } from '../../../core/category/domain/get.all.categories'
import { getAllCategoriesUseCase } from '../../../core/category/application/get.all.categories.use.case'
import { categoryRepository } from '../../../core/category/infraestructura/category.repository'

interface AllState {
  allCategories: IGetAllCategoriesResponse[] | null
  loadingAllCategories: boolean
  getAllCategories: () => void
}

const getAllCategories = getAllCategoriesUseCase(categoryRepository)

export const useCategoryStore = create<AllState>((set) => ({
  allCategories: null,
  loadingAllCategories: true,
  getAllCategories: async () => {
    set({
      loadingAllCategories: true
    })
    try {
      const data = await getAllCategories()
      set({
        allCategories: data
      })
    } catch (err) {
      console.error(err)
    } finally {
      set({
        loadingAllCategories: false
      })
    }
  }
}))
