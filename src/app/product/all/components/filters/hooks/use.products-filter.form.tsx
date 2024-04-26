import { useEffect, useState } from "react";
import { defaultValues, IFormValues } from "../model";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useProductsStore } from "../../../../store/use.product.store";
import { IGetAllProductsRequest } from "../../../../../../core/product/domain/get.all.products";

export const useProductsFilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getAllProducts = useProductsStore((state) => state.getAllProducts);
  const methods = useForm<IFormValues>({
    defaultValues
  });

  const [totalProducts, setTotalProducts] = useState(0); 
  
  useEffect(() => {
    methods.setValue('offset', '1'); 
    onChange();
  }, []);
  
  const { categoryId, offset, price_max, price_min, title } = methods.watch();
  const limit = 10; 

  const onChange = async () => {
    const params = new URLSearchParams();

    categoryId && params.append('categoryId', categoryId);
    params.append('limit', limit.toString()); 
    offset && params.append('offset', offset);
    price_max && params.append('price_max', price_max);
    price_min && params.append('price_min', price_min);
    title && params.append('title', title);

    setSearchParams(params.toString());
  };

  useEffect(() => {
    onChange();
  }, [categoryId, offset, price_max, price_min, title]);

  useEffect(() => {
    const fetchProducts = async () => {
      const body: IGetAllProductsRequest = {
        categoryId: searchParams.get('categoryId')
          ? parseInt(searchParams.get('categoryId') || '0')
          : undefined,
        limit: limit, 
        offset: searchParams.get('offset')
          ? parseInt(searchParams.get('offset') || '0')
          : undefined,
        price_max: searchParams.get('price_max')
          ? parseInt(searchParams.get('price_max') || '0')
          : undefined,
        price_min: searchParams.get('price_min')
          ? parseInt(searchParams.get('price_min') || '0')
          : undefined,
        title: searchParams.get('title') || undefined
      };

      const products = await getAllProducts(body);
      if (Array.isArray(products)) {
        setTotalProducts(products.length);
      }
    };

    fetchProducts();
  }, [searchParams, getAllProducts]);

  return { methods, totalProducts }; 
};
