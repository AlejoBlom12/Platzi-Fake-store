export type IProductCategory = {
  id: number;
  name: string;
  image: string;
};

export type IGetAllProductsResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: IProductCategory;
  images: string[];
};
