import { ICreateProductRequest } from "../domain/create.product";
import { IProductRepository } from "../domain/product.repository.model";

export const createProductUseCase =
  (repository: IProductRepository) =>
  async (request: ICreateProductRequest) => {
    try {
      const response = await repository.createProduct(request);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
