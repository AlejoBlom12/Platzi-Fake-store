import { create } from "zustand";
import { IUpdateProductRequest } from "../../../core/product/domain/update.product";
import { productRepository } from "../../../core/product/infrastructure/product.repository";

interface State {
  loadingUpdateProduct: boolean;
  updateProduct: (productId: string, data: IUpdateProductRequest) => Promise<void>;
}

export const useUpdateProductStore = create<State>((set) => ({
  loadingUpdateProduct: false,
  updateProduct: async (productId, data) => {
    set({ loadingUpdateProduct: true });
    try {
      await productRepository.updateProduct(productId, data);
    } catch (err) {
      console.error(err);
    } finally {
      set({ loadingUpdateProduct: false });
    }
  },
}));