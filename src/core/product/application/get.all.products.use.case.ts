import { IProductRepository } from '../domain/product.repository.model'

export const getAllProductsUseCase = (repository: IProductRepository) =>
  repository.getAllProducts
