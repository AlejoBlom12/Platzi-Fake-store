import { IPagProductsResponse } from './pagination.product.response'

export type IPagProdutRequest = {
  offset: number
  limit: number
}

export interface IGetAllProductsResponse extends IPagProductsResponse {}
