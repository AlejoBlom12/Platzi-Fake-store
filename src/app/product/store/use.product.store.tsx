import { create } from 'zustand'
import { IGetAllProductsRequest, IGetAllProductsResponse } from '../../../core/product/domain/get.all.products'
import {
  IGetSingleProductRequest,
  IGetSingleProductResponse
} from '../../../core/product/domain/get.single.product'

import { productRepository } from '../../../core/product/infrastructure/product.repository'
import { getSingleProductUseCase } from '../../../core/product/application/get.single.product.use.case'
import { getAllProductsUseCase } from '../../../core/product/application/get.all.products.use.case'

interface State {
  singleProduct: IGetSingleProductResponse | null
  getSingleProduct: (body: IGetSingleProductRequest) => void
  loadingProduct: boolean
}

interface AllState {
  allProducts: IGetAllProductsResponse[] | null
  loadingAllProducts: boolean
  getAllProducts: (body: IGetAllProductsRequest) => void
}

const getProductById = getSingleProductUseCase(productRepository)
const getAllProducts = getAllProductsUseCase(productRepository)


export const useProductsStore = create<AllState>((set) => ({
  allProducts: null,
  loadingAllProducts: true,
  getAllProducts: async (body) => {
    set({ loadingAllProducts: true })
    try {
      const data = await getAllProducts(body)
      set({ allProducts: data })
    } catch (error) {
      console.error(error)
    } finally {
      set({ loadingAllProducts: false })
    }
  },
  paginatedProducts: null,
  loadingPaginatedProducts: true,
}))

export const useProductStore = create<State>((set) => ({
  singleProduct: null,
  loadingProduct: true,
  getSingleProduct: async (body) => {
    set({ loadingProduct: true })
    try {
      const data = await getProductById(body)
      set({ singleProduct: data })
    } catch (error) {
      console.error(error)
    } finally {
      set({ loadingProduct: false })
    }
  }
}))
