import { IProductRepository } from "../domain/product.repository.model";
import {
  IUpdateProductRequest,
  IUpdateProductResponse,
} from "../domain/update.product";

export const updateProductUseCase =
  (repository: IProductRepository) =>
  async (
    productId: string,
    updateData: IUpdateProductRequest,
  ): Promise<IUpdateProductResponse> => {
    try {
      const response = await repository.updateProduct(productId, updateData);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error("Error al actualizar el producto");
    }
  };
