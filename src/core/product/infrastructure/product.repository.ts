import axios from "axios";
import { IProductRepository } from "../domain/product.repository.model";
import { IGetAllProductsResponse } from "../domain/get.all.products/get.all.products.response.model";
import { ICreateProductResponse } from "../domain/create.product";
import { IPagProductsResponse } from "../domain/pagination.product";

const getSingleProduct: IProductRepository["getSingleProduct"] = async ({
  id,
}) => {
  try {
    const { data } = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getPaginatedProducts: IProductRepository["getPaginatedProducts"] =
  async ({ offset, limit }) => {
    try {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`,
      );
      return data as IPagProductsResponse[];
    } catch (err) {
      console.error(err);
      throw new Error("Error al obtener los productos paginados");
    }
  };

const getAllProducts: IProductRepository["getAllProducts"] = async () => {
  try {
    const { data } = await axios.get(
      "https://api.escuelajs.co/api/v1/products",
    );
    return data as IGetAllProductsResponse[];
  } catch (err) {
    console.error(err);
    throw new Error("Error al obtener todos los productos");
  }
};

const createProduct: IProductRepository["createProduct"] = async (request) => {
  try {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/products/",
      request,
    );
    return response.data as ICreateProductResponse;
  } catch (err) {
    console.error(err);
    throw new Error("Error al crear el producto");
  }
};

const updateProduct: IProductRepository["updateProduct"] = async (
  productId,
  request,
) => {
  try {
    const response = await axios.put(
      `https://api.escuelajs.co/api/v1/products/${productId}`,
      request,
    );
    return response.data as ICreateProductResponse;
  } catch (err) {
    console.error(err);
    throw new Error("Error al actualizar el producto");
  }
};

export const productRepository: IProductRepository = {
  getSingleProduct,
  getAllProducts,
  createProduct,
  updateProduct,
  getPaginatedProducts,
};
