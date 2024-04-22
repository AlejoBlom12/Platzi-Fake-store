import { IGetAllProductsResponse } from './get.all.products/get.all.products.response.model'
import {
  IGetSingleProductRequest,
  IGetSingleProductResponse
} from './get.single.product'

import { ICreateProductRequest, ICreateProductResponse } from './create.product'

import { IUpdateProductRequest, IUpdateProductResponse } from './update.product'

import { IPagProductsResponse, IPagProdutRequest } from './pagination.product'

export interface IProductRepository {
  getSingleProduct(
    body: IGetSingleProductRequest
  ): Promise<IGetSingleProductResponse>
  getAllProducts(): Promise<IGetAllProductsResponse[]>
  createProduct(request: ICreateProductRequest): Promise<ICreateProductResponse>
  updateProduct(
    productId: string,
    request: IUpdateProductRequest
  ): Promise<IUpdateProductResponse>
  getPaginatedProducts(
    params: IPagProdutRequest
  ): Promise<IPagProductsResponse[]>
}
