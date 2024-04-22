import axios from "axios";
import { ICategoryRepository } from "../domain/category.repository.model";
import { IGetAllCategoriesResponse } from "../domain/get.all.categories";
import { ICreateCategoryResponse } from "../domain/create.category";

const getAllCategories: ICategoryRepository["getAllCategories"] = async () => {
  try {
    const { data } = await axios.get(
      `https://api.escuelajs.co/api/v1/categories`,
    );
    return data as IGetAllCategoriesResponse[];
  } catch (err) {
    console.error(err);
    throw new Error("Error al obtener todos los categorias");
  }
};

const createCategory: ICategoryRepository["createCategory"] = async (request) => {
  try {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/categories/",
      request,
    );
    return response.data as ICreateCategoryResponse;
  } catch (err) {
    console.error(err);
    throw new Error("Error al crear el producto");
  }
};

export const categoryRepository: ICategoryRepository = {
  getAllCategories,
  createCategory
};
