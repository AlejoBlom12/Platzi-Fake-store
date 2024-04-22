import { create } from "zustand";
import { ICreateCategoryRequest } from "../../../core/category/domain/create.category";
import { IGetAllCategoriesResponse } from "../../../core/category/domain/get.all.categories";
import { categoryRepository } from "../../../core/category/infraestructura/category.repository";
import { createCategoryUseCase } from "../../../core/category/application/create.category.use.case";
import { getAllCategoriesUseCase } from "../../../core/category/application/get.all.categories.use.case";

interface AllState {
  allCategories: IGetAllCategoriesResponse[] | null;
  loadingAllCategories: boolean;
}

interface AllActions {
  getAllCategories: () => Promise<void>;
  createCategory: (data: ICreateCategoryRequest) => Promise<void>;
}

const createCategoryUseCaseInstance = createCategoryUseCase(categoryRepository);
const getAllCategoriesUseCaseInstance = getAllCategoriesUseCase(categoryRepository);

export const useCategoryStore = create<AllState & AllActions>((set) => ({
  allCategories: null,
  loadingAllCategories: true,
  getAllCategories: async () => {
    set({ loadingAllCategories: true });
    try {
      const data = await getAllCategoriesUseCaseInstance();
      set({ allCategories: data, loadingAllCategories: false });
    } catch (err) {
      console.error(err);
      set({ loadingAllCategories: false });
    }
  },
  createCategory: async (data) => {
    try {
      await createCategoryUseCaseInstance(data);
      await set((state) => ({ ...state, loadingAllCategories: true }));
      const updatedCategories = await getAllCategoriesUseCaseInstance();
      set({ allCategories: updatedCategories, loadingAllCategories: false });
    } catch (err) {
      console.error(err);
    }
  },
}));
