import { IPagProdutRequest } from '../domain/pagination.product'
import { IProductRepository } from '../domain/product.repository.model'

export const getPaginatedProductsUseCase =
  (repository: IProductRepository) =>
  async ({ offset, limit }: IPagProdutRequest) => {
    try {
      const products = await repository.getPaginatedProducts({ offset, limit })
      return products
    } catch (error) {
      console.error('Error fetching paginated products:', error)
      throw new Error('Error fetching paginated products')
    }
  }
