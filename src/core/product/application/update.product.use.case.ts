import { IProductRepository } from "../domain/product.repository.model";
import { IUpdateProductRequest } from "../domain/update.product";
import { IUpdateProductResponse } from "../domain/update.product";

export const updateProductUseCase =
  (repository: IProductRepository) =>
  async (
    productId: string,
    updateData: IUpdateProductRequest,
  ): Promise<IUpdateProductResponse> => {
    try {
      const response = await repository.updateProduct(productId, updateData);
      return {
        id: response.id, 
        success: true,
        message: "Product updated successfully",
      };
    } catch (error) {
      console.log(error);
      throw new Error("Error al actualizar el producto");
    }
  };