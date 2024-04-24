export type IGetAllProductsRequest = {
  title?: string
  price_min?: number
  price_max?: number
  categoryId?: number
  offset?: number
  limit?: number
}
