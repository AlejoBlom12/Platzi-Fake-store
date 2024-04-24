import { IGetAllProductsResponse } from "../../domain/get.all.products";
import { IProductRepository } from "../../domain/product.repository.model";

export const filterProductsByTitleUseCase = (repository: IProductRepository) =>
  async (title: string): Promise<IGetAllProductsResponse[]> => {
    try {

      const products = await repository.filterProductsByTitle({ title });
      return products;
    } catch (error) {
      console.error("Error filtering products by title:", error);
      throw new Error("Error filtering products by title");
    }
  };
