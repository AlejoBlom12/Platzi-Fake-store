import { create } from "zustand";
import { ICreateCategoryRequest } from "../../../core/category/domain/create.category";
import { categoryRepository } from "../../../core/category/infraestructura/category.repository";
import { createCategoryUseCase } from "../../../core/category/application/create.category.use.case";

interface State {
  loadingCreateCategory: boolean;
  categories: any[]; // Define el tipo adecuado para las categorías
  createCategory: (data: ICreateCategoryRequest) => Promise<void>;
}

const createCategory = createCategoryUseCase(categoryRepository);

export const useCreateCategoryStore = create<State>((set) => ({
  loadingCreateCategory: false,
  categories: [], 
  createCategory: async (data) => {
    set({ loadingCreateCategory: true });
    try {
      const newCategory = await createCategory(data);
      
      set((state) => ({
        loadingCreateCategory: false,
        categories: [newCategory, ...state.categories],
      }));
    } catch (err) {
      console.error(err);
      set({ loadingCreateCategory: false });
    }
  },
}));
