import * as yup from "yup";

export interface IFormValues {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}
export const defaultValues: IFormValues = {
  title: "",
  price: 0,
  description: "",
  categoryId: 0,
  images: [],
};

export const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be positive")
    .min(0, "Price must be greater than or equal to 0"),

  description: yup.string().required("Description is required"),
  categoryId: yup
    .number()
    .typeError("Category ID must be a number")
    .required("Category ID is required")
    .positive("Category ID must be positive"),
  images: yup
    .array()
    .of(yup.string())
    .transform((value, originalValue) => {
      if (typeof originalValue === "string") {
        return originalValue.split(",");
      }
      return value;
    })
    .min(1)
    .required("Las imágenes son requeridas"),
});
