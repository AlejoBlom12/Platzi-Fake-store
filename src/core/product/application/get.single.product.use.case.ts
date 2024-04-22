import { IProductRepository } from "../domain/product.repository.model";

export const getSingleProductUseCase = (respository: IProductRepository) =>
  respository.getSingleProduct;
