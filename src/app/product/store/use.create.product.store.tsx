import { create } from 'zustand'
import { ICreateProductRequest } from '../../../core/product/domain/create.product'
import { productRepository } from '../../../core/product/infrastructure/product.repository'
import { createProductUseCase } from '../../../core/product/application/create.product.use.case'

interface State {
  loadingCreateProduct: boolean
  createProduct: (data: ICreateProductRequest) => Promise<void>
}

const createProduct = createProductUseCase(productRepository)

export const useCreateProductStore = create<State>((set) => ({
  loadingCreateProduct: false,
  createProduct: async (data) => {
    set({ loadingCreateProduct: true })
    try {
      await createProduct(data)
    } catch (err) {
      console.error(err)
    } finally {
      set({ loadingCreateProduct: false })
    }
  }
}))
