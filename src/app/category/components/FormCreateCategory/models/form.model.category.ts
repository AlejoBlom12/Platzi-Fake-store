import * as yup from "yup";

export interface IFormValuesC {
  name: string;
  image: string;
}
export const defaultValues: IFormValuesC = {
  name: "",
  image:"",
};

export const schemaCategory = yup.object().shape({
  name: yup.string().required("Name is required"),
  image: yup.string().required("La imágen es requerida"),
});
