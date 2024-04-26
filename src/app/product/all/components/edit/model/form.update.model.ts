import * as yup from "yup";
import { IUpdateProductRequest } from "../../../../../../core/product/domain/update.product";

export const defaultUpdateProductValues: IUpdateProductRequest = {
  title: "", 
  price: 0,
};

const updateProductSchema = yup.object().shape({
  title: yup.string().min(1, "Title must have at least 1 character"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .min(0, "Price must be greater than or equal to 0"),
});

export default updateProductSchema;